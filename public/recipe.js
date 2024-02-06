const info = document.querySelector('#info');
const recipeID = window.location.pathname.split('/')[2]

fetchRecipes()

async function fetchRecipes() {
    const res = await fetch(`/api/recipes/${recipeID}`)
    const recipe = await res.json()
    info.innerHTML = `
    <div id="topBar">${recipe.title}</div>

    <div id="main">
        <h1 onclick="window.location.href='/'" style="cursor: pointer; ">< Back</h1>
        <div id="list">
        <img src="${recipe.imageUrl}">
        <h2>${recipe.description}</h2>
        <div id="ingredients">
        <ul>Ingredients: ${recipe.ingredients.map(ingredient => `
            <li>${ingredient.name}: ${ingredient.amount}</li>
        `).join('')}</ul>
        </div>
        <h3>Instructions:</h3>
        <h3>${recipe.instructions.join('\n')}</h3>
        <h4>Cost: ${recipe.estimatedCost}</h4>
        </div>
    </div>
    `

}