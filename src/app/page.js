import Image from "next/image";
import NavBar from "./Navigation/NavBar";
import Header from "./comp/Header";
import About from "./comp/About";
import Work from "./comp/Work";
import Project from "./comp/Project";
import Contact from "./comp/Contact";
import Footer from "./comp/Footer";
export default function Home() {
  return (
    <div>
     <NavBar/>
     <Header/>
     <About/>
     <Work/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}
