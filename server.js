const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3030;
const Article = require('./Db/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
mongoose.connect('mongodb+srv://rohitsaxena125:gVy92UU3zNj7hMJL@todolist.an2xjva.mongodb.net/Article?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})
app.use('/articles', articleRouter)
app.listen(5000,()=>{
  console.log("server is running");
}
)
