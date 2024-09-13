import { PropsWithChildren } from "react";
import NavMenu from "../Components/UI/NavMenu";
import { Odometer } from "../Components/Odometer";
import { AccessibilityMenu } from "../Components/UI/SiteWidget";

import SaveTF2 from "../assets/images/savetf2_fixtf2.webp";
import { SignaturesDelivered } from "../Components/Sections/SignaturesDelivered.tsx";

export function MainLayout({
    children,
    signatures,
}: PropsWithChildren<{
    signatures: number;
}>) {
    return (
        <div className="overflow-hidden">
            <AccessibilityMenu />
            <div className="bg_01 h-fit w-full">
                <div className="flex flex-col items-center justify-center -mb-20">
                    <img
                        src={SaveTF2}
                        alt="#SaveTF2"
                        className="animate-wiggle w-full max-w-[600px] py-3"
                    />

                    <section className="flex h-fit w-full flex-col items-center pt-[16rem] text-center">
                        <div
                            className="z-0 flex h-[250px] w-[450px] items-center justify-center border-red-500 bg-sign bg-cover bg-top text-amber-500 sm:h-[375px] sm:w-[700px]">
                            <Odometer
                                className="text-shadow-counter mt-[10px] font-build text-[70px] sm:mt-[20px] sm:text-[110px]"
                                value={signatures}
                            />
                        </div>
                    </section>
                </div>
            </div>
            <section className="bg_02 flex h-fit flex-col items-center py-16">
                <SignaturesDelivered />
            </section>
            <NavMenu />
            <div>
                <div className="bg-[100%_auto]">{children}</div>
            </div>

            <footer className="flex h-fit flex-row items-center justify-center px-4 py-6">
                <p className="max-w-[600px] rounded-lg border-2 border-amber-500 bg-amber-100/10 px-4 py-4 text-center text-[1.2rem]">
                    This project is not affiliated with Valve Software and is
                    organized by members of the Team Fortress 2 community with
                    the purpose of bringing light to the horrible state the game
                    is in.
                </p>
            </footer>
        </div>
    );
}
