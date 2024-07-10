import AimbotsHeroHeader from "../../assets/images/aimbotshero_header.webp";
import HeavyDemoBot from "../../assets/images/heavy_demo_bot.webp";
import { WordDefinition } from "../InlineWordDefinition";

export function AimbotsHero() {
    return (
        <>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 sm:flex-row">
                <div className="flex h-fit w-full flex-col gap-4">
                    <img
                        src={AimbotsHeroHeader}
                        alt="Aimbots need to go!"
                        className=""
                    />
                    <p className="font-sans text-xl">
                        For the past five years, Team Fortress 2 has become
                        nearly unplayable. The game’s official servers have been
                        overrun by hordes of cheating{" "}
                        <WordDefinition
                            wordType="noun"
                            wordDesc="A program or patch that allows the player to cheat by having the character's weapon aimed automatically."
                            keyWord="aimbot"
                        >
                            aimbots
                        </WordDefinition>
                        while Valve has remained steadfast in their refusal to
                        adequately tackle the problem.
                        <br />
                        This lack of developer interference has thrown the game
                        into a state of turmoil with seemingly no end in sight.
                    </p>
                </div>
                <div className="flex h-fit w-full flex-col gap-4 overflow-clip">
                    <img
                        src={HeavyDemoBot}
                        alt="Picture"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 pt-4">
                <p className="font-[Calibri] text-lg">
                    <a
                        href="https://x.com/TeamFortress/status/1529970640224018433"
                        target="_blank"
                        className="font-medium text-amber-400"
                    >
                        Despite being aware of the bot crisis
                    </a>
                    , Valve has instead directed their focus towards other
                    ventures, leaving TF2 with insufficient support in its grave
                    time of need. From the outside, Valve appears to be more
                    concerned with generating millions in revenue every month
                    via in-game microtransactions, rather than maintaining a
                    product that should work as expected.
                </p>
                <p className="font-[Calibri] text-lg">
                    There’s no putting it lightly, Team Fortress 2 is in an
                    unacceptable state, and Valve’s apathy in dealing with the
                    issue is nothing short of appalling.
                </p>
            </div>
        </>
    );
}
