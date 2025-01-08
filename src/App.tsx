import "./App.css";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "../data";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main className="relative bg-[#f6feed] flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems} className="bg-bg-300" />
            <Hero />
            <Grid />
            <RecentProjects />
            <Experience />
            <Approach />
            <Footer />
          </div>
        </main>{" "}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
