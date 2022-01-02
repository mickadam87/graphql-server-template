import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

export const sentenceSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default [{ schema: sentenceSchema }];
