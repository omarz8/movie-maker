const Movie= require ('../model/model')

const resolvers = {
    Query: {
        movies: () => {
            //all movies
            return Movie.find({})
        },
        movieByName: (args)=>{
            return Movie.findOne({name: args.name})
        },
    },
    Mutation: {
        addMovie: (args) => {
            let movie = new Movie({
                name: args.name,
                genre: args.genre,
                year: args.year
            })
            movie.save()
            return movie
        },
        // image: (args)=>{
        //     return
        // }
    }
  };


module.exports = resolvers