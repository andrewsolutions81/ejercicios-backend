const express = require('express')

const agenda = [
  {
    id: 1,
    name: "Juan Pablo",
    number: "123-456-789",
  },
  {
    id: 2,
    name: "Mauricio Arango",
    number: "987-654-321",
  },
  {
    id: 3,
    name: "Andres Berrio",
    number: "456-987-123",
  }
]

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo TOP v23</h1>')
})


