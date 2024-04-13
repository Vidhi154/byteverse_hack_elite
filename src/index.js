const express=require('express');
const path=require('path');
const bcrypt=require('bcrypt')
const collection=require("./config");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('login');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.post('/signup', async (req,res)=>{
  const data={
name:req.body.username,
password: req.body.password
  }

  const existinguser=await collection.findOne({name: data.name});

  if(existinguser){
    res.send("User already exists. Please choose diffret name");
  }
  else{
   
    const userdata=await collection.insertMany(data);
    console.log(userdata);
  
  }

 
})

app.post('/login', async (req,res)=>{
  try{
const check=await collection.findOne({name: req.body.username});
if(!check){
  res.send("user name cannot find");}
else{
res.render("home")
  
}

const isPasswordMatch=await bcrypt.compare(req.body.password, check.password);
if(isPasswordMatch){
  // res.render("home");
  res.render("Wrong Password");
}else{
  res.send("Wrong Details");
}
  }catch{

}})


const port=3000;
app.listen(port,()=>{
console.log("Server is riunning on port 3000...");

})