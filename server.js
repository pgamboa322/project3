const express = require('express'); 
const mongoose = require('mongoose');
// const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const multer = require("multer");

// Multer data
app.use("/images", express.static(path.join(__dirname, "public/img")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/public/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

const app = express(); 
const PORT = 3001; 
const MONGODB_URI = "mongodb://localhost:27017/my_local_db";   

// app.use(cors());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false }); 
mongoose.connection.once('open', function() { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});