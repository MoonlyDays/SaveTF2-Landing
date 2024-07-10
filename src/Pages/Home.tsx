import { MainLayout } from "../Layouts/MainLayout";
import { AimbotsHero } from "../Components/Sections/AimbotsHero";
import { FAQ } from "../Components/Sections/FAQ";
import { MaliciousMachines } from "../Components/Sections/MaliciousMachines";
import { BrothersInArms } from "../Components/Sections/BrothersInArms";
import { HowToHelp } from "../Components/Sections/HowToHelp";
import { TimelessMasterpiece } from "../Components/Sections/TimelessMasterpiece";
import { Boycott } from "../Components/Sections/Boycott";

export default function Home(props: { signature_count: number }) {
    return (
        <MainLayout signatures={props.signature_count}>
            <section className="bg_05 flex h-fit flex-col items-center py-16">
                <Boycott />
            </section>
            <div className="bar-divider"></div>
            <section className="bg_02 flex h-fit flex-col items-center py-16">
                <AimbotsHero />
            </section>
            <div className="bar-divider"></div>
            <section className="bg_05 flex h-fit flex-col items-center py-16">
                <MaliciousMachines />
            </section>
            <div className="bar-divider"></div>
            <section className="bg_06 flex h-fit flex-col items-center py-16">
                <BrothersInArms />
            </section>
            <div className="bar-divider"></div>
            <section className="bg_05 flex h-fit flex-col items-center py-16">
                <TimelessMasterpiece />
            </section>
            <div className="bar-divider"></div>
            <section className="bg_04 flex h-fit flex-col items-center py-16">
                <HowToHelp />
            </section>
            <div className="bar-divider"></div>
            <section className="bg_03 flex h-fit flex-col items-center py-28">
                <FAQ />
            </section>
            <div className="bar-divider"></div>
        </MainLayout>
    );
}
