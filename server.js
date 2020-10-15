const app = require("express")()
const expressGraphQL = require('express-graphql')
const PORT = process.env.PORT || 5000
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
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

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "hello_world",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => "Returning hello world"
            },
            field2: {
                type: GraphQLString,
                resolve: () => "Hello from field2"
            },
            field3: {
                type: GraphQLString,
                resolve: () => "Hello from field3"
            },
            field4: {
                type: GraphQLString,
                resolve: () => "Hello from field4"
            },
            
        })
    })
})

app.use('/graphql', expressGraphQL.graphqlHTTP(({
    schema: schema,
    graphiql: true
})))

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Hello, Kevin! This is your GraphQL playground")
})