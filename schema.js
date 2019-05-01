const axios = require('axios');
const {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema} = require('graphql');

// Todo Type

const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        task: {type: GraphQLString},
        completed: {type: GraphQLBoolean}
    })
});


// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        todos: {
            type: new GraphQLList(TodoType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
            }
        }

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
