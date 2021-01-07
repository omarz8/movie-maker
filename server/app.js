const express = require('express');
const app = express();
const mongoose= require('mongoose');
const typeDefs= require('./schema/schema');
const resolvers= require('./resolver/resolvers');
const cors= require('cors');
const path= require ('path');
const { ApolloServer } = require('apollo-server-express');


mongoose.connect('mongodb+srv://admin:8azuquita8@cluster0.0q1mo.mongodb.net/moviemaker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=> console.log ('MongooDB succesfully connected'))
.catch((err)=> console.log('Error', err))

//setting graphql
app.use(cors())

const server = new ApolloServer({ typeDefs, resolvers });

app.get('/', (req, res) => {
    res.send('hello from backend')
});

const dir = path.join(process.cwd(), "images");
    app.use("/images", express.static(dir));

server.applyMiddleware({ app });

app.listen(3001, ()=>{
    console.log('server is listen on port 3001')
} )