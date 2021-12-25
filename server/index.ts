import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import path from "path";

const typeDefs = gql`
  ${fs.readFileSync(path.resolve("schema.gql"), "utf8")}
`;

const resolvers = {};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, mocks: true });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
