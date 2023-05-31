const Post = require('../models/postModel');

const createPost = async (req, res) => {
    try {
        const post = new Post({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            desc: req.body.desc,
            category: req.body.category,
        });
        const postData = await post.save();

        res.status(200).send({ success: true, msg: 'Post Data', data: postData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).send({ success: true, msg: 'Post Data', data: posts });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getPostById = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById({ _id: id });
        res.status(200).send({ success: true, msg: 'Post Data', data: post });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;

        await Post.deleteOne({ _id: id });
        res.status(200).send({ success: true, msg: 'Post delete Success' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        if (req.file !== undefined) {
            var id = req.body.id;
            var name = req.body.name;
            var price = req.body.price;
            var filename = req.file.filename;
            var desc = req.body.desc;
            var category = req.body.category;

            await Post.findByIdAndUpdate(
                { _id: id },
                { $set: { name: name, price: price, image: filename, desc: desc, category: category } },
            );
            res.status(200).send({ success: true, msg: 'Post updated successfully' });
        } else {
            var id = req.body.id;
            var name = req.body.name;
            var price = req.body.price;
            var desc = req.body.desc;
            var category = req.body.category;

            await Post.findByIdAndUpdate(
                { _id: id },
                { $set: { name: name, price: price, desc: desc, category: category } },
            );
            res.status(200).send({ success: true, msg: 'Post updated successfully' });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    deletePost,
    updatePost,
};
