import { WarningBox } from "./WarningBox";

export function PetitionClosed() {
    return (
        <div className="mt-[-75px] flex w-full flex-col items-center justify-center px-4 sm:mt-[-100px]">
            <div className="flex max-w-[700px] flex-col rounded-lg border-2 border-[#79716A] bg-[#13100C]/80 p-6">
                <h1 className="text-shadow-none font-build text-amber-100">
                    THANK YOU <span className="text-amber-500">EVERYONE!</span>
                </h1>

                <div className="flex flex-col items-center">
                    <div className="flex w-full max-w-96 flex-col pb-4 pt-6">
                        <WarningBox message="The petition is now closed! Signatures are no longer being accepted." />
                        <div className="mt-4">
                            We'd like to extend a massive thanks to everyone who
                            signed the petition. Every sign matters and we're
                            dedicated to making sure every name reaches Valve.
                            Although the petition is closed now, you can still
                            contribute towards fixing TF2. There will be more
                            info below on how you can help.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
