const List = document.querySelector('#list')

fetchRecipes()

async function fetchRecipes() {
    const res = await fetch('/api/recipes')
    const data = await res.json()

    data.map(recipe => List.innerHTML += `
    <div class="recipe" id="${recipe.id}" onclick="window.location.href='/recipes/${recipe.id}'" style="cursor: pointer;" >
        <div class="text">
            <h1>${recipe.id}</h1>
            <h2>${recipe.title}</h2>
            <img src="${recipe.imageUrl}">
        </div>
    </div>
    `).join("")
}