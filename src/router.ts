import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
import { stitchSchemas } from "@graphql-tools/stitch";
import subschemas from "./graph";

export default Router().use(
  "/",
  graphqlHTTP({
    schema: stitchSchemas({
      subschemas,
    }),
    graphiql: true,
  })
);
