const express = require('express');
const app = express();
const mongoose= require('mongoose');
const {graphqlHTTP}= require('express-graphql');
const {buildSchema}= require('graphql');

mongoose.connect('mongodb+srv://admin:8azuquita8@cluster0.0q1mo.mongodb.net/moviemaker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=> console.log ('MongooDB succesfully connected'))
.catch((err)=> console.log('Error', err))

const schema= buildSchema(`
type Query {
    name: String
}
`)

const rootValue= {
    name: ()=> {
        return `Matrix`
    }
}

//setting graphql

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue
}))


app.get('/', (req, res) => {
    res.send('hello from backend')
})

app.listen(3001, ()=>{
    console.log('server is listen on port 3001')
} )