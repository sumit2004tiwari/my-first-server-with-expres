const express = require('express');
  const app = express()
  const port = 2000;

  app.get('/', (req,res)=>{
        res.send('iamyour baap')
  })

  app.get('/login' , (req,res)=>{
    res.send('this is a login page ')
  })

   app.get('/logout' , (req , res)=>{
    res.send("now you finally logout")
   })
 
   app.get('/dashboard' , (req , res)=>{
    res.send("now you are coming in dashboard")
   })

   app.get('/insta' , (req ,res)=>{
    res.send('<h1> sumit tiwari is the owner of google company <h1/>')
   })

   app.get('/you' , (req , res)=>{
    res.send("<h2>sumit tiwari is the owner of youtube also</h2>")
   })
    
  app.listen(port , ()=>{
    console.log(`example app will listning on this port ${port}`)
  })
