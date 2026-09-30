var player = {
  userName: "",
  lives: 3,
  equipments: {},
  progression: 0,
  objective: {
    objectiveId: 1,
    objectiveMessage: "Get a Sword",
  },
  coins: 250,
  currentLocation: "mainVillage",
};

var areas = {
  mainVillage: {
    connectedLocations: ["forest", "house1", "blackSmith"],
    available: true,
  },
  forest: {
    connectedLocations: ["mainVillage"],
    available: false,
  },
  blackSmith: {
    connectedLocations: ["mainVillage"],
    available: false,
  },
  house1: {
    connectedLocations: ["mainVillage", "firstRoom", "secondRoom"],
    available: false,
  },
  firstRoom: {
    connectedLocations: ["house1"],
    available: false,
  },
  secondRoom: {
    connectedLocations: ["house1"],
    available: false,
    collectables: [
      {
        equipmentName: "basic sword",
        strength: 20,
        usedFor: "fighting",
      },
    ],
  },
};

var missions = [
  {
    missionId: 1,
    missionName: "chapterOne",
    available: false,
    completed: false,
    missionDialogues: [
      {
        with: "stranger",
        onCompleted: () => {
          activateArea("blackSmith");
          activateMission(2);
          increasePlayerProgression(5);
          player.objective.objectiveMessage = "Talk to the blacksmith";
        },
        dialogue: [
          {
            question: "Hello, are you new here?",
            availableAnswers: {
              1: {
                text: "Yes, I'm new.",
                nextDialogue: {
                  question: "What brings you to this village?",
                  availableAnswers: {
                    1: {
                      text: "I'm looking for equipment",
                      nextDialogue: {
                        question:
                          "If you need an equipment, you should talk to the blacksmith. His shop is near the center of the village",
                        availableAnswers: {
                          1: {
                            text: "Thank you, I'll talk to him",
                            cancelsMainBehaviour: true,
                          },
                        },
                      },
                    },
                  },
                },
              },

              2: {
                text: "No, I'm just passing through",

                nextDialogue: {
                  question:
                    "I see. If you're looking for equipment, the blacksmith might be able to help you",

                  availableAnswers: {
                    1: {
                      text: "I'll check with him",
                      cancelsMainBehaviour: true,
                    },
                  },
                },
              },

              3: {
                text: "I prefer not to answer",
              },
            },
          },
        ],
      },
    ],
  },

  {
    missionId: 2,
    missionName: "chapterTwo",
    available: false,
    completed: false,
    missionDialogues: [
      {
        with: "blacksmith",
        onCompleted: () => {
          activateArea("house1");
          activateArea("firstRoom");
          activateArea("secondRoom");
          activateMission(3);
          increasePlayerProgression(10);
          player.objective.objectiveMessage = "Search the abandoned house";
        },

        dialogue: [
          {
            question:
              "welcome. you look like you need some equipment. What are you looking for?",

            availableAnswers: {
              1: {
                text: "I'm looking for a sword.",

                nextDialogue: {
                  question:
                    "I do have a sword for sale. It's a good one, but it costs 500 coins",

                  availableAnswers: {
                    1: {
                      text: "I only have 250 coins",

                      nextDialogue: {
                        question:
                          "then you can't afford it. There is another option, though. An abandoned house on the edge of the village has been empty for years. People say an old sword was left inside",

                        availableAnswers: {
                          1: {
                            text: "I'll search the house",
                            cancelsMainBehaviour: true,
                          },
                        },
                      },
                    },

                    2: {
                      text: "that's too expensive",

                      nextDialogue: {
                        question:
                          "There is another option. An abandoned house on the edge of the village has been empty for years. People say an old sword was left inside",

                        availableAnswers: {
                          1: {
                            text: "I'll search the house",
                            cancelsMainBehaviour: true,
                          },
                        },
                      },
                    },
                  },
                },
              },

              2: {
                text: "can you make me a sword?",

                nextDialogue: {
                  question:
                    "I could, but it would cost more than the sword I already have. You don't have enough coins for it",
                  availableAnswers: {
                    1: {
                      text: "Then I'll look somewhere else",
                      nextDialogue: {
                        question:
                          "You could search the abandoned house on the edge of the village. An old sword is rumored to be inside",
                        availableAnswers: {
                          1: {
                            text: "I'll search the house",
                            cancelsMainBehaviour: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },

  {
    missionId: 3,
    missionName: "chapterThree",
    available: false,
    completed: false,
    missionDialogues: [
      {
        with: "old note",
        onCompleted: () => {
          activateArea("forest");
          activateMission(4);
          increasePlayerProgression(15);
          player.objective.objectiveMessage =
            "Go to the forest and look for the person who wrote the note";
        },
        dialogue: [
          {
            question:
              "After searching the house, you find an old sword and a folded note beside it",
            availableAnswers: {
              1: {
                text: "Read the note",
                nextDialogue: {
                  question:
                    'the note says: "If anyone finds this, please help me. I went into the forest looking for a safe place after the creatures appeared near the village , I have been hiding there and I don\'t know how much longer I can stay. Please find me"',
                  availableAnswers: {
                    1: {
                      text: "someone needs help , I'll find them",
                      cancelsMainBehaviour: true,
                    },
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },

  {
    missionId: 4,
    missionName: "chapterFour",
    available: false,
    completed: false,
    missionDialogues: [
      {
        with: "forest creature",

        onCompleted: () => {
          completeMission(4);
          increasePlayerProgression(25);
          player.objective.objectiveMessage = "Chapter One completed";
          showMessage("You survived the forest and completed Chapter One!");
        },

        dialogue: [
          {
            question:
              "You enter the forest looking for the person who wrote the note , Suddenly, a strange creature appears and blocks your path",

            availableAnswers: {
              1: {
                text: "Fight the creature",
                cancelsMainBehaviour: true,
              },

              2: {
                text: "Run away",
                cancelsMainBehaviour: true,
              },
            },
          },
        ],
      },
    ],
  },
];

var currentMissionId = 1;

player.userName = input("Welcome, what is your name ?");

showMessage(
  `Welcome ${player.userName}. You have ${player.lives} lives. Click Ok to continue`,
);

activateMission(1);
// infinite loop (Main game loop) only stops if player decided to exit or finished missions
while (true) {
  var currentMission = getmissionwithId(currentMissionId);

  if (!currentMission || !currentMission.available) {
    showMessage("There is no active mission.");
    break;
  }

  var action = input(`
${currentMission.missionName} - Progression ${player.progression}
Location: ${player.currentLocation}
Coins: ${player.coins}
Objective: ${player.objective.objectiveMessage}

1 : Continue mission
2 : Move to another area
m : Exit
`);

  if (action == "m") break;

  if (action == "2") {
    movePlayer();
    continue;
  }

  if (action != "1") continue;

  if (currentMissionId == 2 && player.currentLocation != "blackSmith") {
    showMessage("You need to go to the blacksmith");
    continue;
  }

  if (currentMissionId == 3 && player.currentLocation != "secondRoom") {
    showMessage("You need to search the abandoned house");
    continue;
  }

  if (currentMissionId == 4 && player.currentLocation != "forest") {
    showMessage("You need to go to the forest");
    continue;
  }

  playMission(currentMission);
}
// responsible for handling option 1 in main menu
function playMission(currentMission) {
  var mainDialogue = currentMission.missionDialogues[0];

  var currentDialogue = mainDialogue.dialogue[0];
  if (!hasUnreadAnswers(currentDialogue)) {
    finishMission(currentMission);
    return;
  }

  while (true) {
    var dialogueOptions = Object.keys(currentDialogue.availableAnswers);

    var textOptions = "";

    for (var i = 0; i < dialogueOptions.length; i++) {
      var answer = currentDialogue.availableAnswers[dialogueOptions[i]];

      if (!answer.read) {
        textOptions += `${dialogueOptions[i]} : ${answer.text}\n`;
      }
    }

    textOptions += "m : Back to main menu";

    var result = input(`
${currentMission.missionName} - Progression ${player.progression}

${mainDialogue.with} :
${currentDialogue.question}

${textOptions}
`);

    if (result == "m") {
      return;
    }

    var selectedAnswer = currentDialogue.availableAnswers[result];

    if (!selectedAnswer || selectedAnswer.read) {
      showMessage("Invalid choice.");
      continue;
    }

    if (selectedAnswer.nextDialogue) {
      currentDialogue = selectedAnswer.nextDialogue;

      continue;
    }

    if (selectedAnswer.cancelsMainBehaviour) {
      finishMission(currentMission);
      return;
    }

    selectedAnswer.read = true;

    if (currentDialogue.defaultBehaviour) {
      currentDialogue.defaultBehaviour();
      selectedAnswer.read = true;
    }
  }
}

function input(textToShow) {
  return window.prompt(textToShow);
}

function showMessage(message) {
  return window.alert(message);
}

function increasePlayerProgression(amount) {
  player.progression += amount;
}

function activateMission(missionId) {
  var mission = getmissionwithId(missionId);

  if (mission) {
    mission.available = true;
  }
}

function completeMission(missionId) {
  var mission = getmissionwithId(missionId);

  if (mission) {
    mission.completed = true;
    mission.available = false;
  }
}

function activateArea(areaName) {
  if (areas[areaName]) {
    areas[areaName].available = true;
  }
}

function activateAreas(areasName) {
  for (var i = 0; i < areasName.length; i++) {
    activateArea(areasName[i]);
  }
}

// responsible for handling option 2 in main menu
function movePlayer() {
  var currentArea = areas[player.currentLocation];

  var availableLocations = [];

  for (var i = 0; i < currentArea.connectedLocations.length; i++) {
    var locationName = currentArea.connectedLocations[i];

    if (areas[locationName] && areas[locationName].available) {
      availableLocations.push(locationName);
    }
  }

  if (availableLocations.length == 0) {
    showMessage("There are no available areas to move to.");
    return;
  }

  var locationsText = "";

  for (var i = 0; i < availableLocations.length; i++) {
    locationsText += `${i + 1} : ${availableLocations[i]}\n`;
  }

  var result = input(`
Choose an area:

${locationsText}
m : Back to main menu
`);

  if (result == "m") {
    return;
  }

  var selectedLocation = availableLocations[Number(result) - 1];

  if (!selectedLocation) {
    showMessage("Invalid area.");
    return;
  }

  player.currentLocation = selectedLocation;
  showMessage(`You moved to ${player.currentLocation}.`);

  if (player.currentLocation == "secondRoom" && currentMissionId == 3) {
    collectSword();
  }
}

function collectSword() {
  if (player.equipments.sword) {
    return;
  }
  var room = areas.secondRoom;

  if (!room.collectables) {
    return;
  }
  var sword = room.collectables[0];
  player.equipments.sword = sword;
  player.objective.objectiveMessage = "Read the note in the room";
  increasePlayerProgression(15);
  showMessage(`You found the ${sword.equipmentName} and picked it up`);
}

function hasUnreadAnswers(dialogue) {
  var answers = Object.keys(dialogue.availableAnswers);
  for (var i = 0; i < answers.length; i++) {
    if (!dialogue.availableAnswers[answers[i]].read) {
      return true;
    }
  }

  return false;
}

function finishMission(mission) {
  var mainDialogue = mission.missionDialogues[0];
  mainDialogue.onCompleted();
  mission.completed = true;
  mission.available = false;
  if (currentMissionId < missions.length) {
    currentMissionId++;
  }
}

function getmissionwithId(missionId) {
  for (var i = 0; i < missions.length; i++) {
    if (missions[i].missionId == missionId) {
      return missions[i];
    }
  }
}
