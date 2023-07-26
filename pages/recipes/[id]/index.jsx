import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

// Functional component representing the recipe page
function Recipe() {
  const router = useRouter(); // Next.js router hook for accessing the current route information
  const { id } = router.query; // Extract the "id" query parameter from the URL
  const [details, setDetails] = useState({}); // State variable to store recipe details
  const [activeTab, setActiveTab] = useState("instructions"); // State variable to manage the active tab
  const [loading, setLoading] = useState(true); // State variable to manage loading state
  const [error, setError] = useState(null); // State variable to manage error state

  // Function to fetch recipe details from the Spoonacular API based on the "id" query parameter
  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=46111d81ab794ddab146416c6d5e938c`
      );

      // Handle non-successful response status
      if (!response.ok) {
        setError("Failed to fetch recipe details");
        return;
      }

      const detailData = await response.json();
      setDetails(detailData); // Update the state with recipe details
    } catch (error) {
      setError("An error occurred while fetching recipe details");
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);
      fetchDetails(); // Fetch recipe details when the "id" query parameter changes
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            {/* Display recipe summary and instructions */}
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {/* Display list of recipe ingredients */}
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

// Styled components for layout and styling
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #f27121, #e94057);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
