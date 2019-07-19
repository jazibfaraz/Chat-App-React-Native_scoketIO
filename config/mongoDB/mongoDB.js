const mongoose = require('mongoose');
const cloudUri = 'mongodb://mydb:mydb12345@ds243317.mlab.com:43317/todo';


mongoose.connect(cloudUri, { useNewUrlParser: true })
    .then(res => console.log('mongoDB connected..')
    ).catch(err => console.error('could not connect to mongoDB !')
    );


const schema = mongoose.Schema({
    userId: Number,
    name: String,
    password: String,
    email: String,
    image: String,
    status: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Chat = mongoose.model('chatApp', schema);


module.exports = Chat;