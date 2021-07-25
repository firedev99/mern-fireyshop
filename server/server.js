import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import chalk from "chalk"
import path from "path"
import morgan from "morgan"
// db
import connectDB from "./config/db.js"
// middlewares
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js"
// routes
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"

// app config
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());

// endpoints
// home api
app.get('/', (req, res) => {
    res.send("Sup, bois!");
})


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// custom error handler middlewares
app.use(notFound);
app.use(errorHandler);

// listeners
app.listen(PORT, () => console.log(`${chalk.green('✓')} Server running in ${chalk.bgBlue(process.env.NODE_ENV)} mode on port: ${chalk.underline.blue(PORT)}`));