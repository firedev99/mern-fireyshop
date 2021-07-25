import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from "chalk";
import users from './data/user.js';
import products from './data/dummyDatas.js';
import User from './model/userModel.js';
import Product from './model/productModel.js';
import Order from './model/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProduct = products.map(product => {
            return { ...product, user: adminUser }
        });

        await Product.insertMany(sampleProduct);
        console.log(`${chalk.green('✓')} Data imported!`);
        process.exit();
    } catch (error) {
        console.error(`${chalk.red.inverse} ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log(`${chalk.green('✓')} Data destroyed!`);
        process.exit();
    } catch (error) {
        console.error(`${chalk.red.inverse} ${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}