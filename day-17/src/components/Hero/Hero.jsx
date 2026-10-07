import { useState } from "react";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  const [count, setCount] = useState(0);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">Welcome to my website</h1>
            <p className="lead text-secondary">
              This is a simple place to share ideas, learn something new, and
              see what I’m working on.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setCount((currentCount) => currentCount + 1)}
              type="button"
            >
              Clicked {count} times
            </button>
          </div>
          <div className="col-lg-4">
            <img
              className="img-fluid  rounded"
              src={heroImage}
              alt="A colorful illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
