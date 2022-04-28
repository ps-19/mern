const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const express = require("express")

const app=express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send("I am here!");
});



const url = "mongodb+srv://user:user@cluster0.tvjca.mongodb.net/demo2?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true})
.then(()=>{
    console.log("Database is connected now");
})
.catch((err)=>{
    console.log(err);
})
;

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("articles", articleSchema);

app.get('/article', function(req,res){
   Article.find((err,result)=>{
       if(!err){
           res.send(result);
           console.log(result);
       }
   })
});

app.post('/article', (req,res)=>{
    var obj = Article({
        title: req.body.title,
        content: req.body.content
    });

    Article.collection.insertOne(obj);
    res.send("Inserted Successfully");
});

app.delete('/article', (req,res)=>{
    Article.deleteMany((err)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Deleted all field");
        }
    })
});


app.get('/article/:xyz',(req,res)=>{
    Article.find({title: req.params.xyz}, (err, result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
});


app.delete('/article/:xyz', (req,res)=>{
    Article.deleteOne({title: req.params.xyz}, (err)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Successfully deleted!");
        }
    })
});

app.put('/article/:xyz',(req,res)=>{
    Article.updateOne(
        {title: req.params.xyz}, 
        {title: req.body.title, content: req.body.content},
        function(err,result){
            if(!err){
                res.send("Successfully updated");
            }
            else{
                res.send(err);
            }
        }
    )
});

app.patch('/article/:xyz', (req,res)=>{
    Article.updateOne(
        {title: req.params.xyz},
        {$set: req.body},
        (err,result)=>{
            if(!err)
            res.send(result);
            else
            res.send(err);
        }
    )
});


app.listen(3000, ()=>{
    console.log("Server running at 3000");
});
