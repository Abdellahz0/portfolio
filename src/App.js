import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/intro"
import Skills from "./components/Skills/skill"
import Works from "./components/Projects/works"
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
