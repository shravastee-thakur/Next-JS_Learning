import RecipeDetailsItem from "@/components/recipe-details";

const fetchDetails = async (currentRecipeId) => {
  try {
    const apiResponce = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponce.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const RecipeDetails = async ({ params }) => {
  const getRecipeDetails = await fetchDetails(params.details);

  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
};

export default RecipeDetails;
