import RecipeList from "@/components/recipe-list";

const ListOfRecipe = async () => {
  try {
    const apiResponce = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponce.json();

    return data.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const Recipes = async () => {
  const recipeList = await ListOfRecipe();

  return <RecipeList recipeList={recipeList} />;
};

export default Recipes;
