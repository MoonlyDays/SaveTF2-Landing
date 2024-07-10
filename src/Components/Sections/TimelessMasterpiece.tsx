import TimelessMasterpieceHeader from "../../assets/images/timeless_masterpiece.webp";
import DemoWheelchair from "../../assets/images/demo_wheelchair.webp";

export function TimelessMasterpiece() {
    return (
        <>
            <div className="flex w-full max-w-[600px] flex-col gap-3 px-6 sm:flex-row">
                <div className="flex h-fit w-full flex-col gap-4">
                    <img
                        src={TimelessMasterpieceHeader}
                        alt="Timeless Masterpiece"
                        className=""
                    />
                </div>
            </div>
            <section className="flex w-full max-w-[840px] flex-col items-center gap-5 px-6 pt-4">
                <p className="font-sans text-lg">
                    Team Fortress 2 is a game that has stood the test of time
                    for almost 17 years. It’s still beloved by millions as one
                    of the greatest video games of all time. This makes it all
                    the more shameful that Valve has refused to take substantive
                    measures to eliminate this botting crisis.
                </p>
                <p className="font-sans text-lg">
                    It is wholly unacceptable to let such a beloved IP get
                    ravaged by nefarious actors intent on destroying the game
                    adored by so many.
                </p>
                <p className="font-sans text-xl">
                    TF2 doesn’t need new content updates, it doesn’t need new
                    microtransactions, it doesn’t need new weapon additions.
                    What TF2 needs is a solution to the bot crisis.
                </p>
                <p className="text-center font-build text-4xl">
                    Enough is enough.
                </p>
                <div className="flex h-fit w-full max-w-[400px] flex-col gap-4">
                    <img
                        src={DemoWheelchair}
                        alt="Demoman wearing a crown, badly hurt, on a wheelchair"
                    />
                </div>
            </section>
        </>
    );
}
