const Blog = require('../models/blogModel');

const createBlog = async (req, res) => {
    try {
        const blog = new Blog({
            title: req.body.title,
            content: req.body.content,
            image: req.file.filename,
            author: req.body.author,
            createAt: req.body.createAt,
        });
        const blogData = await blog.save();

        res.status(200).send({ success: true, msg: 'Blog Data', data: blogData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).send({ success: true, msg: 'Blog Data', data: blogs });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getBlogById = async (req, res) => {
    const id = req.params.id;
    try {
        const blog = await Blog.findById({ _id: id });
        res.status(200).send({ success: true, msg: 'Blog Data', data: blog });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;

        await Blog.deleteOne({ _id: id });
        res.status(200).send({ success: true, msg: 'Xoá Blog thành công' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        if (req.file !== undefined) {
            var id = req.body.id;
            var title = req.body.title;
            var content = req.body.content;
            var filename = req.file.filename;
            var author = req.body.author;
            var createAt = req.body.createAt;

            await Blog.findByIdAndUpdate(
                { _id: id },
                { $set: { title: title, content: content, image: filename, author: author, createAt: createAt } },
            );
            res.status(200).send({ success: true, msg: 'Blog updated successfully' });
        } else {
            var id = req.body.id;
            var title = req.body.title;
            var content = req.body.content;
            var author = req.body.author;
            var createAt = req.body.createAt;

            await Blog.findByIdAndUpdate(
                { _id: id },
                { $set: { title: title, content: content, author: author, createAt: createAt } },
            );
            res.status(200).send({ success: true, msg: 'Cập nhật Blog thành công' });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    deleteBlog,
    updateBlog,
};
