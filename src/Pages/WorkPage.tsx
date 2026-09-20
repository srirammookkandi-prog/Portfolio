import Navbar from "../component/Navbar";
import WorkHero from "../section/work/WorkHero";
import About from "../section/work/About";
import Skills from "../section/work/Skills";

function WorkPage() {
    return (
        <>
            <Navbar />

            <main>
                <WorkHero />
                <About />
                <Skills />
            </main>
        </>
    );
}

export default WorkPage;