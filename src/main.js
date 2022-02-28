import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Blog from "./components/blog";
import Chat from "./components/chat";
import Contact from "./components/contact";
import ContPortfolio from "./components/contPortfolio";
import SkillsCont from "./components/skillsCont";


export default function Main(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<ContPortfolio/>} />
                <Route path="/skills" element={<SkillsCont/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}