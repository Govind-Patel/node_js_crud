const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());
app.get('/',(req,resp) =>{
    con.query("select * from users",(err,result) =>{
        if(err){
           resp.send("error");  
        }else{
            resp.send(result);
        }
    });
});

app.post('/',(res,resp)=>{
    const data = res.body;
    con.query("Insert Into users SET ?",data ,(error,result,fields) =>{
        if(error)throw  error;
        resp.send(result);
    })
})

app.put('/:id',(res,resp) =>{
    const data = [res.body.name,res.body.email,res.password,res.params.id];
    con.query("Update users SET name=?,email=?,password=? where id =?",data,(err,result,fields) =>{
        if(err) throw error;
        resp.send(result);
    });
});


app.listen(5000);

