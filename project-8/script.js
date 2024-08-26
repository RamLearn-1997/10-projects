const API_KEY = "USE_YOUR_API";

const recipeListEl = document.getElementById('recipe-list')

function displayRecipes(recipes){
   recipeListEl.innerHTML = "";
   recipes.forEach((recipe) => {
     const recipeItemEl = document.createElement('li');
     recipeItemEl.classList.add('recipe-item');
     const recipeImageEl = document.createElement('img');
     recipeImageEl.src = recipe.image;
     recipeImageEl.alt = "recipe Image";
     const recipeTitleEl = document.createElement('h2');
     recipeTitleEl.innerText = recipe.title
     const recipeIngredientsEl = document.createElement('p')
     recipeIngredientsEl.innerHTML = ` <strong>Ingredients :</strong>
     ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
     `;
     const recipeLinkEl = document.createElement('a');
     recipeLinkEl.href = recipe.sourceUrl;
     recipeLinkEl.innerText = "View Recipe"


     recipeItemEl.appendChild(recipeImageEl)
     recipeItemEl.appendChild(recipeTitleEl)
     recipeItemEl.appendChild(recipeIngredientsEl);
     recipeItemEl.appendChild(recipeLinkEl);
     recipeListEl.appendChild(recipeItemEl)
   })
}



async function getRecipes() {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    
    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return []; // Return an empty array or handle it appropriately
  }
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes)
}

init();
