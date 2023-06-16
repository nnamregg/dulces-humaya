import Header from "./components/Header";
import Hero from "./components/Hero";
import Quality from "./components/Quality";
import Products from "./components/Products";
import About from "./components/About";
import Clients from "./components/Clients";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

    return (
        <>
        <Header />
        <main>
            <Hero />
            <Quality />
            <Products />
            <About />
            <Clients />
            <Recipes />
            <Contact />
            <Footer />
        </main>
        </>
    );
}

export default App;
