const extra = {
    dawn: {
        id: "dawn",
        firstNight: 1000,
        firstNightReminder:
            "Wait a few seconds. Call for eyes open, and immediately say who has died.",
        otherNight: 1000,
        otherNightReminder:
            "Wait a few seconds. Call for eyes open, and immediately say who has died.",
        reminders: [],
        setup: false,
        count: 0,
        name: "Dawn",
        image: "/extra/dawn.webp",
    },
    dusk: {
        id: "dusk",
        firstNight: 0.1,
        firstNightReminder: "Check that all eyes are closed.",
        otherNight: 0.1,
        otherNightReminder: "Check that all eyes are closed.",
        reminders: [],
        setup: false,
        count: 0,
        name: "Dusk",
        image: "/extra/dusk.webp",
    },
    minionInfo: {
        id: "minionInfo",
        firstNight: 5,
        firstNightReminder:
            "If more than one Minion, they all make eye contact with each other. Show the “This is the Demon” card. Point to the Demon.",
        reminders: [],
        setup: false,
        count: 0,
        name: "Minion Info",
        image: "/extra/minionInfo.webp",
    },
    demonInfo: {
        id: "demonInfo",
        firstNight: 8,
        firstNightReminder:
            "Show the “These are your minions” card. Point to each Minion. Show the “These characters are not in play” card. Show 3 character tokens of good characters not in play.",
        reminders: [],
        setup: false,
        count: 0,
        name: "Demon Info",
        image: "/extra/demonInfo.webp",
    },
};

export default extra;
