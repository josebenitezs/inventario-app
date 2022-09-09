const mongoose = require('mongoose');

const getConection = async () => {
    
    try {
        const url = 'mongodb://user-iud:u1gS5jEJv8hTCjVf@ac-hzmpybr-shard-00-00.lpxfae9.mongodb.net:27017,ac-hzmpybr-shard-00-01.lpxfae9.mongodb.net:27017,ac-hzmpybr-shard-00-02.lpxfae9.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-1usy4z-shard-0&authSource=admin&retryWrites=true&w=majority';
   
        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {
    getConection,
}