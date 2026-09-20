import Navbar from "../component/Navbar";
import WorkHero from "../section/work/WorkHero";
import About from "../section/work/About";
import Skills from "../section/work/Skills";
import Projects from "../section/work/Projects";
import Experience from "../section/work/Experience";

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
            </main>
        </>
    );
}

export default WorkPage;