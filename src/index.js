import express from 'express'
import path from 'path'
import data from './data/recipes.json' assert { type: 'json' }

const host = 'localhost'
const port = 3000

const app = express()
app.use(express.static('public'))

app.get('/api/recipes', (req, res) => {
  res.send(data.recipes.map(recipe => ({
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    estimatedCost: recipe.estimatedCost,
    imageUrl: recipe.imageUrl
  })))
})

app.get('/recipes/:id', (req, res) => {
  res.status(200).sendFile(path.resolve('public/recipe.html'))
})

app.get('/api/recipes/:id', (req, res) => {
  const recipeData = data.recipes.find(recipe => recipe.id == req.params.id)
  res.status(200).send(recipeData)
})

app.listen(port, err => {
  if (err) {
    throw err
  }
  console.log('Server running on: http://' + host + ':' + port)
})