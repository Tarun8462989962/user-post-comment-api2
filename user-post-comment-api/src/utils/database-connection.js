const mongoose= require ('mongoose');


const connectDatabase = function(){
    mongoose.set('strictQuery',true)
    return mongoose.connect("mongodb://localhost:27017/user-post-comment");
}

mongoose.connection.on('connected', () => {
    console.log('database connected')
})

module.exports = connectDatabase