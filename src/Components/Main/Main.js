import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import { db } from "../../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Main.css";

function Main() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "home_products");

  useEffect(() => {
    const getHomeProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      // console.log(data);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getHomeProducts();
  }, []);
  return (
    <div>
      <div className="header_container">
        <Header />
      </div>
      <div className="home">
        <img
          src="https://m.media-amazon.com/images/I/61IlupYtztL._SX1500_.jpg"
          className="home_image"
          alt="amazon_banner"
        />
        <div className="home_row">
          {products
            .filter((product) => product.display_row === 1)
            .map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
        </div>
        <div className="home_row">
          {products
            .filter((product) => product.display_row === 2)
            .map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
        </div>
        <div className="home_row">
          {products
            .filter((product) => product.display_row === 3)
            .map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
