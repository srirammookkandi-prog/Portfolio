import Navbar from "../component/Navbar";
import WorkHero from "../section/work/WorkHero";
import About from "../section/work/About";
import Skills from "../section/work/Skills";
import Projects from "../section/work/Projects";

function WorkPage() {
    return (
        <>
            <Navbar />
            <main>
                <WorkHero />
                <About />
                <Skills />
                <Projects />
            </main>
        </>
    );
}

export default WorkPage;