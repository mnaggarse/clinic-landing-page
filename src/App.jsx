import Appointment from "./components/Appointment";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Doctors />
        <Appointment />
      </main>

      <Footer />
    </>
  );
}
