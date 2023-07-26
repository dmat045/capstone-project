import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from "next/link";

// Functional component representing the cuisine page
function Cuisine() {
  // State variable to store cuisine recipes data
  const [cuisine, setCuisine] = useState([]);
  const router = useRouter(); // Next.js router hook for accessing the current route information

  // Function to fetch cuisine recipes data from the Spoonacular API based on cuisine name
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=46111d81ab794ddab146416c6d5e938c`
    );
    const recipes = await data.json();
    setCuisine(recipes.results); // Update the state with cuisine recipes data
  };

  // UseEffect hook to fetch cuisine data when the route changes
  useEffect(() => {
    getCuisine(router.query.type); // Fetch cuisine data based on the query parameter "type"
    console.log(router.query.type); // Log the current query parameter "type"
  }, [router.query.type]);

  // Render the cuisine recipes as a grid of cards
  return (
    <Grid>
      {cuisine && cuisine.map((item) => (
        <Card key={item.id}>
          <img src={item.image} alt={item.title} />
          <Link href={`/recipes/${item.id}`}>{item.title}</Link> {/* Link to the individual recipe page */}
        </Card>
      ))}
    </Grid>
  );
}

// Styled components for grid layout and card styling
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

export default Cuisine;
