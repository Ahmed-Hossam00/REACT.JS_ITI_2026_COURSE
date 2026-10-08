import { Link, useOutletContext, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { products } = useOutletContext();
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));

  return (
    <section>
      <Link className="btn btn-link px-0" to="/products">
        Back to products
      </Link>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h1 className="h3">{product.prodName}</h1>
            {product.onSale && (
              <span className="badge text-bg-danger">On sale</span>
            )}
          </div>
          <p>{product.desc}</p>
          <p className="mb-0">Price: ${product.price}</p>
          <p className="mb-0">Quantity: {product.quantity}</p>
        </div>
      </div>
    </section>
  );
}
