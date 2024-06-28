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
    chambermaid: {
        id: "chambermaid",
        jinx: [
            {
                id: "mathematician",
                reason: "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first.",
                updates: [],
            },
        ],
    },
    eviltwin: {
        id: "eviltwin",
        jinx: [
            {
                id: "plaguedoctor",
                reason: "The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies.",
                updates: [],
            },
        ],
    },
    lunatic: {
        id: "lunatic",
        jinx: [
            {
                id: "mathematician",
                reason: "The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked.",
                updates: [],
            },
        ],
    },
    pithag: {
        id: "pithag",
        jinx: [
            {
                id: "heretic",
                reason: "A Pit-Hag can not create a Heretic.",
                updates: [],
            },
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
    goblin: {
        id: "goblin",
        jinx: [
            {
                id: "plaguedoctor",
                reason: "If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this.",
                updates: [],
            },
        ],
    },
    leviathan: {
        id: "leviathan",
        jinx: [
            {
                id: "soldier",
                reason: "If Leviathan nominates and executes the Soldier, the Soldier does not die.",
                updates: [],
            },
            {
                id: "monk",
                reason: "If Leviathan nominates and executes the player the Monk chose, that player does not die.",
                updates: [],
            },
            {
                id: "innkeeper",
                reason: "If Leviathan nominates and executes a player the Innkeeper chose, that player does not die.",
                updates: [],
            },
            {
                id: "ravenkeeper",
                reason: "If Leviathan is in play & the Ravenkeeper dies by execution, they wake that night to use their ability. They are drunk if their nominator was good.",
                updates: [],
            },
            {
                id: "banshee",
                reason: "If Leviathan is in play, and the Banshee dies by execution, all players learn that the Banshee has died, and the Banshee gains their ability.",
                updates: [],
            },
            {
                id: "sage",
                reason: "If Leviathan is in play & the Sage dies by execution, they wake that night to use their ability. They are drunk if their nominator was good.",
                updates: [],
            },
            {
                id: "farmer",
                reason: "If Leviathan is in play & a Farmer dies by execution, a good player becomes a Farmer that night.",
                updates: [],
            },
            {
                id: "mayor",
                reason: "If Leviathan is in play & no execution occurs on day 5, good wins.",
                updates: [],
            },
            {
                id: "hatter",
                reason: "If the Hatter dies on or after day 5, the Demon cannot choose Leviathan.",
                updates: [],
            },
            {
                id: "pithag",
                reason: "After day 5, the Pit-Hag cannot choose Leviathan.",
                updates: [],
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
    lycanthrope: {
        id: "lycanthrope",
        jinx: [
            {
                id: "gambler",
                reason: "If the Lycanthrope is alive and the Gambler kills themself at night, no other players can die tonight.",
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
    fanggu: {
        id: "fanggu",
        jinx: [
            {
                id: "scarletwoman",
                reason: "If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu.",
                updates: [],
            },
        ],
    },
    spy: {
        id: "spy",
        jinx: [
            {
                id: "alchemist",
                reason: "The Alchemist can not have the Spy ability.",
                updates: [],
            },
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
                id: "plaguedoctor",
                reason: "If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this.",
                updates: [],
            },
            {
                id: "damsel",
                reason: "If the Spy is (or has been) in play, the Damsel is poisoned.",
                updates: [],
            },
            {
                id: "heretic",
                reason: "Only 1 jinxed character can be in play.",
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
                id: "alchemist",
                reason: "The Alchemist can not have the Widow ability.",
                updates: [],
            },
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
            {
                id: "heretic",
                reason: "Only 1 jinxed character can be in play.",
                updates: [],
            },
        ],
    },
    godfather: {
        id: "godfather",
        jinx: [
            {
                id: "heretic",
                reason: "Only 1 jinxed character can be in play.",
                updates: [],
            },
        ],
    },
    scarletwoman: {
        id: "scarletwoman",
        jinx: [
            {
                id: "plaguedoctor",
                reason: "If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this.",
                updates: [],
            },
        ],
    },
    boomdandy: {
        id: "boomdandy",
        jinx: [
            {
                id: "plaguedoctor",
                reason: "If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately.",
                updates: [],
            },
        ],
    },
    fearmonger: {
        id: "fearmonger",
        jinx: [
            {
                id: "plaguedoctor",
                reason: "If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this.",
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
                id: "alchemist",
                reason: "If there is an Alchemist-Summoner in play, the game starts with a Demon in play, as normal. If the Alchemist-Summoner chooses a player, they make that player a Demon but do not change their alignment.",
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
                id: "riot",
                reason: "If the Summoner creates Riot, all Minions also become Riot.",
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
        ],
    },
    baron: {
        id: "baron",
        jinx: [
            {
                id: "heretic",
                reason: "The Baron might only add 1 Outsider, not 2.",
                updates: [],
            },
            {
                id: "plaguedoctor",
                reason: "If the Storyteller gains the Baron ability, up to two players become not-in-play Outsiders.",
                updates: [],
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
                reason: "If the Marionette thinks that they are the Balloonist, +1 Outsider was added.",
                updates: [],
            },
            {
                id: "damsel",
                reason: "The Marionette does not learn that a Damsel is in play.",
                updates: [],
            },
            {
                id: "plaguedoctor",
                reason: "If the Demon has a neighbor who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen.",
                updates: [],
            },
            {
                id: "huntsman",
                reason: "If the Marionette thinks that they are the Huntsman, the Damsel was added.",
                updates: [],
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
            {
                id: "heretic",
                reason: "If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned.",
                updates: [],
            },
        ],
    },
    kazali: {
        id: "kazali",
        jinx: [
            {
                id: "soldier",
                reason: "If the Kazali turns the Soldier into a Minion, the Soldier chooses which not-in-play Minion to become.",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "New jinx.",
                    },
                ],
            },
            {
                id: "bountyhunter",
                reason: "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts.",
                updates: [],
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
                id: "engineer",
                reason: "Riot and the Engineer can not both be in play at the start of the game. \nIf the Engineer creates Riot, the evil players become Riot.",
                updates: [],
            },
            {
                id: "golem",
                reason: "If The Golem nominates Riot, the Riot player does not die.",
                updates: [],
            },
            {
                id: "snitch",
                reason: "If the Snitch is in play, each Riot player gets an extra 3 bluffs.",
                updates: [],
            },
            {
                id: "saint",
                reason: "If a good player nominates and kills the Saint, the Saint's team loses.",
                updates: [],
            },
            {
                id: "butler",
                reason: "The Butler can not nominate their master.",
                updates: [],
            },
            {
                id: "pithag",
                reason: "If the Pit-Hag creates Riot, all evil players become Riot. \nIf the Pit-Hag creates Riot after day 3, the game continues for one more day.",
                updates: [],
            },
            {
                id: "mayor",
                reason: "If the 3rd day begins with just three players alive, the players may choose (as a group) not to nominate at all. If so (and a Mayor is alive) then the Mayor's team wins.",
                updates: [],
            },
            {
                id: "monk",
                reason: "If a Riot player nominates and kills the Monk-protected-player, the Monk-protected-player does not die.",
                updates: [],
            },
            {
                id: "farmer",
                reason: "If a Riot player nominates and kills a Farmer, the Farmer uses their ability tonight.",
                updates: [],
            },
            {
                id: "innkeeper",
                reason: "If a Riot player nominates an Innkeeper-protected-player, the Innkeeper-protected-player does not die.",
                updates: [],
            },
            {
                id: "sage",
                reason: "If a Riot player nominates and kills a Sage, the Sage uses their ability tonight.",
                updates: [],
            },
            {
                id: "banshee",
                reason: "If Riot nominates and kills the Banshee, all players learn that the Banshee has died, and the Banshee may nominate two players immediately.",
                updates: [],
            },
            {
                id: "ravenkeeper",
                reason: "If a Riot player nominates and kills the Ravenkeeper, the Ravenkeeper uses their ability tonight.",
                updates: [],
            },
            {
                id: "soldier",
                reason: "If a Riot player nominates the Soldier, the Soldier does not die.",
                updates: [],
            },
            {
                id: "grandmother",
                reason: "If a Riot player nominates and kills the Grandchild, the Grandmother dies too.",
                updates: [],
            },
            {
                id: "king",
                reason: "If a Riot player nominates and kills the King and the Choirboy is alive, the Choirboy uses their ability tonight.",
                updates: [],
            },
            {
                id: "exorcist",
                reason: "Only 1 jinxed character can be in play.",
                updates: [],
            },
            {
                id: "minstrel",
                reason: "Only 1 jinxed character can be in play.",
                updates: [],
            },
            {
                id: "flowergirl",
                reason: "Only 1 jinxed character can be in play.",
                updates: [],
            },
            {
                id: "undertaker",
                reason: "Players that die by nomination register as being executed to the Undertaker.",
                updates: [],
            },
            {
                id: "cannibal",
                reason: "Players that die by nomination register as being executed to the Cannibal.",
                updates: [],
            },
            {
                id: "pacifist",
                reason: "Players that die by nomination register as being executed to the Pacifist.",
                updates: [],
            },
            {
                id: "devilsadvocate",
                reason: "Players that die by nomination register as being executed to the Devil's Advocate.",
                updates: [],
            },
            {
                id: "investigator",
                reason: "Riot registers as a Minion to the Investigator.",
                updates: [],
            },
            {
                id: "clockmaker",
                reason: "Riot registers as a Minion to the Clockmaker.",
                updates: [],
            },
            {
                id: "towncrier",
                reason: "Riot registers as a Minion to the Town Crier.",
                updates: [],
            },
            {
                id: "damsel",
                reason: "Riot registers as a Minion to the Damsel.",
                updates: [],
            },
            {
                id: "preacher",
                reason: "Riot registers as a Minion to the Preacher.",
                updates: [],
            },
            {
                id: "hatter",
                reason: "If the Hatter dies, Riot is in play and a Riot chooses a different Demon, a normal evil team is created from the Riot players. If the Hatter dies and the Demon chooses Riot, Minions become Riot too.",
                updates: [],
            },
        ],
    },
    alhadikhia: {
        id: "alhadikhia",
        jinx: [
            {
                id: "scarletwoman",
                reason: "If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again.",
                updates: [],
            },
        ],
    },
    organgrinder: {
        id: "organgrinder",
        jinx: [
            {
                id: "butler",
                reason: "If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too.",
                updates: [],
            },
            {
                id: "minstrel",
                reason: "If the Minstrel makes everyone drunk, the Organ Grinder keeps their ability but the Minstrel keeps their eyes open when voting.",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "Remove hatred and give minstrel an ability.",
                    },
                ],
            },
            {
                id: "preacher",
                reason: "If the Preacher removes the Organ Grinder ability, the Organ Grinder keeps their ability but the Preacher keeps their eyes open when voting.",
                updates: [
                    {
                        date: "2024-06-28",
                        reason: "Remove hatred and give preacher an ability.",
                    },
                ],
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
                id: "alchemist",
                reason: "If the Alchemist has the Vizier ability, they may only choose to execute immediately if three or more players voted, regardless of those players' alignment.",
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
    philosopher: {
        id: "philosopher",
        jinx: [
            {
                id: "bountyhunter",
                reason: "If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil.",
                updates: [{ date: "2024-06-09", reason: "Added jinx." }],
            },
        ],
    },
};

export default jinxes;
