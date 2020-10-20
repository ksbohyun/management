const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "김보현",
      birthday: "930820",
      gender: "남자",
      job: "무직",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "강수현",
      birthday: "920225",
      gender: "여자",
      job: "자영업",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "김근현",
      birthday: "981212",
      gender: "남자",
      job: "군인",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
