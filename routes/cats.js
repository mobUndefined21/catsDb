
const express = require('express');
const router = express.Router();
const Cat = require('../models/Cat');

router.get('/', async(req, res, next) => {
  try{
    const cats = await Cat.find();
    res.json(cats);
  } catch(err) {
    res.json({message: err});
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    const cat = await Cat.findById(req.params.id);
    res.json(cat);
  } catch(err) {
    res.json({message: err});
  }
});

router.post('/', async(req, res, next) => {
  const cat = new Cat({
    id: req.body.id,
    name: req.body.name
  });
  try{
    const savedCat = await Cat.save();
    res.json(savedPost);
  } catch(err) {
    res.json({message: err})
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedCat = await Cat.remove({ _id: req.params.id });
    res.json(removedCat);
  } catch(err) {
    res.json({message: err})
  }
});

router.patch('/:id', async(req, res) =>{
  try{
    const updatedCat = await Cat.updateOne({ _id: req.params.id },
      {
        $set: {name: req.body.name}
    });
    res.json(updatedCat);
  }
  catch(err) {
    res.json({message: err})
  }
})

module.exports = router;