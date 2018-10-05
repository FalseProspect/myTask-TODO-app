const express = require('express');
const router = express.Router();
const Task = require('../models/task-model');
const multiparty = require('multiparty');

//Handle post request
router.post('/', (req,res,)=>{
    //Multiparty handles formData sent
    let form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        console.log('Multiparty caught request');
        let newTask = fields;
            //If user is signed-in, data will be saved;
            if(req.user){
                newTask = Object.assign({owner: req.user._id},newTask);
                Task.create({
                    owner: newTask.owner,
                    task: newTask.task[0],
                    dateID: newTask.dateID[0],
                    creationDate: newTask.creationDate[0],
                    completionDate: newTask.completionDate[0],
                    deletionDate: newTask.deletionDate[0]
                });
            }
        console.log(newTask);
        res.end();
      });
        res.sendStatus(200);
});

module.exports = router;