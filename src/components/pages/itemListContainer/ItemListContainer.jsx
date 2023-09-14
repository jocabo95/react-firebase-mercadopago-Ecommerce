import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  // bring collection from firebase and store docs in products
  useEffect(() => {
    let refCollection = collection(db, "productos");
    getDocs(refCollection)
      .then((res) => {
        let productsArr = res.docs.map((el) => {
          return { ...el.data(), id: el.id };
        });

        setProducts(productsArr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: "solid thin",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <img
              style={{ width: "100%", maxWidth: "300px" }}
              src={product.img}
            />
            <h2>{product.title}</h2>
            <h4>{product.unit_price}</h4>
            <h4>{product.category}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default ItemListContainer