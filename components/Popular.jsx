import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Link from "next/link";

// Load environment variables from .env file
require('dotenv').config();

// Functional component representing the section for popular dishes
function Popular() {
  // State variables for storing data, loading status, and error
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch popular dishes data from API using useEffect hook
  useEffect(() => {
    getPopular();
  }, []);

  // Fetch popular dishes from Spoonacular API
  const getPopular = async () => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=46111d81ab794ddab146416c6d5e938c&number=9`);
      const data = await api.json();

      setPopular(data.recipes); // Update the state with popular dishes data
    } catch (error) {
      setError('Failed to fetch popular dishes. Please try again later.'); // Handle error if API call fails
    } finally {
      setLoading(false); // Set loading to false after API call is completed
    }
  };

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if there is an error with the API call
  if (error) {
    return <div>{error}</div>;
  }

  // Render the popular dishes section with the fetched data
  return (
    <Wrapper>
      <h3>Popular Dishes</h3>
      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem',
      }}>
        {/* Loop through the popular recipes and create a Splide slide for each */}
        {popular && popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              {/* Link to the individual recipe page */}
              <Link href={`/recipes/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

// Styled components for the popular dishes section
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
