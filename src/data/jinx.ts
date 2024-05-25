type Jinxes = {
    [key: string] : Jinx
}

interface Jinx  {
  id: string;
  jinx: JinxContent[]
}

interface JinxContent {
  id: string;
  reason: string
}

const jinxes : Jinxes = {
    chambermaid: {
        "id": "chambermaid",
        "jinx": [
          {
            "id": "mathematician",
            "reason": "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first."
          }
        ]
      },
    eviltwin: {
        "id": "eviltwin",
        "jinx": [
          {
            "id": "plaguedoctor",
            "reason": "The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies."
          }
        ]
      },
    lunatic:   {
        "id": "lunatic",
        "jinx": [
          {
            "id": "mathematician",
            "reason": "The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked."
          }
        ]
      },
    pithag: {
        "id": "pithag",
        "jinx": [
          {
            "id": "heretic",
            "reason": "A Pit-Hag can not create a Heretic."
          },
          {
            "id": "damsel",
            "reason": "If a Pit-Hag creates a Damsel, the Storyteller chooses which player it is."
          },
          {
            "id": "politician",
            "reason": "If the Pit-Hag turns an evil player into the Politician, they can't turn good due to their own ability."
          },
          {
            "id": "villageidiot",
            "reason": "If there is a spare token, the Pit-Hag can create an extra Village Idiot. If so, the drunk Village Idiot might change."
          },
          {
            "id": "cultleader",
            "reason": "If the Pit-Hag turns an evil player into the Cult Leader, they can't turn good due to their own ability."
          },
          {
            "id": "goon",
            "reason": "If the Pit-Hag turns an evil player into the Goon, they can't turn good due to their own ability."
          },
          {
            "id": "ogre",
            "reason": "If the Pit-Hag turns an evil player into the Ogre, they can't turn good due to their own ability."
          }
        ]
      },
    cerenovus: {
        "id": "cerenovus",
        "jinx": [
          {
            "id": "goblin",
            "reason": "The Cerenovus may choose to make a player mad that they are the Goblin."
          }
        ]
      },
    goblin:   {
        "id": "goblin",
        "jinx": [
          {
            "id": "plaguedoctor",
            "reason": "If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this."
          }
        ]
      },
    leviathan: {
        "id": "leviathan",
        "jinx": [
          {
            "id": "soldier",
            "reason": "If Leviathan nominates and executes the Soldier, the Soldier does not die."
          },
          {
            "id": "monk",
            "reason": "If Leviathan nominates and executes the player the Monk chose, that player does not die."
          },
          {
            "id": "innkeeper",
            "reason": "If Leviathan nominates and executes a player the Innkeeper chose, that player does not die."
          },
          {
            "id": "ravenkeeper",
            "reason": "If Leviathan is in play & the Ravenkeeper dies by execution, they wake that night to use their ability. They are drunk if their nominator was good."
          },
          {
            "id": "banshee",
            "reason": "If Leviathan is in play, and the Banshee dies by execution, all players learn that the Banshee has died, and the Banshee gains their ability."
          },
          {
            "id": "sage",
            "reason": "If Leviathan is in play & the Sage dies by execution, they wake that night to use their ability. They are drunk if their nominator was good."
          },
          {
            "id": "farmer",
            "reason": "If Leviathan is in play & a Farmer dies by execution, a good player becomes a Farmer that night."
          },
          {
            "id": "mayor",
            "reason": "If Leviathan is in play & no execution occurs on day 5, good wins."
          },
          {
            "id": "hatter",
            "reason": "If the Hatter dies on or after day 5, the Demon cannot choose Leviathan."
          },
          {
            "id": "pithag",
            "reason": "After day 5, the Pit-Hag cannot choose Leviathan."
          }
        ]
      },
    lilmonsta: {
        "id": "lilmonsta",
        "jinx": [
          {
            "id": "poppygrower",
            "reason": "If the Poppy Grower is in play, Minions don't wake together. They are woken one by one, until one of them chooses to take the Lil' Monsta token."
          },
          {
            "id": "magician",
            "reason": "Only 1 jinxed character can be in play."
          },
          {
            "id": "scarletwoman",
            "reason": "If there are 5 or more players alive and the player holding the Lil' Monsta token dies, the Scarlet Woman is given the Lil' Monsta token tonight."
          },
          {
            "id": "organgrinder",
            "reason": "Votes for the Organ Grinder count if the Organ Grinder is babysitting Lil' Monsta."
          },
          {
            "id": "vizier",
            "reason": "The Vizier can die by execution if they are babysitting Lil' Monsta."
          },
          {
            "id": "hatter",
            "reason": "If a Demon chooses Lil' Monsta, they also choose a Minion to become and babysit Lil' Monsta tonight."
          }
        ]
      },
      lycanthrope:  {
        "id": "lycanthrope",
        "jinx": [
          {
            "id": "gambler",
            "reason": "If the Lycanthrope is alive and the Gambler kills themself at night, no other players can die tonight."
          }
        ]
      },
      legion:  {
        "id": "legion",
        "jinx": [
          {
            "id": "engineer",
            "reason": "Legion and the Engineer can not both be in play at the start of the game.\nIf the Engineer creates Legion, most players (including all evil players) become evil Legion."
          },
          {
            "id": "preacher",
            "reason": "Only 1 jinxed character can be in play."
          },
          {
            "id": "hatter",
            "reason": "If the Hatter dies and Legion is in play, nothing happens. If the Hatter dies and an evil player chooses Legion, all current evil players become Legion."
          }
        ]
      },
      fanggu:   {
        "id": "fanggu",
        "jinx": [
          {
            "id": "scarletwoman",
            "reason": "If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu."
          }
        ]
      },
      spy: {
        "id": "spy",
        "jinx": [
          {
            "id": "alchemist",
            "reason": "The Alchemist can not have the Spy ability."
          },
          {
            "id": "magician",
            "reason": "When the Spy sees the Grimoire, the Demon and Magician's character tokens are removed."
          },
          {
            "id": "poppygrower",
            "reason": "If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies."
          },
          {
            "id": "plaguedoctor",
            "reason": "If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this."
          },
          {
            "id": "damsel",
            "reason": "If the Spy is (or has been) in play, the Damsel is poisoned."
          },
          {
            "id": "heretic",
            "reason": "Only 1 jinxed character can be in play."
          },
          {
            "id": "ogre",
            "reason": "The Spy registers as evil to the Ogre."
          }
        ]
      },
      widow:  {
        "id": "widow",
        "jinx": [
          {
            "id": "alchemist",
            "reason": "The Alchemist can not have the Widow ability."
          },
          {
            "id": "magician",
            "reason": "When the Widow sees the Grimoire, the Demon and Magician's character tokens are removed."
          },
          {
            "id": "poppygrower",
            "reason": "If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies."
          },
          {
            "id": "damsel",
            "reason": "If the Widow is (or has been) in play, the Damsel is poisoned."
          },
          {
            "id": "heretic",
            "reason": "Only 1 jinxed character can be in play."
          }
        ]
      },
      godfather: {
        "id": "godfather",
        "jinx": [
          {
            "id": "heretic",
            "reason": "Only 1 jinxed character can be in play."
          }
        ]
      },
      scarletwoman:   {
        "id": "scarletwoman",
        "jinx": [
          {
            "id": "plaguedoctor",
            "reason": "If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this."
          }
        ]
      },
      boomdandy:   {
        "id": "boomdandy",
        "jinx": [
          {
            "id": "plaguedoctor",
            "reason": "If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately."
          }
        ]
      },
      fearmonger:   {
        "id": "fearmonger",
        "jinx": [
          {
            "id": "plaguedoctor",
            "reason": "If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this."
          }
        ]
      },
      yaggababble:   {
        "id": "yaggababble",
        "jinx": [
          {
            "id": "exorcist",
            "reason": "If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight."
          }
        ]
      },
      summoner: {
        "id": "summoner",
        "jinx": [
          {
            "id": "clockmaker",
            "reason": "If the Summoner is in play, the Clockmaker does not receive their information until a Demon is created."
          },
          {
            "id": "alchemist",
            "reason": "If there is an Alchemist-Summoner in play, the game starts with a Demon in play, as normal. If the Alchemist-Summoner chooses a player, they make that player a Demon but do not change their alignment."
          },
          {
            "id": "poppygrower",
            "reason": "If the Poppy Grower is alive when the Summoner acts, the Summoner chooses which Demon, but the Storyteller chooses which player."
          },
          {
            "id": "marionette",
            "reason": "The Marionette neighbors the Summoner. The Summoner knows who the Marionette is."
          },
          {
            "id": "pithag",
            "reason": "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary."
          },
          {
            "id": "hatter",
            "reason": "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary."
          },
          {
            "id": "courtier",
            "reason": "If the Summoner is drunk on the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player."
          },
          {
            "id": "engineer",
            "reason": "If the Engineer removes a Summoner from play before that Summoner uses their ability, the Summoner uses their ability immediately."
          },
          {
            "id": "zombuul",
            "reason": "If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once."
          },
          {
            "id": "pukka",
            "reason": "The Summoner may choose a player to become the Pukka on the 2nd night."
          },
          {
            "id": "riot",
            "reason": "If the Summoner creates Riot, all Minions also become Riot."
          },
          {
            "id": "legion",
            "reason": "If the Summoner creates Legion, most players (including all evil players) become evil Legion."
          },
          {
            "id": "kazali",
            "reason": "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary."
          }
        ]
      },
      baron:   {
        "id": "baron",
        "jinx": [
          {
            "id": "heretic",
            "reason": "The Baron might only add 1 Outsider, not 2."
          },
          {
            "id": "plaguedoctor",
            "reason": "If the Storyteller gains the Baron ability, up to two players become not-in-play Outsiders."
          }
        ]
      },
      marionette: {
        "id": "marionette",
        "jinx": [
          {
            "id": "lilmonsta",
            "reason": "The Marionette neighbors a Minion, not the Demon. The Marionette is not woken to choose who takes the Lil' Monsta token, and does not learn they are the Marionette if they have the Lil' Monsta token."
          },
          {
            "id": "poppygrower",
            "reason": "When the Poppy Grower dies, the Demon learns the Marionette but the Marionette learns nothing."
          },
          {
            "id": "snitch",
            "reason": "The Marionette does not learn 3 not in-play characters. The Demon learns an extra 3 instead."
          },
          {
            "id": "balloonist",
            "reason": "If the Marionette thinks that they are the Balloonist, +1 Outsider was added."
          },
          {
            "id": "damsel",
            "reason": "The Marionette does not learn that a Damsel is in play."
          },
          {
            "id": "plaguedoctor",
            "reason": "If the Demon has a neighbor who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen."
          },
          {
            "id": "huntsman",
            "reason": "If the Marionette thinks that they are the Huntsman, the Damsel was added."
          }
        ]
      },
      lleech: {
        "id": "lleech",
        "jinx": [
          {
            "id": "mastermind",
            "reason": "If the Mastermind is alive and the Lleech's host dies by execution, the Lleech lives but loses their ability."
          },
          {
            "id": "slayer",
            "reason": "If the Slayer slays the Lleech's host, the host dies."
          },
          {
            "id": "heretic",
            "reason": "If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned."
          }
        ]
      },
      kazali: {
        "id": "kazali",
        "jinx": [
          {
            "id": "bountyhunter",
            "reason": "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts."
          },
          {
            "id": "goon",
            "reason": "If the Kazali chooses the Goon to become a Minion, remaining Minion choices are decided by the Storyteller."
          },
          {
            "id": "marionette",
            "reason": "If the Kazali chooses to create a Marionette, they must choose one of their neighbors."
          },
          {
            "id": "huntsman",
            "reason": "If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel."
          },
          {
            "id": "choirboy",
            "reason": "The Kazali can not choose the King to become a Minion if a Choirboy is in play."
          }
        ]
      },
      riot: {
        "id": "riot",
        "jinx": [
          {
            "id": "engineer",
            "reason": "Riot and the Engineer can not both be in play at the start of the game. \nIf the Engineer creates Riot, the evil players become Riot."
          },
          {
            "id": "golem",
            "reason": "If The Golem nominates Riot, the Riot player does not die."
          },
          {
            "id": "snitch",
            "reason": "If the Snitch is in play, each Riot player gets an extra 3 bluffs."
          },
          {
            "id": "saint",
            "reason": "If a good player nominates and kills the Saint, the Saint's team loses."
          },
          {
            "id": "butler",
            "reason": "The Butler can not nominate their master."
          },
          {
            "id": "pithag",
            "reason": "If the Pit-Hag creates Riot, all evil players become Riot. \nIf the Pit-Hag creates Riot after day 3, the game continues for one more day."
          },
          {
            "id": "mayor",
            "reason": "If the 3rd day begins with just three players alive, the players may choose (as a group) not to nominate at all. If so (and a Mayor is alive) then the Mayor's team wins."
          },
          {
            "id": "monk",
            "reason": "If a Riot player nominates and kills the Monk-protected-player, the Monk-protected-player does not die."
          },
          {
            "id": "farmer",
            "reason": "If a Riot player nominates and kills a Farmer, the Farmer uses their ability tonight."
          },
          {
            "id": "innkeeper",
            "reason": "If a Riot player nominates an Innkeeper-protected-player, the Innkeeper-protected-player does not die."
          },
          {
            "id": "sage",
            "reason": "If a Riot player nominates and kills a Sage, the Sage uses their ability tonight."
          },
          {
            "id": "banshee",
            "reason": "If Riot nominates and kills the Banshee, all players learn that the Banshee has died, and the Banshee may nominate two players immediately."
          },
          {
            "id": "ravenkeeper",
            "reason": "If a Riot player nominates and kills the Ravenkeeper, the Ravenkeeper uses their ability tonight."
          },
          {
            "id": "soldier",
            "reason": "If a Riot player nominates the Soldier, the Soldier does not die."
          },
          {
            "id": "grandmother",
            "reason": "If a Riot player nominates and kills the Grandchild, the Grandmother dies too."
          },
          {
            "id": "king",
            "reason": "If a Riot player nominates and kills the King and the Choirboy is alive, the Choirboy uses their ability tonight."
          },
          {
            "id": "exorcist",
            "reason": "Only 1 jinxed character can be in play."
          },
          {
            "id": "minstrel",
            "reason": "Only 1 jinxed character can be in play."
          },
          {
            "id": "flowergirl",
            "reason": "Only 1 jinxed character can be in play."
          },
          {
            "id": "undertaker",
            "reason": "Players that die by nomination register as being executed to the Undertaker."
          },
          {
            "id": "cannibal",
            "reason": "Players that die by nomination register as being executed to the Cannibal."
          },
          {
            "id": "pacifist",
            "reason": "Players that die by nomination register as being executed to the Pacifist."
          },
          {
            "id": "devilsadvocate",
            "reason": "Players that die by nomination register as being executed to the Devil's Advocate."
          },
          {
            "id": "investigator",
            "reason": "Riot registers as a Minion to the Investigator."
          },
          {
            "id": "clockmaker",
            "reason": "Riot registers as a Minion to the Clockmaker."
          },
          {
            "id": "towncrier",
            "reason": "Riot registers as a Minion to the Town Crier."
          },
          {
            "id": "damsel",
            "reason": "Riot registers as a Minion to the Damsel."
          },
          {
            "id": "preacher",
            "reason": "Riot registers as a Minion to the Preacher."
          },
          {
            "id": "hatter",
            "reason": "If the Hatter dies, Riot is in play and a Riot chooses a different Demon, a normal evil team is created from the Riot players. If the Hatter dies and the Demon chooses Riot, Minions become Riot too."
          }
        ]
      },
      alhadikhia:   {
        "id": "alhadikhia",
        "jinx": [
          {
            "id": "scarletwoman",
            "reason": "If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again."
          },
          {
            "id": "mastermind",
            "reason": "Only 1 jinxed character can be in play. Evil players start knowing which player and character it is."
          }          
        ]
      },
      organgrinder:   {
        "id": "organgrinder",
        "jinx": [
          {
            "id": "butler",
            "reason": "If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too."
          },
          {
            "id": "flowergirl",
            "reason": "If players' eyes were closed during the nominations, the Flowergirl learns how many times the Demon voted."
          },
          {
            "id": "minstrel",
            "reason": "Only 1 jinxed character can be in play. Evil players start knowing which player and character it is."
          },
          {
            "id": "preacher",
            "reason": "Only 1 jinxed character can be in play. Evil players start knowing which player and character it is."
          }
        ]
      },
      vizier:  {
        "id": "vizier",
        "jinx": [
          {
            "id": "investigator",
            "reason": "If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller."
          },
          {
            "id": "preacher",
            "reason": "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins."
          },
          {
            "id": "courtier",
            "reason": "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins."
          },
          {
            "id": "alchemist",
            "reason": "If the Alchemist has the Vizier ability, they may only choose to execute immediately if three or more players voted, regardless of those players' alignment."
          },
          {
            "id": "magician",
            "reason": "Only 1 jinxed character can be in play. Evil players start knowing which player and character it is."
          },
          {
            "id": "fearmonger",
            "reason": "The Vizier wakes with the Fearmonger, learns who they choose and cannot choose to immediately execute that player."
          },
          {
            "id": "politician",
            "reason": "The Politician might register as evil to the Vizier."
          }
        ]
      },
      vortox:   {
        "id": "vortox",
        "jinx": [
          {
            "id": "banshee",
            "reason": "If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died."
          }
        ]
      },
      cannibal: {
        "id": "cannibal",
        "jinx" : [
          {
            "id": "butler",
            "reason": 	"If the Cannibal gains the Butler ability, the Cannibal learns this."
          },
          {
            "id": "juggler",
            "reason": "If the Juggler guesses on their first day and dies by execution, tonight the living Cannibal learns how many guesses the Juggler got correct."
          }
        ]
      },
      ogre: {
        "id": "ogre",
        "jinx": [
          {
            "id": "recluse",
            "reason": "If the Recluse registers as evil to the Ogre, the Ogre learns that they are evil."
          }
        ]
      }
}

export default jinxes