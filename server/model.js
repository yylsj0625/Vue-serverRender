const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
//检测是否连接成功
mongoose.connection.on('connected',function(){
    console.log('mongodb success');
});

//建立数据模型
const models={
    userChat:{
       'username':{type:String,require:true},
        'password':{type:Number,require: true}
    }
};

//遍历集合对象，使用Schema在内存中创建集合
for(let m in models){
    mongoose.model( m ,new mongoose.Schema(models[m]))
}

//默认导出
module.exports={
    getModels:function (name) {
        //返回内存中的集合
        return mongoose.model(name)
    }
};
