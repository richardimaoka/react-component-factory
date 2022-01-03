import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import path from "path";

const typeDefs = gql`
  ${fs.readFileSync(path.resolve("schema.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tutorial: async () => {
      try {
        const dataString = await fs.promises.readFile("data.json", "utf-8");
        console.log("data.json------------");
        console.log(dataString);
        const jsObject = JSON.parse(dataString);
        console.log("JSON.parse()------------");
        console.log(jsObject);
        return jsObject;
      } catch (err) {
        console.log(err);
        throw new Error(`Error in Query resolver: ${err}`);
      }
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
