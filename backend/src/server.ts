import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'
import { db } from './config/db'
import CreditRouter from './routes/CreditRouter'

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue.bold("Conexion exitosa a la base de datos"))
    } catch (error) {
        console.log(colors.red.bold("Error al conectarse a la base de datos"))
    }
}
connectDB()

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/credits', CreditRouter)

export default app