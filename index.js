const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./routers/blogRoute');
const app = express();
 app.use(express.json());
  app.use("/blogs", routes);
mongoose.set("strictQuery", false);
// const dbURI =
//   "mongodb+srv://joselyne:12345@myapi.19iwnvv.mongodb.net/?retryWrites=true&w=majority";
const dbURI = "mongodb://127.0.0.1:27017/myBrandDb";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database!");
}).catch(e => console.log(e));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
