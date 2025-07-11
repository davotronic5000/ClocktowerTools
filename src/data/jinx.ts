type Jinxes = {
    [key: string]: Jinx;
};

export interface Jinx {
    id: string;
    jinx: JinxContent[];
}

export interface JinxContent {
    id: string;
    reason: string;
    updates: { date: string; reason: string }[];
}

const jinxes: Jinxes = {
    magician: {
        id: "magician",
        jinx: [
            {
                id: "wraith",
                reason: "Each day, after the execution phase, the living Magician may publicly guess a living player as the Wraith: if correct, the Demon must choose the Wraith tonight.",
                updates: [{ date: "2025-07-11", reason: "Added jinx." }],
            },
        ],
    },
    wraith: {
        id: "wraith",
        jinx: [
            {
                id: "marionette",
                reason: "The Wraith does not wake with the Marionette.",
                updates: [{ date: "2025-07-11", reason: "Added jinx." }],
            },
        ],
    },
    alchemist: {
        id: "alchemist",
        jinx: [
            {
                id: "boffin",
                reason: "The Alchemist-Boffin does not learn what ability the Demon has.",
                updates: [
                    {
                        date: "2025-07-11",
                        reason: "Moved from Boffin to Alchemist.",
                    },
                ],
            },
            {
                id: "spy",
                reason: "If the Alchemist has the Spy ability, they do not, and a Spy is in play. Each day, after the execution phase, the living Alchemist may publically guess a living player as the Spy. If correct, the Demon must choose the Spy tonight.",
                updates: [
                    {
                        date: "2025-07-11",
                        reason: "Moved from Spy to Alchemist, updated wording.",
                    },
                ],
            },
            {
                id: "widow",
                reason: "If the Alchemist has the Widow ability, they do not, and a Widow is in play. Each day, after the execution phase, the living Alchemist may publically guess a living player as the Widow. If correct, the Demon must choose the Widow tonight.",
                updates: [
                    {
                        date: "2025-07-11",
                        reason: "Moved from Widow to Alchemist, updated wording.",
                    },
                ],
            },
            {
                id: "marionette",
                reason: "An Alchemist-Marionette has no Marionette ability & the Marionette is in play.",
                updates: [
                    {
                        date: "2025-07-11",
                        reason: "Added jinx.",
                    },
                ],
            },
            {
                id: "summoner",
                reason: "An Alchemist-Summoner does not get bluffs, and chooses which Demon but not which player. If they die before this happens, evil wins. [No Demon]",
                updates: [
                    {
                        date: "2025-07-11",
                        reason: "Moved from Summoner and updated wording.",
                    },
                ],
            },
            {
                id: "mastermind",
                reason: "An Alchemist-Mastermind has no Mastermind ability & the Mastermind is not-in-play.",
                updates: [
                    {
                        date: "2025-07-11",
                        reason: "Added jinx.",
                    },
                ],
            },
            {
                id: "organgrinder",
                reason: "If the Alchemist has the Organ Grinder ability, the Organ Grinder is in play & if both the Alchemist and Organ Grinder are sober, both are drunk.",
                updates: [
                    {
                        date: "2025-07-11",
                        reason: "Added jinx.",
                    },
                ],
            },
            {
                id: "wraith",
                reason: "If the Alchemist has the Wraith ability, they do not, and a Wraith is in play. Each day, after the execution phase, the living Alchemist may publicly guess a living player as the Wraith: if correct, the Demon must choose the Wraith tonight.",
                updates: [{ date: "2025-07-11", reason: "Added jinx." }],
            },
        ],
    },
    pithag: {
        id: "pithag",
        jinx: [
            {
                id: "damsel",
                reason: "If a Pit-Hag creates a Damsel, the Storyteller chooses which player it is.",
                updates: [],
            },
            {
                id: "politician",
                reason: "If the Pit-Hag turns an evil player into the Politician, they can't turn good due to their own ability.",
                updates: [],
            },
            {
                id: "villageidiot",
                reason: "If there is a spare token, the Pit-Hag can create an extra Village Idiot. If so, the drunk Village Idiot might change.",
                updates: [],
            },
            {
                id: "cultleader",
                reason: "If the Pit-Hag turns an evil player into the Cult Leader, they can't turn good due to their own ability.",
                updates: [],
            },
            {
                id: "goon",
                reason: "If the Pit-Hag turns an evil player into the Goon, they can't turn good due to their own ability.",
                updates: [],
            },
            {
                id: "ogre",
                reason: "If the Pit-Hag turns an evil player into the Ogre, they can't turn good due to their own ability.",
                updates: [],
            },
        ],
    },
    cerenovus: {
        id: "cerenovus",
        jinx: [
            {
                id: "goblin",
                reason: "The Cerenovus may choose to make a player mad that they are the Goblin.",
                updates: [],
            },
        ],
    },
    leviathan: {
        id: "leviathan",
        jinx: [
            {
                id: "banshee",
                reason: "Each night, the Leviathan chooses a living player (different to previous nights): a chosen Banshee dies & gains their ability",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "exorcist",
                reason: "Evil does not win when more than 1 good player is executed, if the Exorcist is alive and has ever successfully chosen the Leviathan.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "farmer",
                reason: "Each night, the Leviathan chooses a living player (different to previous nights): a chosen Farmer uses their ability but does not die.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "grandmother",
                reason: "If the Grandchild dies by execution, evil wins.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "innkeeper",
                reason: "If the Leviathan is in play, the Innkeeper-protected-players are safe from all evil abilities.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "king",
                reason: "If the Leviathan is in play, and at least 1 player is dead, the King learns an alive character each night.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "mayor",
                reason: "If the Leviathan is in play & no execution occurs on day 5, good wins",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "monk",
                reason: "If the Leviathan is in play, the Monk-protected-player is safe from all evil abilities.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "ravenkeeper",
                reason: "Each night, the Leviathan chooses a living player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "sage",
                reason: "Each night, the Leviathan chooses a living player (different to previous nights): a chosen Sage uses their ability but does not die.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "soldier",
                reason: "If the Leviathan is in play, the soldier is safe from all evil abilities.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
        ],
    },
    lilmonsta: {
        id: "lilmonsta",
        jinx: [
            {
                id: "poppygrower",
                reason: "If the Poppy Grower is in play, Minions don't wake together. They are woken one by one, until one of them chooses to take the Lil' Monsta token.",
                updates: [],
            },
            {
                id: "magician",
                reason: "Each night, the Magician chooses a Minion: if that Minion & Lil' Monsta are alive, that Minion babysits Lil' Monsta.",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "Added jinx",
                    },
                ],
            },
            {
                id: "scarletwoman",
                reason: "If there are 5 or more players alive and the player holding the Lil' Monsta token dies, the Scarlet Woman is given the Lil' Monsta token tonight.",
                updates: [],
            },
            {
                id: "organgrinder",
                reason: "Votes for the Organ Grinder count if the Organ Grinder is babysitting Lil' Monsta.",
                updates: [],
            },
            {
                id: "vizier",
                reason: "The Vizier can die by execution if they are babysitting Lil' Monsta.",
                updates: [],
            },
            {
                id: "hatter",
                reason: "If a Demon chooses Lil' Monsta, they also choose a Minion to become and babysit Lil' Monsta tonight.",
                updates: [],
            },
        ],
    },
    legion: {
        id: "legion",
        jinx: [
            {
                id: "engineer",
                reason: "Legion and the Engineer can not both be in play at the start of the game.\nIf the Engineer creates Legion, most players (including all evil players) become evil Legion.",
                updates: [],
            },
            {
                id: "preacher",
                reason: "If the Preacher chooses Legion, Legion keeps their ability, but the Preacher might learn they are Legion.",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "Removed hatred and replace with an ability that helps the Preacher.",
                    },
                ],
            },
            {
                id: "hatter",
                reason: "If the Hatter dies and Legion is in play, nothing happens. If the Hatter dies and an evil player chooses Legion, all current evil players become Legion.",
                updates: [],
            },
            {
                id: "minstrel",
                reason: "If Legion died by execution today, Legion keeps their ability, but the Minstrel might learn they are Legion.",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "Add jinx to stop Legion losing their ability.",
                    },
                ],
            },
        ],
    },
    spy: {
        id: "spy",
        jinx: [
            {
                id: "magician",
                reason: "When the Spy sees the Grimoire, the Demon and Magician's character tokens are removed.",
                updates: [],
            },
            {
                id: "poppygrower",
                reason: "If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies.",
                updates: [],
            },

            {
                id: "damsel",
                reason: "If the Spy is (or has been) in play, the Damsel is poisoned.",
                updates: [],
            },
            {
                id: "ogre",
                reason: "The Spy registers as evil to the Ogre.",
                updates: [],
            },
        ],
    },
    widow: {
        id: "widow",
        jinx: [
            {
                id: "magician",
                reason: "When the Widow sees the Grimoire, the Demon and Magician's character tokens are removed.",
                updates: [],
            },
            {
                id: "poppygrower",
                reason: "If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies.",
                updates: [],
            },
            {
                id: "damsel",
                reason: "If the Widow is (or has been) in play, the Damsel is poisoned.",
                updates: [],
            },
        ],
    },
    scarletwoman: {
        id: "scarletwoman",
        jinx: [
            {
                id: "fanggu",
                reason: "If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "AMoved jinx to Scarlet Woman",
                    },
                ],
            },
            {
                id: "alhadikhia",
                reason: "If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again.",
                updates: [],
            },
        ],
    },
    yaggababble: {
        id: "yaggababble",
        jinx: [
            {
                id: "exorcist",
                reason: "If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight.",
                updates: [],
            },
        ],
    },
    summoner: {
        id: "summoner",
        jinx: [
            {
                id: "preacher",
                reason: "If the Preacher chose the Summoner on or before the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
                updates: [{ date: "2024-06-28", reason: "Added jinx." }],
            },
            {
                id: "clockmaker",
                reason: "If the Summoner is in play, the Clockmaker does not receive their information until a Demon is created.",
                updates: [],
            },
            {
                id: "poppygrower",
                reason: "If the Poppy Grower is alive when the Summoner acts, the Summoner chooses which Demon, but the Storyteller chooses which player.",
                updates: [],
            },
            {
                id: "marionette",
                reason: "The Marionette neighbors the Summoner. The Summoner knows who the Marionette is.",
                updates: [],
            },
            {
                id: "pithag",
                reason: "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
                updates: [],
            },
            {
                id: "hatter",
                reason: "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
                updates: [],
            },
            {
                id: "courtier",
                reason: "If the Summoner is drunk on the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
                updates: [],
            },
            {
                id: "engineer",
                reason: "If the Engineer removes a Summoner from play before that Summoner uses their ability, the Summoner uses their ability immediately.",
                updates: [],
            },
            {
                id: "zombuul",
                reason: "If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once.",
                updates: [],
            },
            {
                id: "pukka",
                reason: "The Summoner may choose a player to become the Pukka on the 2nd night.",
                updates: [],
            },
            {
                id: "legion",
                reason: "If the Summoner creates Legion, most players (including all evil players) become evil Legion.",
                updates: [],
            },
            {
                id: "kazali",
                reason: "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
                updates: [],
            },
            {
                id: "lordoftyphon",
                reason: "If the Summoner creates a Lord Of Typhon, the Lord Of Typhon must neighbor a Minion. The other neighbor becomes a not-in-play evil Minion.",
                updates: [{ date: "2024-09-03", reason: "Added jinx." }],
            },
        ],
    },
    marionette: {
        id: "marionette",
        jinx: [
            {
                id: "lilmonsta",
                reason: "The Marionette neighbors a Minion, not the Demon. The Marionette is not woken to choose who takes the Lil' Monsta token, and does not learn they are the Marionette if they have the Lil' Monsta token.",
                updates: [],
            },
            {
                id: "poppygrower",
                reason: "When the Poppy Grower dies, the Demon learns the Marionette but the Marionette learns nothing.",
                updates: [],
            },
            {
                id: "snitch",
                reason: "The Marionette does not learn 3 not in-play characters. The Demon learns an extra 3 instead.",
                updates: [],
            },
            {
                id: "balloonist",
                reason: "If the Marionette thinks that they are the Balloonist, +1 Outsider might have been added.",
                updates: [
                    {
                        date: "2024-09-03",
                        reason: "Updated for new Balloonist ability.",
                    },
                ],
            },
            {
                id: "damsel",
                reason: "The Marionette does not learn that a Damsel is in play.",
                updates: [],
            },

            {
                id: "huntsman",
                reason: "If the Marionette thinks that they are the Huntsman, the Damsel was added.",
                updates: [],
            },
        ],
    },
    alhadikhia: {
        id: "alhadikhia",
        jinx: [
            {
                id: "princess",
                reason: "If the Princess nominated & executed a player on their 1st day, no one dies to the Al-Hadikhia ability tonight.",
                updates: [{ date: "2025-07-11", reason: "Added jinx." }],
            },
        ],
    },
    mastermind: {
        id: "mastermind",
        jinx: [
            {
                id: "alhadikhia",
                reason: "If the Al-Hadikhia dies by execution, and the Mastermind is alive, the Al-Hadikhia chooses 3 good players tonight: if all 3 choose to live, evil wins. Otherwise, good wins.",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "Updated to remove hatred, and make jinx more within spirit of the role.",
                    },
                ],
            },
        ],
    },
    lleech: {
        id: "lleech",
        jinx: [
            {
                id: "mastermind",
                reason: "If the Mastermind is alive and the Lleech's host dies by execution, the Lleech lives but loses their ability.",
                updates: [],
            },
            {
                id: "slayer",
                reason: "If the Slayer slays the Lleech's host, the host dies.",
                updates: [],
            },
        ],
    },
    kazali: {
        id: "kazali",
        jinx: [
            {
                id: "soldier",
                reason: "The Kazali can choose that the Soldier player is one of their evil Minions",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "New jinx.",
                    },
                    {
                        date: "2024-10-04",
                        reason: "Updated jinx to remove Soldier being able to choose Minion type.",
                    },
                ],
            },
            {
                id: "goon",
                reason: "If the Kazali chooses the Goon to become a Minion, remaining Minion choices are decided by the Storyteller.",
                updates: [],
            },
            {
                id: "marionette",
                reason: "If the Kazali chooses to create a Marionette, they must choose one of their neighbors.",
                updates: [],
            },
            {
                id: "huntsman",
                reason: "If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel.",
                updates: [],
            },
            {
                id: "choirboy",
                reason: "The Kazali can not choose the King to become a Minion if a Choirboy is in play.",
                updates: [],
            },
        ],
    },
    riot: {
        id: "riot",
        jinx: [
            {
                id: "banshee",
                reason: "Each night, Riot chooses a living player (different to previous nights): a chosen Banshee dies & gains their ability",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "exorcist",
                reason: "If the Exorcist chooses Riot on the 3rd night, Minions do not become Riot",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "farmer",
                reason: "Each night, Riot chooses a living player (different to previous nights): a chosen Farmer uses therir ability but does not die.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "grandmother",
                reason: "If the Grandchild dies during the day, the Grandmother dies too.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "king",
                reason: "If Riot is in play, and at least 1 player is dead, the king learns an alive character each night.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "mayor",
                reason: "The Mayor may choose to stop nominations. If they do so when only 1 Riot is alive, good wins. Otherwise, evil wins.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "monk",
                reason: "If Riot is in play, the monk protected player is safe from all evil abilities.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "ravenkeeper",
                reason: "Each night, Riot chooses a living player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "sage",
                reason: "Each night, Riot chooses a living player (different to previous nights): a chosen Sage uses their ability but does not die.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "soldier",
                reason: "If Riot is in play, the soldier is safe from all evil abilities.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
        ],
    },
    vizier: {
        id: "vizier",
        jinx: [
            {
                id: "investigator",
                reason: "If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller.",
                updates: [],
            },
            {
                id: "preacher",
                reason: "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
                updates: [],
            },
            {
                id: "courtier",
                reason: "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
                updates: [],
            },
            {
                id: "magician",
                reason: "Only 1 jinxed character can be in play. Evil players start knowing which player and character it is.",
                updates: [],
            },
            {
                id: "fearmonger",
                reason: "The Vizier wakes with the Fearmonger, learns who they choose and cannot choose to immediately execute that player.",
                updates: [],
            },
            {
                id: "politician",
                reason: "The Politician might register as evil to the Vizier.",
                updates: [],
            },
        ],
    },
    vortox: {
        id: "vortox",
        jinx: [
            {
                id: "banshee",
                reason: "If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died.",
                updates: [],
            },
        ],
    },
    cannibal: {
        id: "cannibal",
        jinx: [
            {
                id: "princess",
                reason: "If the Cannibal nominated, executed, & killed the Princess today, the Demon doesn’t kill tonight.",
                updates: [{ date: "2025-07-11", reason: "Added jinx." }],
            },
            {
                id: "poppygrower",
                reason: "If the Cannibal eats the Poppy Grower, then dies or loses the Poppy Grower ability, the Demon and Minions learn each other that night.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
            {
                id: "butler",
                reason: "If the Cannibal gains the Butler ability, the Cannibal learns this.",
                updates: [],
            },
            {
                id: "juggler",
                reason: "If the Juggler guesses on their first day and dies by execution, tonight the living Cannibal learns how many guesses the Juggler got correct.",
                updates: [],
            },
        ],
    },
    ogre: {
        id: "ogre",
        jinx: [
            {
                id: "recluse",
                reason: "If the Recluse registers as evil to the Ogre, the Ogre learns that they are evil.",
                updates: [],
            },
        ],
    },
    boffin: {
        id: "boffin",
        jinx: [
            {
                id: "cultleader",
                reason: "If the Demon has the Cult Leader ability, they can’t turn good due to this ability.",
                updates: [{ date: "2024-09-27", reason: "Added jinx." }],
            },
            {
                id: "goon",
                reason: "If the Demon has the Goon ability, they can’t turn good due to this ability.",
                updates: [{ date: "2024-09-27", reason: "Added jinx." }],
            },
            {
                id: "ogre",
                reason: "The Demon cannot have the Ogre ability.",
                updates: [{ date: "2024-09-27", reason: "Added jinx." }],
            },
            {
                id: "politician",
                reason: "The Demon cannot have the Politician ability.",
                updates: [{ date: "2024-09-27", reason: "Added jinx." }],
            },
            {
                id: "drunk",
                reason: "If the Demon would have the Drunk ability, the Boffin chooses a Townsfolk player to have this ability instead.",
                updates: [{ date: "2024-09-27", reason: "Added jinx." }],
            },
            {
                id: "villageidiot",
                reason: "If there is a spare token, the Boffin can give the Demon the Village Idiot ability.",
                updates: [{ date: "2024-09-27", reason: "Added jinx." }],
            },
        ],
    },
    psychopath: {
        id: "psychopath",
        jinx: [
            {
                id: "golem",
                reason: "If the Psychopath is mad as the Golem, the Psychopath has the Golem ability instead.",
                updates: [{ date: "2024-11-15", reason: "Added jinx." }],
            },
        ],
    },
    plaguedoctor: {
        id: "plaguedoctor",
        jinx: [
            {
                id: "eviltwin",
                reason: "The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
            {
                id: "goblin",
                reason: "If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
            {
                id: "spy",
                reason: "If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
            {
                id: "scarletwoman",
                reason: "If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
            {
                id: "boomdandy",
                reason: "If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
            {
                id: "fearmonger",
                reason: "If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
            {
                id: "baron",
                reason: "If the Storyteller gains the Baron ability, up to two players become not-in-play Outsiders.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
            {
                id: "marionette",
                reason: "If the Demon has a neighbor who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Plague Doctor",
                    },
                ],
            },
        ],
    },
    heretic: {
        id: "heretic",
        jinx: [
            {
                id: "pithag",
                reason: "A Pit-Hag can not create a Heretic.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Heretic",
                    },
                ],
            },
            {
                id: "spy",
                reason: "Only 1 jinxed character can be in play.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Heretic",
                    },
                ],
            },
            {
                id: "widow",
                reason: "Only 1 jinxed character can be in play.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Heretic",
                    },
                ],
            },
            {
                id: "godfather",
                reason: "Only 1 jinxed character can be in play.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Heretic",
                    },
                ],
            },
            {
                id: "baron",
                reason: "The Baron might only add 1 Outsider, not 2.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Heretic",
                    },
                ],
            },
            {
                id: "lleech",
                reason: "If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Heretic",
                    },
                ],
            },
            {
                id: "boffin",
                reason: "The Demon cannot have the Heretic ability.",
                updates: [
                    { date: "2024-09-27", reason: "Added jinx." },
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Heretic",
                    },
                ],
            },
        ],
    },
    mathematician: {
        id: "mathematician",
        jinx: [
            {
                id: "mathematician",
                reason: "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Mathematician",
                    },
                ],
            },
            {
                id: "lunatic",
                reason: "The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Mathematician",
                    },
                ],
            },
        ],
    },
    bountyhunter: {
        id: "bountyhunter",
        jinx: [
            {
                id: "kazali",
                reason: "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts.",
                updates: [
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Bounty Hunter",
                    },
                ],
            },
            {
                id: "philosopher",
                reason: "If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil.",
                updates: [
                    { date: "2024-06-09", reason: "Added jinx." },
                    {
                        date: "2024-12-13",
                        reason: "Moved jinx to Bounty Hunter",
                    },
                ],
            },
        ],
    },
    butler: {
        id: "butler",
        jinx: [
            {
                id: "butler",
                reason: "If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too.",
                updates: [
                    { date: "2024-12-13", reason: "Moved jinx to Butler" },
                ],
            },
        ],
    },
};

export default jinxes;
