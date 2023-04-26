import { port } from "./config/environment";
import app from "./app";
import graphqlServer from "./graphql";
import connectDB from "./db";
const start = async () => {
  try {
    console.log("connecting to database...");
    await connectDB();
    console.log("connected to database");
    await graphqlServer.start();
    // We added this
    graphqlServer.applyMiddleware({
      app,
    });
    app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log("Not able to run GraphQL server");
  }
};

start();
