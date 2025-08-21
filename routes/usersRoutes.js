const express = require('express');
const { register, login, getPreferences, updatePreferences } = require('../controllers/usersController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/signup', async (req, res) => {

  const user = req.body;

  try{
    await register(user);
    res.send({
      success : true
    })
  }catch(error){
    res.status(400).send({
      success : false,
      error : error
    })
  }
});

router.post('/login', async (req, res) => {
  try{
    const token = await login(req.body.email, req.body.password);

    res.send({
      sucess : true,
      token : token
    })
  }catch(error){

    res.status(401).send({
      success : false,
      error : error
    })
  }
})

router.get('/preferences', verifyToken, async (req, res) => {
  res.send({
    success : true,
    preferences : getPreferences(req.user)
  })
})

router.put('/preferences', verifyToken, async (req, res) => {
  await updatePreferences(req.user_id, req.body.preferences)
  res.send({
    success : true
  })
})

module.exports = router;