import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("public/jobs.json"); // Point to your jobs.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Route all /api requests to json-server
server.use("/api", router);

server.listen(8000, () => {
  console.log("JSON Server is running on port 8000");
});
