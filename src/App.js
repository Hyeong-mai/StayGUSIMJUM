import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Features from "./pages/Features";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
