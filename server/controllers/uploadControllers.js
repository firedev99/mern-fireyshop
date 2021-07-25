export const singleUpload = (req, res) => {
    try {
        const file = req.file;
        if (file) {
            res.status(201).json(`/${file.path}`);
        } else {
            res.status(400);
            throw new Error('Choose a file / Insert a valid type')
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const multipleUpload = (req, res) => {
    try {
        const files = req.files;
        if (files) {
            const newArr = files.map(({ path }) => ({ imageSrc: `/${path}` }));
            res.status(201).json(newArr);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}