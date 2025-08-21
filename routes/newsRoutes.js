const express = require('express');
const { getNews } = require('../controllers/newsControllers');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  try{
    const user = req.user;
    const news_data = await getNews(user.preferences);
  
    res.send({
      news : news_data.articles
    })
  }catch(error){
    res.status(500).send({
      error : "Internal server error"
    })
  }
})

module.exports = router;