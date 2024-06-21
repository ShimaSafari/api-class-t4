document.addEventListener("DOMContentLoaded", () => {
  const recipesContainer = document.getElementById("recipesContainer");
  async function fetchRecipes() {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const json = await response.json();
      console.log(json.recipes);
      recipesUI(json.recipes);
    } catch (error) {
      console.error("Somthing went wrong while fetching:", error);
    }
  }

  function recipesUI(recipes) {
    recipes.forEach((rec) => {
      // main tag for container
      const recipesMain = document.createElement("main");

      // img tag for image
      const recipesImg = document.createElement("img");
      recipesImg.src = rec.image;
      recipesMain.appendChild(recipesImg);

      // p h2 for name
      const recipesName = document.createElement("p");
      recipesName.innerHTML = `<h2>${rec.name}</h2>`;
      recipesMain.appendChild(recipesName);

      // div tag for text container
      const recipesText = document.createElement("div");
      recipesMain.appendChild(recipesText);

      // p strong tag for Ingredients
      const recipesIngredients = document.createElement("p");
      recipesIngredients.innerHTML = `<strong>📝Ingredients:</strong> ${rec.ingredients}`;
      recipesText.appendChild(recipesIngredients);

      // p strong tag for Instructions
      const recipesInstructions = document.createElement("p");
      recipesInstructions.innerHTML = `<strong>👩‍🍳Instructions:</strong> ${rec.instructions}`;
      recipesText.appendChild(recipesInstructions);

      // p strong tag for Rating
      const recipesRating = document.createElement("p");
      recipesRating.innerHTML = `<strong>⭐Rating: ${rec.rating}</strong>`;
      recipesText.appendChild(recipesRating);

      recipesContainer.appendChild(recipesMain);
    });
  }
  fetchRecipes();
});
