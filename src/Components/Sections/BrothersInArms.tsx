import BrothersInArmsHeader from "../../assets/images/brothers_in_arms.webp";

export function BrothersInArms() {
    return (
        <>
            <div className="flex w-full max-w-[600px] flex-col gap-3 px-6 sm:flex-col">
                <div className="flex h-fit w-full flex-col gap-4">
                    <img
                        src={BrothersInArmsHeader}
                        alt="Brothers In Arms"
                        className=""
                    />
                </div>
            </div>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 pt-4">
                <p className="font-[Calibri] text-lg">
                    On <span className="text-amber-400">June 3rd</span>, we’re
                    all going to collectively group together to take a stand
                    against Valve’s inaction in dealing with the bots. We’re
                    going to showcase the absolute magnitude of this issue to
                    the online masses.{" "}
                    <span className="text-amber-400">
                        Screenshots, videos, and personal stories surrounding
                        the bots in action, all accompanied by the tag #FixTF2
                    </span>
                    . Alongside this is our petition, which will serve to
                    represent the sheer enormity of how many players Valve’s
                    inaction has negatively affected. We plan on forwarding{" "}
                    <span className="text-amber-400">
                        each and every signature
                    </span>{" "}
                    to them at a later date. We hope to gain the attention of as
                    many mainstream gaming news outlets as possible, further
                    shining a spotlight on the issue at hand.{" "}
                    <span className="text-amber-400">
                        TF2 is not dying, it is being intentionally killed.
                    </span>
                </p>
                <p className="rounded-lg border-2 border-amber-500 bg-black/20 px-6 py-2 font-sans text-xl">
                    Our mission statement for this campaign is to have Team
                    Fortress 2 achieve a consistently playable state with
                    updated anti-cheat measures that actually function. We’re
                    also asking for an open line of communication with Valve as
                    we work to address this problem.
                </p>
            </div>
        </>
    );
}
