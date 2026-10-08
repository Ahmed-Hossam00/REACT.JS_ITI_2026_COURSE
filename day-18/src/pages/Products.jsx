import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Products({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = `Products (${products.length})`;

    return () => {
      document.title = "day-18";
    };
  }, [products.length]);

  function deleteProduct(productId) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId),
    );
  }

  return <Outlet context={{ products, deleteProduct, loading, setLoading }} />;
}
