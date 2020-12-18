//const Movie= require ('../model/model')

const movies=[
    {id:3, name:'Matrix', genre: 'action', year:'1999'},
    {id:2, name:'Matrix', genre: 'action', year:'1999'},
    {id:4, name:'Matrix', genre: 'action', year:'1999'},
    {id:5, name:'Matrix', genre: 'action', year:'1999'},
    {id:6, name:'Matrix', genre: 'action', year:'1999'},
    {id:1, name:'Matrix', genre: 'action', year:'1999'},
    {id:7, name:'Matrix', genre: 'action', year:'1999'},
    {id:8, name:'Matrix', genre: 'action', year:'1999'}
    
]


const resolvers = {
    movies: ()=> {
        return movies
    }
}

module.exports= resolvers