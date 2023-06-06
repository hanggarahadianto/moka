const express = require("express");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const orderRouter = require("./routes/order");
app.use("/order", orderRouter);

const db = require("./models/index");

app.get("/", (req, res) => {
  res.send("hello moka");
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("This server is running ... ");
    });
  })
  .catch((error) => {
    console.log(error);
  });
