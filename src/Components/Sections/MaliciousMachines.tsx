import MaliciousMachinesHeader from "../../assets/images/malicious_machines.webp";
import SuspectPhotoStack from "../../assets/images/suspect_photo_stack.webp";
import { WordDefinition } from "../InlineWordDefinition";

export function MaliciousMachines() {
    return (
        <>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 sm:flex-row-reverse">
                <div className="flex h-fit w-full flex-col gap-4">
                    <img
                        src={MaliciousMachinesHeader}
                        alt="Malicious Machines"
                        className=""
                    />
                    <p className="font-sans text-xl">
                        The aimbots are programmed to join{" "}
                        <WordDefinition
                            keyWord="'Casual'"
                            wordType="slang"
                            wordDesc="Refers to non-competitive, public matchmaking games on official Valve Servers "
                        >
                            casual servers
                        </WordDefinition>{" "}
                        en-masse, insta-killing and kicking innocent players,
                        intent on ruining their in-game experience. This
                        behavior is where most of the community’s resentment
                        stems from, however, many are unaware that the problem
                        goes far beyond simply trolling and cheating.
                    </p>
                </div>
                <div className="flex h-fit w-full flex-col gap-4 overflow-clip">
                    <img
                        src={SuspectPhotoStack}
                        alt="Picture"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 pt-4">
                <p className="font-[Calibri] text-lg">
                    <WordDefinition
                        keyWord="Bot host"
                        wordType="noun"
                        wordDesc="Individual who runs a large number of bot players with intent to harass and disrupt games, usually by equipping the bots with aim hacks, automatically votekicking players, and spamming racial slurs."
                    >
                        The bot hosters
                    </WordDefinition>
                    are malicious actors, using their aimbots as a vessel to
                    endlessly attack and harass community members. They abuse
                    the in-game text and voice chats to spread the most vile
                    hate speech imaginable, while simultaneously advertising
                    their “bot immunity services” in an attempt to scam the
                    players desperately looking for a solution. They’ve used
                    these same means to
                    <WordDefinition
                        keyWord="Dox"
                        wordType="verb"
                        wordDesc="To publicly identify, or publish private information about an individual."
                    >
                        dox
                    </WordDefinition>
                    people’s personal information and broadcast it to the
                    player-base against their will. Bot hosters have even gone
                    so far as to commit actual crimes, such as using AI
                    voice-modifiers to impersonate and slander non-consenting
                    parties, launching persistent DDoS attacks, and have even
                    swatted one of their most ardent critics.
                </p>
                <p className="font-[Calibri] text-lg">
                    <span className="font-bold">
                        There should be a zero-tolerance policy relating to this
                        kind of conduct,
                    </span>{" "}
                    and Valve needs to be held accountable for persistently
                    refusing to acknowledge it.
                </p>
            </div>
        </>
    );
}
