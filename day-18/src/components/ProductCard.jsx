import { Link } from "react-router-dom";

export default function ProductCard({ product, onDelete }) {
  return (
    <article className="card h-100">
      <div className="card-body d-flex flex-column">
        <h2 className="h5 card-title">{product.prodName}</h2>
        <p className="card-text">{product.desc}</p>
        <p className="fw-semibold">${product.price}</p>
        <p>Qty : {product.quantity}</p>
        <div className="d-flex gap-2 mt-auto mx-auto">
          <Link className="btn btn-primary" to={`/products/${product.id}`}>
            Details
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(product.id)}
            type="button"
          >
            Delete
          </button>
        </div>

        {product.onSale && (
          <span className="position-absolute top-0 end-0 bg-danger text-white p-2">
            On sale
          </span>
        )}
      </div>
    </article>
  );
}
