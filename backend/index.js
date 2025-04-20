import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const app = express();
app.use(cors())
app.use(express.json())
app.use(UserRoute);

app.listen(3000, ()=> console.log('Server up and running...'));