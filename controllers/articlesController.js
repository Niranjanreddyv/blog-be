const Article = require('../models/Article');
const User = require('../models/User')


const createArticle = async (req,res) => {
    // after log email,password and that we need to store to in the request

    const id = req.userId;

    const author = await User.findById(id).exec();
    const {title, description,body, tagList} = req.body.article;


    if(!title || !description || !body){
        return res.status(400).json({message:"All feilds are required"});
    }

    const article = await Article.create({title,description,body});

    article.author = id;

    if(Array.isArray(tagList) && tagList.length > 0){
        article.tagList = tagList;
    }

    await article.save();



    return res.status(200).json({article: await article.toArticleResponse(author)})
}

// const feedArticles= async (req,res) => {
//     // after log email,password and that we need to store to in the request

// }



module.exports = {
    createArticle,
   
};