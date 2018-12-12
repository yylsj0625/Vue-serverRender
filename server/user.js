const Vue = require('vue');
const express = require('express');
const router  = express.Router();
const model = require('./model');
const userChat = model.getModels('userChat');
const renderer = require('vue-server-renderer').createRenderer();

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    userChat.find({username,password},function (err,doc) {
        console.log(doc);
        if(doc.length){
            res.json({code:0,data:'登陆成功'})
        }else{
            res.json({code:1,data:'该用户未注册'})
        }
    })
});
router.post('/register', (req, res) => {
    const {username, password} = req.body;
    userChat.find({username},function (err,doc) {
        console.log(doc)
        if(doc.length){
            res.json({code:1,data:'该用户已注册'})
        }else{
            userChat.create({username,password},function (err,doc) {
                if(!err){
                    res.json({code:0,data:'注册成功'})
                }else{
                    console.log(doc)
                }
            })

        }
    })
});
router.get('/html', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    });
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
    })
});
module.exports = router;
