const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const events = require("./routes/api/events");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);



app.use("/api/users", users);
app.use("/api/events", events);

const port = process.envPORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));