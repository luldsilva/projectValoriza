import express, { response } from "express";

//@types/express
const app = express();

app.get("/test", (Request, Response) => {
  return Response.send("Hello test get");
})

app.post("/test-post", (Request, Response) => {
  return Response.send("Hello test post");
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running on http://localhost:3000"));