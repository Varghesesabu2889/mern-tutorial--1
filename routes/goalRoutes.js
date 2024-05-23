const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(201).json({
        message:`Get  Goal`
    })
})
router.post('/',(req,res)=>{
    res.status(201).json({
        message:`Set  Goal` 
    })
})
router.put('/:id',(req,res)=>{
    res.status(201).json({
        message:`Update  Goal ${req.params.id}`
    })
})
router.delete('/:id',(req,res)=>{
    res.status(201).json({
        message:`Delete  Goal ${req.params.id}`
    })
})








module.exports = router