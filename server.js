const app = require("express")()
const expressGraphQL = require('express-graphql')
const PORT = process.env.PORT || 5000
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

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