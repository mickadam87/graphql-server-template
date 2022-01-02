import express from "express";
import graphql from "./router";

let app = express();
app.use("/graphql", graphql);

export default app;
