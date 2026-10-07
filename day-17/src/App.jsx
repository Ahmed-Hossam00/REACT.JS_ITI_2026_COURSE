import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About
          email="ahmedhossam4767@gmail.com"
          location="Asyut, Egypt"
          address="123 Main Street"
          phone="+01555259704"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
