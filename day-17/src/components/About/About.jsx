export default function About({ email, location, address, phone }) {
  const description =
    "I’m a web development student learning to build simple and useful websites with React.";

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5">
        <div className="row g-4">
          <div className="col-md-8">
            <h2>About</h2>
            <p className="text-secondary mb-0">{description}</p>
          </div>
          <div className="col-md-4">
            <h2>Contact</h2>
            <address className="text-secondary mb-0">
              <div>{address}</div>
              <div>{location}</div>
              <div>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <div>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
