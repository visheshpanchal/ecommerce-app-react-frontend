import React from "react";
import classes from "./Store.module.css";
import Card from "./Card";

const productsArr = [
  {
    id: "1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    description: "description about product",
  },

  {
    id: "2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    description: "description about product",
  },

  {
    id: "3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    description: "description about product",
  },

  {
    id: "4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    description: "description about product",
  },
];

const Store = () => {
  const card = productsArr.map((product) => {
    return (
      <div className="col col-6">
        <Card title={product.title} price={product.price} imageUrl={product.imageUrl} key={product.id} id={product.id} />
      </div>
    );
  });

  console.log(card);

  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center mt-3">
        <div className={`row ${classes["space-item"]}`}>{card}</div>
      </div>
    </React.Fragment>
  );
};
export { productsArr };
export default Store;
