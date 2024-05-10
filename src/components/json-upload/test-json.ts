import { ScriptJSONSchemaType } from "./universal-json-validator";

const testJSON: ScriptJSONSchemaType = {
    name: "Indigestion Brewing",
    scriptColourOptions: {
        colour: "#FFA500",
        colourBlendType: "difference",
    },
    tokenConfig: {
        page: {
            height: 1123,
            width: 794,
            margin: 38,
        },
        tokenSizes: {
            role: {
                tokenSize: 170,
                tokenMargin: 4,
                tokenImageBMargin: 0,
            },
            reminder: {
                tokenSize: 94.5,
                tokenMargin: 4,
                tokenImageBMargin: 12,
            },
            tokenSpacerMargin: 4,
        },
        tokenStyles: {
            fontColour: "#262626",
            fontSize: {
                role: "text-lg",
                reminder: "text-sm",
            },
            setup: {
                icon: "&#10010;",
                colour: " #d97f3f",
            },
            firstNight: {
                icon: "&#10038;",
                colour: "#262626",
            },
            otherNight: {
                icon: "&#10038;",
                colour: "#262626",
            },
            reminder: {
                icon: "&#10038;",
                colour: "#262626",
            },
            border: {
                colour: "#402f03",
                alpha: 0.4,
                circleBorder: true,
                squareBorder: false,
                thickness: 4,
            },
        },
    },
    roles: [
        {
            id: "noble",
            name: "Noble",
            team: "townsfolk",
            firstNight: 43,
            firstNightReminder:
                "Point to 3 players including one evil player, in no particular order.",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [
                {
                    text: "Seen",
                    count: 3,
                },
            ],
            setup: false,
            ability:
                "You start knowing 3 players, 1 and only 1 of which is evil.",
            count: 1,
            image: "/roles/modern/noble.webp",
        },
        {
            id: "clockmaker",
            name: "Clockmaker",
            team: "townsfolk",
            firstNight: 40,
            firstNightReminder:
                "Show the hand signal for the number (1, 2, 3, etc.) of places from Demon to closest Minion.",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [],
            setup: false,
            ability:
                "You start knowing how many steps from the Demon to its nearest Minion.",
            count: 1,
            image: "/roles/modern/clockmaker.webp",
        },
        {
            id: "grandmother",
            name: "Grandmother",
            team: "townsfolk",
            firstNight: 39,
            firstNightReminder:
                "Show the marked character token. Point to the marked player.",
            otherNight: 50,
            otherNightReminder:
                "If the Grandmother’s grandchild was killed by the Demon tonight: The Grandmother dies.",
            reminders: [
                {
                    text: "Grandchild",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "You start knowing a good player & their character. If the Demon kills them, you die too.",
            count: 1,
            image: "/roles/modern/grandmother.webp",
        },
        {
            id: "pixie",
            name: "Pixie",
            team: "townsfolk",
            firstNight: 29,
            firstNightReminder:
                "Show the Pixie 1 in-play Townsfolk character token.",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [
                {
                    text: "Mad",
                    count: 1,
                },
                {
                    text: "Has ability",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.",
            count: 1,
            image: "/roles/modern/pixie.webp",
        },
        {
            id: "sailor",
            name: "Sailor",
            team: "townsfolk",
            firstNight: 10,
            firstNightReminder:
                "The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
            otherNight: 4,
            otherNightReminder:
                "The previously drunk player is no longer drunk. The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
            reminders: [
                {
                    text: "Drunk",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
            count: 1,
            image: "/roles/modern/sailor.webp",
        },
        {
            id: "cultleader",
            name: "Cult Leader",
            team: "townsfolk",
            firstNight: 47,
            firstNightReminder:
                "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
            otherNight: 67,
            otherNightReminder:
                "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
            reminders: [],
            setup: false,
            ability:
                "Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins.",
            count: 1,
            image: "/roles/modern/cultleader.webp",
        },
        {
            id: "snakecharmer",
            name: "Snake Charmer",
            team: "townsfolk",
            firstNight: 20,
            firstNightReminder:
                "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
            otherNight: 12,
            otherNightReminder:
                "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
            reminders: [
                {
                    text: "Poisoned",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
            count: 1,
            image: "/roles/modern/snakecharmer.webp",
        },
        {
            id: "innkeeper",
            name: "Innkeeper",
            team: "townsfolk",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 9,
            otherNightReminder:
                "The previously protected and drunk players lose those markers. The Innkeeper points to two players. Those players are protected. One is drunk.",
            reminders: [
                {
                    text: "Protected",
                    count: 2,
                },
                {
                    text: "Drunk",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
            count: 1,
            image: "/roles/modern/innkeeper.webp",
        },
        {
            id: "professor",
            name: "Professor",
            team: "townsfolk",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 45,
            otherNightReminder:
                "If the Professor has not used their ability: The Professor either shakes their head no, or points to a player. If that player is a Townsfolk, they are now alive.",
            reminders: [
                {
                    text: "Alive",
                    count: 1,
                },
                {
                    text: "No ability",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
            count: 1,
            image: "/roles/modern/professor.webp",
        },
        {
            id: "amnesiac",
            name: "Amnesiac",
            team: "townsfolk",
            firstNight: 12,
            firstNightReminder:
                "Decide the Amnesiac's entire ability. If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
            otherNight: 5,
            otherNightReminder:
                "If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
            reminders: [
                {
                    text: "?",
                    count: 5,
                },
            ],
            setup: false,
            ability:
                "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.",
            count: 1,
            image: "/roles/modern/amnesiac.webp",
        },
        {
            id: "tealady",
            name: "Tea Lady",
            team: "townsfolk",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [
                {
                    text: "Can not die",
                    count: 2,
                },
            ],
            setup: false,
            ability: "If both your alive neighbours are good, they can't die.",
            count: 1,
            image: "/roles/modern/tealady.webp",
        },
        {
            id: "farmer",
            name: "Farmer",
            team: "townsfolk",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 46,
            otherNightReminder:
                "If a Farmer died tonight, choose another good player and make them the Farmer. Wake this player, show them the 'You are' card and the Farmer character token.",
            reminders: [],
            setup: false,
            ability:
                "If you die at night, an alive good player becomes a Farmer.",
            count: 4,
            image: "/roles/modern/farmer.webp",
        },
        {
            id: "cannibal",
            name: "Cannibal",
            team: "townsfolk",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [
                {
                    text: "Poisoned",
                    count: 1,
                },
                {
                    text: "Died today",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.",
            count: 1,
            image: "/roles/modern/cannibal.webp",
        },
        {
            id: "goon",
            name: "Goon",
            team: "outsider",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [
                {
                    text: "Drunk",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.",
            count: 1,
            image: "/roles/modern/goon.webp",
        },
        {
            id: "snitch",
            name: "Snitch",
            team: "outsider",
            firstNight: 6,
            firstNightReminder:
                "After Minion info wake each Minion and show them three not-in-play character tokens. These may be the same or different to each other and the ones shown to the Demon.",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [],
            setup: false,
            ability: "Minions start knowing 3 not-in-play characters.",
            count: 1,
            image: "/roles/modern/snitch.webp",
        },
        {
            id: "klutz",
            name: "Klutz",
            team: "outsider",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [],
            setup: false,
            ability:
                "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.",
            count: 1,
            image: "/roles/modern/klutz.webp",
        },
        {
            id: "puzzlemaster",
            name: "Puzzlemaster",
            team: "outsider",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [
                {
                    text: "Drunk",
                    count: 1,
                },
                {
                    text: "Guess used",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.",
            count: 1,
            image: "/roles/modern/puzzlemaster.webp",
        },
        {
            id: "godfather",
            name: "Godfather",
            team: "minion",
            firstNight: 21,
            firstNightReminder: "Show each of the Outsider tokens in play.",
            otherNight: 38,
            otherNightReminder:
                "If an Outsider died today: The Godfather points to a player. That player dies.",
            reminders: [
                {
                    text: "Died today",
                    count: 1,
                },
                {
                    text: "Dead",
                    count: 1,
                },
            ],
            setup: true,
            ability:
                "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [−1 or +1 Outsider]",
            count: 1,
            image: "/roles/modern/godfather.webp",
        },
        {
            id: "cerenovus",
            name: "Cerenovus",
            team: "minion",
            firstNight: 25,
            firstNightReminder:
                "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
            otherNight: 16,
            otherNightReminder:
                "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
            reminders: [
                {
                    text: "Mad",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed.",
            count: 1,
            image: "/roles/modern/cerenovus.webp",
        },
        {
            id: "devilsadvocate",
            name: "Devil's Advocate",
            team: "minion",
            firstNight: 22,
            firstNightReminder:
                "The Devil’s Advocate points to a living player. That player survives execution tomorrow.",
            otherNight: 14,
            otherNightReminder:
                "The Devil’s Advocate points to a living player, different from the previous night. That player survives execution tomorrow.",
            reminders: [
                {
                    text: "Survives execution",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
            count: 1,
            image: "/roles/modern/devilsadvocate.webp",
        },
        {
            id: "widow",
            name: "Widow",
            team: "minion",
            firstNight: 18,
            firstNightReminder:
                "Show the Grimoire to the Widow for as long as they need. The Widow points to a player. That player is poisoned. Wake a good player. Show the 'These characters are in play' card, then the Widow character token.",
            otherNight: 0,
            otherNightReminder: "",
            reminders: [
                {
                    text: "Poisoned",
                    count: 1,
                },
                {
                    text: "Knows",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "On your 1st night, look at the Grimoire and choose a player: they are poisoned. 1 good player knows a Widow is in play.",
            count: 1,
            image: "/roles/modern/widow.webp",
        },
        {
            id: "lilmonsta",
            name: "Lil' Monsta",
            team: "demon",
            firstNight: 16,
            firstNightReminder:
                "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta.",
            otherNight: 36,
            otherNightReminder:
                "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta. Choose a player, that player dies.",
            reminders: [
                {
                    text: "Is the Demon",
                    count: 1,
                },
                {
                    text: "Dead",
                    count: 1,
                },
            ],
            setup: true,
            ability:
                "Each night, Minions choose who babysits Lil' Monsta's token & \"is the Demon\". A player dies each night*. [+1 Minion]",
            count: 1,
            image: "/roles/modern/lilmonsta.webp",
        },
        {
            id: "fanggu",
            name: "Fang Gu",
            team: "demon",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 29,
            otherNightReminder:
                "The Fang Gu points to a player. That player dies. Or, if that player was an Outsider and there are no other Fang Gu in play: The Fang Gu dies instead of the chosen player. The chosen player is now an evil Fang Gu. Wake the new Fang Gu. Show the 'You are' card, then the Fang Gu token. Show the 'You are' card, then the thumb-down 'evil' hand sign.",
            reminders: [
                {
                    text: "Dead",
                    count: 1,
                },
                {
                    text: "Once",
                    count: 1,
                },
            ],
            setup: true,
            ability:
                "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
            count: 2,
            image: "/roles/modern/fanggu.webp",
        },
        {
            id: "lleech",
            name: "Lleech",
            team: "demon",
            firstNight: 15,
            firstNightReminder:
                "The Lleech points to a player. Place the Poisoned reminder token.",
            otherNight: 35,
            otherNightReminder:
                "The Lleech points to a player. That player dies.",
            reminders: [
                {
                    text: "Dead",
                    count: 1,
                },
                {
                    text: "Poisoned",
                    count: 1,
                },
            ],
            setup: false,
            ability:
                "Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if & only if they die.",
            count: 1,
            image: "/roles/modern/lleech.webp",
        },
        {
            id: "legion",
            name: "Legion",
            team: "demon",
            firstNight: 0,
            firstNightReminder: "",
            otherNight: 34,
            otherNightReminder: "Choose a player, that player dies.",
            reminders: [
                {
                    text: "Dead",
                    count: 3,
                },
                {
                    text: "About to die",
                    count: 1,
                },
            ],
            setup: true,
            ability:
                "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]",
            count: 12,
            image: "/roles/modern/legion.webp",
        },
    ],
};

export default testJSON;
