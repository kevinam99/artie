const app = require("express")()
const expressGraphQL = require('express-graphql')
const PORT = process.env.PORT || 5000
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')


const authors = [
    { id: 1, name: "John Grisham" },
    { id: 2, name: "Stephen King "},
    { id: 3, name: "Dan Brown "},
    { id: 4, name: "Robin Cook"}
]

const books = [
    { id: 1, name: "Origin", authorId: 3 },
    { id: 2, name: "The Last Juror", authorId: 1 },
    { id: 3, name: "The Shining", authorId: 2 },
    { id: 4, name: "Pandemic", authorId: 4 },
    { id: 5, name: "Da Vinci Code", authorId: 3 },
    { id: 6, name: "The Stand", authorId: 2 },
    { id: 7, name: "A Time to Kill", authorId: 1 },
    { id: 8, name: "Terminal", authorId: 4 },
    { id: 9, name: "Digital Fortess", authorId: 1 },
    { id: 10, name: "Carrie", authorId: 2 },
    { id: 11, name: "Angels and Demons", authorId: 3 },
    { id: 12, name: "Abducted", authorId: 4 },
    { id: 13, name: "Inferno", authorId: 3 },
    { id: 14, name: "The Firm", authorId: 1 },
    { id: 15, name: "It", authorId: 2 },
    { id: 16, name: "Fatal Cure", authorId: 4 },
    { id: 17, name: "The Runaway Jury", authorId: 1 },
    { id: 18, name: "Doctor Sleep", authorId: 2 },
    { id: 19, name: "Deception Point", authorId: 3 },
    { id: 20, name: "Death Benefit", authorId: 4 },
    { id: 21, name: "The Institute", authorId: 2 },
    { id: 22, name: "Host", authorId: 4 }
]

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Author name',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Book written by author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) }, // resolve not need since it will be pulled directly from the `books` object
        name: {type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) }
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of books available',
            resolve: () => books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of authors',
            resolve: () => authors
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})


app.use('/graphql', expressGraphQL.graphqlHTTP(({
    schema: schema,
    graphiql: true
})))

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`Hello, Kevin! Head over to <b> <i> <a href = "/graphql"> /graphql </a> </i> </b> to your GraphQL playground.`)
})