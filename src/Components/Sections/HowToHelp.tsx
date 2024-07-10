import MercsMap from "../../assets/images/mercs_map.webp";

export function HowToHelp() {
    return (
        <>
            <div className="flex flex-col items-center gap-5">
                <h1
                    id="how-to-help"
                    className="faqHead font-build text-4xl sm:text-6xl"
                >
                    How to help
                </h1>
                <img
                    src={MercsMap}
                    alt="How to Help"
                    className="max-w-[500px]"
                />
            </div>
            <div className="flex w-full max-w-[640px] flex-col gap-3 px-6 pt-4">
                <p className="font-sans text-xl">
                    On{" "}
                    <span className="text-amber-400">
                        June 3rd, please join our campaign to spread awareness
                        of the bot crisis.
                    </span>
                    You can help by spreading the petition above, promoting the{" "}
                    <span className="text-amber-400">#FixTF2</span> and{" "}
                    <span className="text-amber-400">#SaveTF2</span> hashtags,
                    as well as sharing this Save.TF website across any social
                    media you have access to. Twitter, Reddit, Discord, Youtube,
                    TikTok, whatever you want, just let loose and inform as many
                    people as we possibly can. You can share resources about the
                    bot crisis across Twitter, YouTube, Reddit, and wherever
                    else you can to inform people.
                </p>
                <p className="font-sans text-xl">
                    Within your posts, please{" "}
                    <span className="text-amber-400">
                        hyper-fixate on the bot problem as that is our main
                        concern
                    </span>
                    . Post videos, photos, memes, art, and/or personal anecdotes
                    that best showcase your frustration with this issue. We’d
                    like to transform this perceived petty drama into the
                    massive, game-defining scandal that it is.
                </p>
            </div>
        </>
    );
}
