import Create from "../section/Life/Create";
import Explore from "../section/Life/Explore";
import LifeHero from "../section/Life/LifeHero";
import Move from "../section/Life/Move";
import Reflect from "../section/Life/Reflect";
import People from "../section/Life/People";
import Learn from "../section/Life/Learn";
import LifeClosing from "../section/Life/LifeClosing";
import LifeConnect from "../section/Life/LifeConnect";
import LifeFooter from "../section/Life/LifeFooter";


function LifePage() {
    return (
        <main>
            <LifeHero />
            <Move />
            <Create />
            <Explore />
            <Reflect />
            <Learn />
            <People />
            <LifeClosing />
            <LifeConnect />
            <LifeFooter />
        </main>
    );
}

export default LifePage;