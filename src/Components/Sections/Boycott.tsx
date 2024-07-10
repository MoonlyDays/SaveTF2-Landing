import SoldierSniperBots from "../../assets/images/soldier_sniper_bots.webp";

export function Boycott() {
    return (
        <>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 sm:flex-row-reverse">
                <div className="flex h-fit w-full flex-col gap-4">
                    <div className="text-center text-amber-500">
                        <div className="text-lg">Update as of July 3rd</div>
                        <div className="font-build text-3xl text-amber-500">
                            Proceed with Caution
                        </div>
                    </div>
                    <p className="font-sans text-xl">
                        As of July 1st, Valve has taken extensive measures to
                        alleviate Team Fortress 2's botting crisis. While we as
                        a community are incredibly grateful for the actions
                        being taken, many of us believe that further evidence is
                        required to warrant a newfound sense of confidence in
                        game's future.
                    </p>
                    <p className="font-calibri text-lg">
                        These efforts require persistent and continuous upkeep,
                        otherwise we run the risk reverting back to a
                        bot-infested status quo. As the Summer Update draws
                        near, Team Fortress 2 consumers should be heavily
                        encouraged to adjust their spending habits and/or review
                        scores based on whether or not these anti-bot measures
                        continue.
                    </p>
                </div>
                <div className="flex h-fit w-full flex-col gap-4 overflow-clip">
                    <img
                        src={SoldierSniperBots}
                        alt="Picture"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex w-full max-w-[840px] flex-col gap-3 px-6 pt-4">
                <p className="font-secondary text-xl text-amber-500">
                    If Bots Remain Gone By the Summer Update:
                </p>
                <p className="font-[Calibri] text-lg">
                    This would be great news! However, we must keep in mind that
                    malicious actors have a heightened incentive to host bots
                    during periods of major player-excitement. Before jumping
                    the gun on any in-game or Steam market purchases,{" "}
                    <span className="text-amber-500">
                        we highly recommend waiting on much more additional
                        proof that bot accounts are being met with swift and
                        consistent action.
                    </span>{" "}
                    Examples include; game-bans, community bans, and/or account
                    deletion.
                </p>
                <p className="font-secondary text-xl text-amber-500">
                    If Bots Return Before or After the Summer Update:
                </p>
                <p className="font-[Calibri] text-lg">
                    We recommend withholding all monetary investment from TF2
                    until the issue has been resolved. Team Fortress 2 deserves
                    to be in a playable state before players resume supporting
                    the product financially.
                </p>
            </div>
        </>
    );
}
