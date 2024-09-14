import Polaroids from "../../assets/images/polaroids_valve.webp";
import Movie from "../../assets/images/contracker_movie.webm";

export function SignaturesDelivered() {
    return (
        <>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 sm:flex-row-reverse">
                <div className="flex h-fit w-full flex-col gap-4">
                    <div className="text-center text-amber-500">
                        <div className="text-lg">Update as of September 13th</div>
                        <div className="font-build text-3xl text-amber-500">
                            The Signatures have been delivered
                        </div>
                    </div>
                    <p className="font-sans text-xl">
                        On September 7th, the 340,000+ signatures of all of you
                        who signed the petition were personally hand delivered
                        to Valve HQ. The signatures were placed in an over 600
                        page book and it acts as a symbol of good will from the
                        community, but also a reminder of the amount of people
                        counting on Valve to uphold Team Fortress 2. Team
                        Fortress 2 has been nearly free of all cheating bots for
                        over 2 months, the longest period that’s ever been seen
                        in the half-decade since bots were allowed to run
                        rampant in casual servers.
                    </p>
                </div>
                <div className="flex h-fit w-full flex-col gap-4 overflow-clip">
                    <img
                        src={Polaroids}
                        alt="Picture"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 pt-4">
                <p className="font-calibri text-lg">
                    We’d like to thank every single signer for helping us reach
                    this point. Without your signatures we would never have been
                    able to reach this point, and every sign mattered. We hope
                    that with bots gone and the signatures delivered, Team
                    Fortress 2 can remain bot free for the foreseeable future
                    and everyone can enjoy the game we all care so much about!
                </p>
            </div>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 pt-4">
                <video autoPlay muted className="w-full" loop>
                    <source src={Movie} type="video/webm" />
                </video>
            </div>
        </>
    );
}
