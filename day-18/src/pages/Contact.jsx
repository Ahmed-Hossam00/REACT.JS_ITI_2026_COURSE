export default function Contact() {
  return (
    <section className="col-12 col-md-8 col-lg-6">
      <h1>Contact</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" id="name" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
