const BlogPost = require('../models/BlogPost');

async function listPosts(req, res, next) {
  try {
    const posts = await BlogPost.find({ publishStatus: 'published' }).populate('author', 'name').sort({ createdDate: -1 });
    res.json(posts);
  } catch (error) { next(error); }
}

async function getPost(req, res, next) {
  try {
    const post = await BlogPost.findById(req.params.id).populate('author', 'name');
    if (!post || (post.publishStatus !== 'published' && (!req.user || String(post.author._id) !== String(req.user._id)))) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) { next(error); }
}

async function createPost(req, res, next) {
  try {
    const { title, content, publishStatus } = req.body;
    if (!title?.trim() || !content?.trim()) return res.status(400).json({ message: 'Title and content are required' });
    const post = await BlogPost.create({ title: title.trim(), content, publishStatus: publishStatus === 'published' ? 'published' : 'draft', author: req.user._id });
    res.status(201).json(await post.populate('author', 'name'));
  } catch (error) { next(error); }
}

async function updatePost(req, res, next) {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (String(post.author) !== String(req.user._id)) return res.status(403).json({ message: 'Only the author can update this post' });
    const { title, content, publishStatus } = req.body;
    if (!title?.trim() || !content?.trim()) return res.status(400).json({ message: 'Title and content are required' });
    post.title = title.trim(); post.content = content; post.publishStatus = publishStatus === 'published' ? 'published' : 'draft';
    await post.save();
    res.json(await post.populate('author', 'name'));
  } catch (error) { next(error); }
}

async function deletePost(req, res, next) {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (String(post.author) !== String(req.user._id)) return res.status(403).json({ message: 'Only the author can delete this post' });
    await post.deleteOne();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) { next(error); }
}

async function listMyPosts(req, res, next) {
  try { res.json(await BlogPost.find({ author: req.user._id }).sort({ updatedDate: -1 })); } catch (error) { next(error); }
}

module.exports = { listPosts, getPost, createPost, updatePost, deletePost, listMyPosts };
