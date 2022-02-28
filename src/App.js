import "./css/index.css"
import Header from "./components/header";
import Showroom from "./components/showroom";
import About from "./components/about";
import ContPortfolio from "./components/contPortfolio";
import Blog from "./components/blog";
import SkillCont from "./components/skillsCont";
import Footer from "./components/footer";

function App() {
  return (
    <div>
        <Header/>
        <Showroom/>
        <About/>
        <SkillCont/>
        <ContPortfolio/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
