const postResolvers = require('./posts');
const usersResolvers = require('./users');
const commentResolvers = require('./comments')

module.exports = {
        Query: {
            ...postResolvers.Query
        },
        Mutation: {
            ...usersResolvers.Mutation,
            ...postResolvers.Mutation,
            ...commentResolvers.Mutation
        }
}