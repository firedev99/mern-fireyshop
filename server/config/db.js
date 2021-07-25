import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`${chalk.green('✓')} MongoDB connected: ${chalk.underline.magenta(con.connection.host)}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;