const express = require('express');
const app = express();
const mongoose= require('mongoose');
const {graphqlHTTP}= require('express-graphql');
const movieSchema= require('./schema/schema');
const resolvers= require('./resolver/resolvers');
const cors= require('cors');


mongoose.connect('mongodb+srv://admin:8azuquita8@cluster0.0q1mo.mongodb.net/moviemaker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=> console.log ('MongooDB succesfully connected'))
.catch((err)=> console.log('Error', err))

//setting graphql
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers,
}))


app.get('/', (req, res) => {
    res.send('hello from backend')
})

app.listen(3001, ()=>{
    console.log('server is listen on port 3001')
} )