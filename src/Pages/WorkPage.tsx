import Navbar from "../component/Navbar";
import WorkHero from "../section/work/WorkHero";
import About from "../section/work/About";
import Skills from "../section/work/Skills";
import Projects from "../section/work/Projects";
import Experience from "../section/work/Experience";
import Contact from "../section/work/Contact";
import Footer from "../section/work/Footer";

function WorkPage() {
    return (
        <>
            <Navbar />
            <main>
                <WorkHero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default WorkPage;