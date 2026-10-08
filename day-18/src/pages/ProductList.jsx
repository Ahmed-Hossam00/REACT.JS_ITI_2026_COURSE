import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

export default function ProductList() {
  const { products, deleteProduct, loading, setLoading } = useOutletContext();

  console.log("ProductList rendered / re rendered");

  useEffect(() => {
    if (!loading) {
      console.log("ProductList mounted ");
    } else {
      console.log("ProductList mounted , but still loading...");
    }

    if (loading) {
      setTimeout(() => {
        console.log("ProductList mounted , and loading finished");
        setLoading(false);
      }, 1000);
    }

    return () => {
      console.log("ProductList unmounted , user navigated to another page");
    };
  }, []);

  return (
    <>
      {!loading ? (
        <section>
          <h1 className="mb-4">Products</h1>
          <div className="row g-3">
            {products.map((product) => (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <ProductCard product={product} onDelete={deleteProduct} />
              </div>
            ))}
            {products.length === 0 && <p>No products left.</p>}
          </div>
        </section>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <span className="h4">Loading...</span>
        </div>
      )}
    </>
  );
}
