import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PORT } from './config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, 'data', 'users.json')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`)
  next()
})

const readDB = () => JSON.parse(fs.readFileSync(dataPath, 'utf-8') || '[]')
const writeDB = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))

app.get('/', (req, res) => {
  res.render('index', { users: readDB() })
})


// Rutas API RESTful

// GET /users (Obtener todos los usuarios)
app.get('/users', (req, res) => {
  res.status(200).json(readDB())
})

// GET /users/:id (Obtener un usuario por ID)
app.get('/users/:id', (req, res) => {
  const user = readDB().find(u => u.id == req.params.id)
  user ? res.status(200).json(user) : res.status(404).json({ error: 'No encontrado' })
})

// POST /users (Crear)
app.post('/users', (req, res) => {
  const { nombre, email, edad, activo } = req.body
  if (!nombre || !email || !edad) return res.status(400).json({ error: 'Faltan datos' })

  const users = readDB()
  const newUser = { id: Date.now(), nombre, email, edad: parseInt(edad), activo: !!activo }
  users.push(newUser)
  writeDB(users)
  res.status(201).json(newUser)
})

// PUT /users/:id 
app.put('/users/:id', (req, res) => {
  let users = readDB()
  const index = users.findIndex(u => u.id == req.params.id)
  if (index === -1) return res.status(404).json({ error: 'No encontrado' })

  users[index] = { ...users[index], ...req.body }
  writeDB(users)
  res.status(200).json(users[index])
})

// DELETE /users/:id 
app.delete('/users/:id', (req, res) => {
  const users = readDB()
  const nuevos = users.filter(u => u.id != req.params.id)
  if (users.length === nuevos.length) return res.status(404).json({ error: 'No existe' })

  writeDB(nuevos)
  res.status(200).json({ message: 'Eliminado correctamente' })
})

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`))
