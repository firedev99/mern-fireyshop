import Product from "../model/productModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: `Product not found!` });
    }
};

export const createProduct = async (req, res) => {
    const { name, price, category, rating, imageSrc, vendorName, sideImagesSrc, description, featuring, gender, colors, sizes, features } = req.body;
    try {
        const product = new Product({
            name,
            price,
            user: req.user._id,
            category,
            imageSrc,
            description,
            vendorName,
            gender,
            rating,
            sideImagesSrc,
            colors,
            featuring,
            sizes,
            features,
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { name, price, category, id, rating, imageSrc, vendorName, sideImagesSrc, description, featuring, gender, colors, sizes, features } = req.body;
    try {
        const product = await Product.findById(req.params.id)
        if (product) {
            product._id = id;
            product.name = name
            product.price = price
            product.category = category
            product.rating = rating
            product.imageSrc = imageSrc
            product.vendorName = vendorName
            product.sideImagesSrc = sideImagesSrc
            product.description = description
            product.featuring = featuring
            product.gender = gender
            product.colors = colors
            product.sizes = sizes
            product.features = features


            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404);
            throw new Error('Product not found')
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};



export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    try {
        if (product) {
            await product.remove();
            res.json({ message: 'Product removed!' });
        } else {
            res.status(404);
            throw new Error('Product not found!');
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};