import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customer = [
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
];

export default class App extends React.Component {
  render() {
    return (
      <div>
        {customer.map((customer) => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          );
        })}
      </div>
    );
  }
}
