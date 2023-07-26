import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// Functional component representing the searched recipes page
function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]); // State variable to store the searched recipes
  const [loading, setLoading] = useState(false); // State variable to manage loading state
  const [error, setError] = useState(null); // State variable to manage error state
  const router = useRouter(); // Next.js router hook for accessing the current route information
  const { search } = router.query; // Extract the "search" query parameter from the URL

  // Function to fetch searched recipes from the Spoonacular API based on the "search" query parameter
  const getSearched = async (name) => {
    setLoading(true); // Set loading state to true while fetching data
    setError(null); // Clear any previous error message

    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=46111d81ab794ddab146416c6d5e938c&query=${name}&number=10` 
      );
      const recipes = await data.json();
      setSearchedRecipes(recipes.results); // Update the state with searched recipes
    } catch (error) {
      setError('Failed to fetch recipes. Please try again later.');
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };

  useEffect(() => {
    if (search) {
      getSearched(search); // Fetch searched recipes when the "search" query parameter changes
    }
  }, [search]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display an error message if there was an issue fetching the recipes
  }

  return (
    <Grid>
      {searchedRecipes.map((item) => (
        <Card key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </Card>
      ))}
    </Grid>
  );
}

// Styled components for layout and styling
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-column-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
