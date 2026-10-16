const COURSE_HOME_INDEX = 0;
const QUEST_MAP_INDEX = 1;
const LOCKED_ROOM_INDEX = 2;
const QUEST_ROOM_INDEX = 3;
const TOUR_INDEX = 4;
const REMEMBER_ACTIVITY_INDEX = 5;
const QUICK_CHECK_INDEX = 6;
const QUESTION_ONE_INCORRECT_INDEX = 7;
const CORRECT_ANSWER_INDEX = 8;
const QUESTION_TWO_INDEX = 9;
const INCORRECT_ANSWER_INDEX = 10;
const QUESTION_THREE_INDEX = 11;
const QUESTION_THREE_CORRECT_INDEX = 12;
const UNLOCKED_AFTER_REMEMBER_INDEX = 13;
const UNDERSTAND_ACTIVITY_INDEX = 14;
const UNDERSTAND_RESPONSE_INDEX = 15;
const UNDERSTAND_COMPLETE_INDEX = 16;
const QUESTION_TWO_CORRECT_INDEX = 17;
const HAALOS_GUIDANCE_INDEX = 18;
const ASK_HAALOS_INDEX = 19;
const BIOENERGETICS_PROGRESS_INDEX = 20;
const PORTAL_WALL_LOCKED_INDEX = 21;
const PORTAL_WALL_UNLOCKED_INDEX = 22;
const LEFT_WALL_INDEX = 23;
const PHOSPHAGEN_ROOM_INDEX = 24;
const PHOSPHAGEN_RIGHT_WALL_INDEX = 25;
const PHOSPHAGEN_LEFT_WALL_INDEX = 26;
const GLYCOLYTIC_ROOM_INDEX = 27;
const GLYCOLYTIC_RIGHT_WALL_INDEX = 28;
const AEROBIC_ROOM_INDEX = 29;
const AEROBIC_RIGHT_WALL_INDEX = 30;
const AEROBIC_LEFT_WALL_INDEX = 31;
const AEROBIC_REMEMBER_ACTIVITY_INDEX = 32;
const AEROBIC_REMEMBER_QUICK_CHECK_INDEX = 33;
const AEROBIC_REMEMBER_Q1_CORRECT_INDEX = 34;
const AEROBIC_REMEMBER_QUESTION_TWO_INDEX = 35;
const AEROBIC_REMEMBER_Q2_CORRECT_INDEX = 36;
const AEROBIC_REMEMBER_QUESTION_THREE_INDEX = 37;
const AEROBIC_REMEMBER_Q3_CORRECT_INDEX = 38;
const AEROBIC_UNDERSTAND_UNLOCKED_INDEX = 39;
const AEROBIC_UNDERSTAND_ACTIVITY_INDEX = 40;
const AEROBIC_UNDERSTAND_RESPONSE_INDEX = 41;
const AEROBIC_COMPLETE_INDEX = 42;
const AEROBIC_RIGHT_WALL_COMPLETE_INDEX = 43;
const AEROBIC_LEFT_WALL_COMPLETE_INDEX = 44;
const FUEL_SELECTION_REMEMBER_ACTIVITY_INDEX = 45;
const ATP_BASICS_HAALOS_NEXT_GLYCOLYTIC_INDEX = 46;
const FUEL_SELECTION_ROOM_INDEX = 47;
const FUEL_SELECTION_RIGHT_WALL_INDEX = 48;
const FUEL_SELECTION_LEFT_WALL_INDEX = 49;
const FUEL_SELECTION_REMEMBER_Q1_INDEX = 50;
const FUEL_SELECTION_REMEMBER_Q1_INCORRECT_INDEX = 51;
const FUEL_SELECTION_REMEMBER_Q1_CORRECT_INDEX = 52;
const FUEL_SELECTION_REMEMBER_Q2_INDEX = 53;
const FUEL_SELECTION_REMEMBER_Q2_CORRECT_INDEX = 54;
const FUEL_SELECTION_REMEMBER_Q3_INDEX = 55;
const FUEL_SELECTION_REMEMBER_Q3_INCORRECT_INDEX = 56;
const FUEL_SELECTION_REMEMBER_Q3_CORRECT_INDEX = 57;
const FUEL_SELECTION_REMEMBER_COMPLETE_INDEX = 58;
const FUEL_SELECTION_UNDERSTAND_ACTIVITY_INDEX = 59;
const FUEL_SELECTION_UNDERSTAND_BULB1_SELECTED_INDEX = 60;
const FUEL_SELECTION_UNDERSTAND_BULB1_CORRECT_INDEX = 61;
const FUEL_SELECTION_UNDERSTAND_BULB2_SELECTED_INDEX = 62;
const FUEL_SELECTION_UNDERSTAND_BULB2_CORRECT_INDEX = 63;
const FUEL_SELECTION_UNDERSTAND_BULB3_SELECTED_INDEX = 64;
const FUEL_SELECTION_UNDERSTAND_BULB3_CORRECT_INDEX = 65;
const FUEL_SELECTION_UNDERSTAND_BULB4_SELECTED_INDEX = 66;
const FUEL_SELECTION_UNDERSTAND_BULB4_CORRECT_INDEX = 67;
const FUEL_SELECTION_UNDERSTAND_BULB5_SELECTED_INDEX = 68;
const FUEL_SELECTION_UNDERSTAND_SOLVED_INDEX = 69;
const FUEL_SELECTION_UNDERSTAND_COMPLETE_INDEX = 70;
const FUEL_SELECTION_APPLY_Q1_INDEX = 71;
const FUEL_SELECTION_APPLY_Q1_CORRECT_INDEX = 72;
const FUEL_SELECTION_APPLY_Q2_INDEX = 73;
const FUEL_SELECTION_APPLY_Q2_CORRECT_INDEX = 74;
const ASSET_CACHE_VERSION = "atlas-window-crop-1";

function withAssetCacheVersion(src) {
  if (!src) return src;
  return `${src.split("?")[0]}?v=${ASSET_CACHE_VERSION}`;
}

const MAIN_WALL_INDEXES = new Set([
  LOCKED_ROOM_INDEX,
  QUEST_ROOM_INDEX,
  UNLOCKED_AFTER_REMEMBER_INDEX,
  UNDERSTAND_COMPLETE_INDEX,
  BIOENERGETICS_PROGRESS_INDEX,
  ATP_BASICS_HAALOS_NEXT_GLYCOLYTIC_INDEX
]);
const ROOM_PERSPECTIVE_INDEXES = new Set([
  ...MAIN_WALL_INDEXES,
  PORTAL_WALL_LOCKED_INDEX,
  PORTAL_WALL_UNLOCKED_INDEX,
  LEFT_WALL_INDEX
]);
const NEW_HERE_ROOM_INDEXES = new Set([
  LOCKED_ROOM_INDEX,
  PORTAL_WALL_LOCKED_INDEX,
  LEFT_WALL_INDEX,
  UNDERSTAND_COMPLETE_INDEX
]);

// These prerequisites mirror the arrows on the Quest Map. A room unlocks only
// after every room with a path leading into it has been completed.
const MAP_ROOM_PREREQUISITES = new Map([
  ["ATP basics", []],
  ["Phosphagen system", ["ATP basics"]],
  ["Glycolytic system", ["ATP basics"]],
  ["Aerobic system", ["ATP basics"]],
  ["Fuel selection", ["Glycolytic system", "Aerobic system"]],
  ["Cardiac output", ["Aerobic system"]],
  ["Blood flow & pressure", ["Cardiac output"]],
  ["Breathing & gas exchange", ["Aerobic system"]],
  ["VO2max", ["Cardiac output", "Breathing & gas exchange"]],
  ["Muscle structure", ["ATP basics"]],
  ["How muscles contract", ["Muscle structure"]],
  ["Motor units", ["How muscles contract"]],
  ["Fiber types", ["Motor units"]],
  ["Aerobic adaptations", ["VO2max"]],
  ["Strength adaptations", ["Fiber types"]],
  ["Training principles", ["Aerobic adaptations", "Strength adaptations"]],
  ["Recovery, fuel & heat", ["Fuel selection", "Aerobic adaptations"]]
]);

// Progress bars are drawn over the baked screenshot so every room can reflect
// saved activity progress without requiring a separate map image for each state.
const MAP_ROOM_PROGRESS_GEOMETRY = new Map([
  ["Phosphagen system", { left: 8.5, top: 48.15, width: 2.65, height: 1.15 }],
  ["Glycolytic system", { left: 14.88, top: 48.15, width: 2.6, height: 1.15 }],
  ["Aerobic system", { left: 11.05, top: 58.55, width: 2.6, height: 1.15 }],
  ["ATP basics", { left: 21.18, top: 51.5, width: 3.64, height: 1.1 }],
  ["Fuel selection", { left: 19.98, top: 64, width: 2.65, height: 1.15 }],
  ["Cardiac output", { left: 31.45, top: 50.3, width: 2.6, height: 1.15 }],
  ["Blood flow & pressure", { left: 37.82, top: 50.3, width: 2.6, height: 1.15 }],
  ["Breathing & gas exchange", { left: 33.97, top: 60.63, width: 2.65, height: 1.15 }],
  ["VO2max", { left: 45.48, top: 53.72, width: 2.5, height: 1.15 }],
  ["Muscle structure", { left: 54.39, top: 50.3, width: 2.6, height: 1.15 }],
  ["How muscles contract", { left: 60.76, top: 50.3, width: 2.6, height: 1.15 }],
  ["Motor units", { left: 58.21, top: 60.63, width: 2.6, height: 1.15 }],
  ["Fiber types", { left: 68.41, top: 53.72, width: 2.6, height: 1.15 }],
  ["Aerobic adaptations", { left: 77.42, top: 51.82, width: 2.6, height: 1.15 }],
  ["Strength adaptations", { left: 83.68, top: 51.82, width: 2.6, height: 1.15 }],
  ["Training principles", { left: 91.36, top: 51.82, width: 2.6, height: 1.15 }],
  ["Recovery, fuel & heat", { left: 88.25, top: 63.5, width: 3.8, height: 1.25 }]
]);

const MAP_TOPIC_ROOMS = new Map([
  ["Bioenergetics", [
    "ATP basics",
    "Phosphagen system",
    "Glycolytic system",
    "Aerobic system",
    "Fuel selection"
  ]],
  ["Cardio", [
    "Cardiac output",
    "Blood flow & pressure",
    "Breathing & gas exchange",
    "VO2max"
  ]],
  ["Neuromuscular", [
    "Muscle structure",
    "How muscles contract",
    "Motor units",
    "Fiber types"
  ]],
  ["Training", [
    "Aerobic adaptations",
    "Strength adaptations",
    "Training principles",
    "Recovery, fuel & heat"
  ]]
]);

const assets = [
  {
    title: "Course home",
    type: "Visual asset",
    src: "assets/atlas-quest-course-home-ss.png",
    fileName: "atlas-quest-course-home-ss.png",
    alt: "Exercise Physiology course home with an Enter Course button",
    description: "The Exercise Physiology course overview and entry point into the first Quest Room."
  },
  {
    title: "Quest map",
    type: "Visual asset",
    src: "assets/atlas-quest-map-paths-labels-on-ss.png",
    fileName: "atlas-quest-map-paths-labels-on-ss.png",
    alt: "Atlas Quest course map showing bioenergetics, cardio, neuromuscular, and training topics",
    description: "A course-level map organizing learning activities into four topic areas."
  },
  {
    title: "Quest room — locked",
    type: "Visual asset",
    src: "assets/atlas-quest-room-locked-ss.png",
    dismissedSrc: "assets/atlas-quest-room-locked-not-now-ss.png?v=e19897ad",
    clearedGoalSrc: "assets/atlas-quest-room-locked-clear-goal-ss.png?v=7686c2cf",
    fileName: "atlas-quest-room-locked-ss.png",
    alt: "Atlas Quest ATP Basics room with a first-visit tour invitation, locked portals, and a locked Understand activity",
    description: "The first room entered from Course Home. Remember is available, while Understand and both portals remain locked until later progression."
  },
  {
    title: "Quest room",
    type: "Visual asset",
    src: "assets/atlas-quest-ui-ss.png?v=refreshed-room-1",
    fileName: "atlas-quest-ui-ss.png",
    alt: "Atlas Quest bioenergetics learning room with an ATP video, two activity stations, and two topic portals",
    description: "An immersive bioenergetics learning room with video, Remember and Understand activities, and topic portals."
  },
  {
    title: "Quest room tour",
    type: "Visual asset",
    src: "assets/atlas-quest-room-tour-ss.png",
    fileName: "atlas-quest-room-tour-ss.png",
    alt: "Atlas Quest room with the spherical HAaLOS guide and the first room-tour prompt",
    description: "HAaLOS is summoned inside the Quest Room to introduce the learner to the room tour."
  },
  {
    title: "Remember activity",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-activity-ss.png",
    fileName: "atlas-quest-remember-activity-ss.png",
    alt: "Atlas Quest room with the Remember ATP learning activity open in an overlay",
    description: "The Remember activity opens inside the Quest Room with ATP guidance and learner support controls."
  },
  {
    title: "Remember quick check",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-quick-check-ss.png",
    fileName: "atlas-quest-remember-quick-check-ss.png",
    alt: "Atlas Quest room with the first Remember quick-check question open",
    description: "The Remember activity advances to a three-question, no-scoring ATP quick check inside the Quest Room."
  },
  {
    title: "Remember incorrect answer — question 1",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-incorrect-answer-q1-ss.png",
    fileName: "atlas-quest-remember-incorrect-answer-q1-ss.png",
    alt: "Atlas Quest Remember quick check showing a large, long-lasting reserve as an incorrect answer",
    description: "Question 1 marks “a large, long-lasting reserve” as incorrect and highlights that muscles store only a tiny amount of ATP."
  },
  {
    title: "Remember correct answer",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-correct-answer-ss.png",
    fileName: "atlas-quest-remember-correct-answer-ss.png",
    alt: "Atlas Quest Remember quick check showing only a tiny amount selected as the correct answer",
    description: "The first Remember quick-check question confirms that muscles store only a tiny amount of ATP."
  },
  {
    title: "Remember quick check — question 2",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-question-2-ss.png",
    fileName: "atlas-quest-remember-question-2-ss.png",
    alt: "Atlas Quest Remember quick check showing question 2 about what happens when a cell splits ATP",
    description: "The Remember quick check advances to question 2 about the energy released when a cell splits ATP."
  },
  {
    title: "Remember incorrect answer",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-incorrect-answer-ss.png",
    fileName: "atlas-quest-remember-incorrect-answer-ss.png",
    alt: "Atlas Quest Remember quick check showing stores oxygen for later as an incorrect answer",
    description: "Question 2 marks “stores oxygen for later” as incorrect and highlights the correct ATP energy answer."
  },
  {
    title: "Remember quick check — question 3",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-question-3-ss.png?v=8ce8c733",
    fileName: "atlas-quest-remember-question-3-ss.png",
    alt: "Atlas Quest Remember quick check showing question 3 about what ATP stands for",
    description: "The Remember quick check advances to question 3, asking what ATP stands for."
  },
  {
    title: "Remember correct answer — question 3",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-question-3-correct-ss.png?v=1f96d96c",
    fileName: "atlas-quest-remember-question-3-correct-ss.png",
    alt: "Atlas Quest Remember quick check confirming Adenosine triphosphate as the correct answer",
    description: "Question 3 confirms that ATP stands for Adenosine triphosphate."
  },
  {
    title: "Quest room — Understand unlocked",
    type: "Visual asset",
    src: "assets/atlas-quest-room-understand-unlocked-ss.png?v=ae88f90e",
    fileName: "atlas-quest-room-understand-unlocked-ss.png",
    alt: "Atlas Quest ATP Basics room after Remember is complete, with Understand unlocked",
    description: "The ATP Basics room after completing Remember, with one star earned and Understand unlocked."
  },
  {
    title: "Understand activity",
    type: "Visual asset",
    src: "assets/atlas-quest-understand-activity-ss.png?v=9f6d9786",
    fileName: "atlas-quest-understand-activity-ss.png",
    alt: "Atlas Quest Understand activity asking the learner to explain why working muscle must rebuild ATP",
    description: "The unlocked Understand activity prompts the learner to explain ATP rebuilding in their own words."
  },
  {
    title: "Understand activity — response entered",
    type: "Visual asset",
    src: "assets/atlas-quest-understand-response-ss.png?v=d0a3bec2",
    fileName: "atlas-quest-understand-response-ss.png",
    alt: "Atlas Quest Understand activity with a written response explaining why working muscle must rebuild ATP",
    description: "The Understand activity with the learner response entered and ready to submit."
  },
  {
    title: "Quest room — Understand complete",
    type: "Visual asset",
    src: "assets/atlas-quest-room-understand-complete-ss.png?v=c30a7b54",
    fileName: "atlas-quest-room-understand-complete-ss.png",
    alt: "Atlas Quest ATP Basics room after Understand is complete, with two stars earned and portals unlocked",
    description: "The ATP Basics room after completing Understand, with two stars earned and the room portals unlocked."
  },
  {
    title: "Remember correct answer — question 2",
    type: "Visual asset",
    src: "assets/atlas-quest-remember-question-2-correct-ss.png?v=e53c1be3",
    fileName: "atlas-quest-remember-question-2-correct-ss.png",
    alt: "Atlas Quest Remember quick check confirming that splitting ATP releases energy that powers contraction",
    description: "Question 2 confirms that splitting ATP releases the energy that powers muscle contraction."
  },
  {
    title: "HAaLOS guidance",
    type: "Visual asset",
    src: "assets/atlas-quest-haalos-guidance-ss.png",
    fileName: "atlas-quest-haalos-guidance-ss.png",
    alt: "Atlas Quest room with HAaLOS explaining the ATP Basics room in a guidance panel",
    description: "HAaLOS explains what the learner will discover in the ATP Basics Quest Room."
  },
  {
    title: "Ask HAaLOS",
    type: "Visual asset",
    src: "assets/atlas-quest-ask-haalos-ss.png?v=ask-haalos-2",
    fileName: "atlas-quest-ask-haalos-ss.png",
    alt: "Atlas Quest ATP Basics room with HAaLOS answering from the lower-right corner",
    description: "HAaLOS appears in the Quest Room with guidance after the learner selects Ask."
  },
  {
    title: "Bioenergetics progress",
    type: "Visual asset",
    src: "assets/atlas-quest-bioenergetics-progress-ss.png?v=bioenergetics-progress-1",
    fileName: "atlas-quest-bioenergetics-progress-ss.png",
    alt: "Atlas Quest ATP Basics room with Bioenergetics and Metabolism selected as the current four-room goal",
    description: "The ATP Basics room after opening the Bioenergetics course progress view."
  },
  {
    title: "Quest room — portal wall locked",
    type: "Visual asset",
    src: "assets/atlas-quest-portal-wall-locked-ss.png?v=portal-wall-locked-1",
    fileName: "atlas-quest-portal-wall-locked-ss.png",
    alt: "Atlas Quest ATP Basics room turned toward the right wall with three locked system portals",
    description: "The right-wall view before the Phosphagen, Glycolytic, and Aerobic system portals unlock."
  },
  {
    title: "Quest room — portal wall unlocked",
    type: "Visual asset",
    src: "assets/atlas-quest-portal-wall-ss.png?v=portal-wall-unlocked-1",
    fileName: "atlas-quest-portal-wall-ss.png",
    alt: "Atlas Quest ATP Basics room turned toward the right wall to show three unlocked system portals",
    description: "The right-wall view showing the unlocked Phosphagen, Glycolytic, and Aerobic system portals."
  },
  {
    title: "Quest room — left wall",
    type: "Visual asset",
    src: "assets/atlas-quest-left-wall-ss.png?v=left-wall-1",
    fileName: "atlas-quest-left-wall-ss.png",
    alt: "Atlas Quest ATP Basics room turned toward the left wall with a Muscle structure portal",
    description: "The left-wall view of the ATP Basics room, with the main wall available to recenter the view."
  },
  {
    title: "Phosphagen System room",
    type: "Visual asset",
    src: "assets/atlas-quest-phosphagen-system-room-ss.png?v=phosphagen-room-1",
    fileName: "atlas-quest-phosphagen-system-room-ss.png",
    alt: "Atlas Quest Phosphagen System room with a learning video and Remember and Understand activities",
    description: "The Phosphagen System Quest Room reached through the unlocked Phosphagen portal."
  },
  {
    title: "Phosphagen System — right wall",
    type: "Visual asset",
    src: "assets/atlas-quest-phosphagen-system-right-wall-ss.png?v=phosphagen-right-wall-1",
    fileName: "atlas-quest-phosphagen-system-right-wall-ss.png",
    alt: "Atlas Quest Phosphagen System room turned toward the right-side wall",
    description: "The right-wall perspective of the Phosphagen System Quest Room."
  },
  {
    title: "Phosphagen System — left wall",
    type: "Visual asset",
    src: "assets/atlas-quest-phosphagen-system-left-wall-ss.png?v=phosphagen-left-wall-1",
    fileName: "atlas-quest-phosphagen-system-left-wall-ss.png",
    alt: "Atlas Quest Phosphagen System room turned toward the left-side wall with Muscle structure and ATP basics portals",
    description: "The left-wall perspective of the Phosphagen System Quest Room."
  },
  {
    title: "Glycolytic System room",
    type: "Visual asset",
    src: "assets/atlas-quest-glycolytic-system-room-reference.png?v=glycolytic-room-1",
    completedSrc: "assets/atlas-quest-glycolytic-remember-complete.png?v=glycolytic-remember-complete-1",
    fileName: "atlas-quest-glycolytic-system-room-reference.png",
    alt: "Atlas Quest Glycolytic System room with a Running on Glycolysis video and Remember and Understand activities",
    description: "The Glycolytic System Quest Room reached through its unlocked portal or map circle."
  },
  {
    title: "Glycolytic System — right wall",
    type: "Visual asset",
    src: "assets/atlas-quest-glycolytic-right-wall-locked-ss.png?v=glycolytic-right-wall-locked-1",
    completedSrc: "assets/atlas-quest-glycolytic-right-wall-complete-ss.png?v=glycolytic-right-wall-complete-1",
    fileName: "atlas-quest-glycolytic-right-wall-locked-ss.png",
    alt: "Atlas Quest Glycolytic System room turned toward the right wall with the locked Fuel Selection portal",
    completedFileName: "atlas-quest-glycolytic-right-wall-complete-ss.png",
    completedAlt: "Completed Glycolytic System right wall with HAaLOS hovering inside the unlocked Fuel Selection portal",
    description: "The Glycolytic System right wall before Fuel Selection is unlocked.",
    completedDescription: "The completed Glycolytic System room's right wall with HAaLOS indicating Fuel Selection as the next room."
  },
  {
    title: "Aerobic System room",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-room-ss.png?v=aerobic-room-1",
    fileName: "atlas-quest-aerobic-system-room-ss.png",
    alt: "Atlas Quest Aerobic System room on first entry with Remember available, Understand locked, and ATP Basics, Fuel Selection, and Cardiac Output portals",
    description: "The Aerobic System Quest Room when the learner first enters; Remember is available while Understand remains locked."
  },
  {
    title: "Aerobic System — right wall",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-right-wall-ss.png?v=aerobic-right-wall-1",
    fileName: "atlas-quest-aerobic-system-right-wall-ss.png",
    alt: "Atlas Quest Aerobic System room turned toward the right wall with Fuel Selection, Cardiac Output, and Breathing and Gas Exchange portals",
    description: "The right-wall perspective of the Aerobic System room, reached by clicking the right side of the main room view."
  },
  {
    title: "Aerobic System — left wall",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-left-wall-ss.png?v=aerobic-left-wall-1",
    fileName: "atlas-quest-aerobic-system-left-wall-ss.png",
    alt: "Atlas Quest Aerobic System room turned toward the left wall with Muscle Structure and ATP Basics portals",
    description: "The left-wall perspective of the Aerobic System room, reached by clicking the left side of the main room view."
  },
  {
    title: "Aerobic System — Remember activity",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-remember-activity-cropped-ss.png?v=aerobic-remember-cropped-1",
    fileName: "atlas-quest-aerobic-system-remember-activity-cropped-ss.png",
    alt: "Atlas Quest Aerobic System room with the first Remember learning activity open",
    description: "The Aerobic System's first activity explains how oxygen supports sustained ATP production before its quick check."
  },
  {
    title: "Aerobic System — Remember quick check",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-remember-quick-check-ss.png?v=aerobic-quick-check-1",
    fileName: "atlas-quest-aerobic-system-remember-quick-check-ss.png",
    alt: "Atlas Quest Aerobic System room with question one of the Remember quick check open",
    description: "Question one of the Aerobic System's three-question, no-scoring Remember quick check."
  },
  {
    title: "Aerobic System — question 1 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-remember-q1-correct-ss.png?v=aerobic-q1-correct-1",
    fileName: "atlas-quest-aerobic-system-remember-q1-correct-ss.png",
    alt: "Atlas Quest Aerobic System Remember quick check showing Mitochondria as the correct answer to question one",
    description: "The correct-answer feedback for question one of the Aerobic System Remember quick check."
  },
  {
    title: "Aerobic System — Remember question 2",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-remember-question-2-ss.png?v=aerobic-question-2-1",
    fileName: "atlas-quest-aerobic-system-remember-question-2-ss.png",
    alt: "Atlas Quest Aerobic System Remember quick check asking which activity relies most on the aerobic system",
    description: "Question two of the three-question Aerobic System Remember quick check."
  },
  {
    title: "Aerobic System — question 2 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-remember-q2-correct-ss.png?v=aerobic-q2-correct-1",
    fileName: "atlas-quest-aerobic-system-remember-q2-correct-ss.png",
    alt: "Atlas Quest Aerobic System Remember quick check showing a long-distance run as the correct answer to question two",
    description: "The correct-answer feedback for question two of the Aerobic System Remember quick check."
  },
  {
    title: "Aerobic System — Remember question 3",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-remember-question-3-ss.png?v=aerobic-question-3-1",
    fileName: "atlas-quest-aerobic-system-remember-question-3-ss.png",
    alt: "Atlas Quest Aerobic System Remember quick check asking what cells that do extensive aerobic work tend to have many of",
    description: "Question three of the three-question Aerobic System Remember quick check."
  },
  {
    title: "Aerobic System — question 3 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-remember-q3-correct-ss.png?v=aerobic-q3-correct-1",
    fileName: "atlas-quest-aerobic-system-remember-q3-correct-ss.png",
    alt: "Atlas Quest Aerobic System Remember quick check showing Mitochondria as the correct answer to question three",
    description: "The correct-answer feedback for the final question of the Aerobic System Remember quick check."
  },
  {
    title: "Aerobic System — Understand unlocked",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-understand-unlocked-ss.png?v=aerobic-understand-unlocked-1",
    fileName: "atlas-quest-aerobic-system-understand-unlocked-ss.png",
    alt: "Atlas Quest Aerobic System room after Remember is complete with Understand unlocked",
    description: "The Aerobic System room at 50% progress after Remember is complete and Understand becomes available."
  },
  {
    title: "Aerobic System — Understand activity",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-understand-activity-ss.png?v=aerobic-understand-1",
    fileName: "atlas-quest-aerobic-system-understand-activity-ss.png",
    alt: "Atlas Quest Aerobic System Understand activity asking the learner to explain sustained aerobic energy production",
    description: "The Aerobic System Understand activity asks the learner to explain why aerobic metabolism supports long, steady exercise rather than an all-out sprint."
  },
  {
    title: "Aerobic System — Understand response entered",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-understand-response-ss.png?v=aerobic-understand-response-1",
    fileName: "atlas-quest-aerobic-system-understand-response-ss.png",
    alt: "Atlas Quest Aerobic System Understand activity with an answer typed into the response box",
    description: "The Aerobic System Understand activity after the learner clicks the text box and enters a response."
  },
  {
    title: "Aerobic System — complete",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-complete-ss.png?v=aerobic-complete-1",
    fileName: "atlas-quest-aerobic-system-complete-ss.png",
    alt: "Completed Atlas Quest Aerobic System room with Remember and Understand complete and a new portal unlocked",
    description: "The completed Aerobic System room at 100% progress after the Understand response is submitted."
  },
  {
    title: "Aerobic System — completed right wall",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-right-wall-complete-ss.png?v=aerobic-right-complete-1",
    fileName: "atlas-quest-aerobic-system-right-wall-complete-ss.png",
    alt: "Completed Aerobic System room right wall with Cardiac output and Breathing and gas exchange portals unlocked while Fuel selection remains locked",
    description: "The Aerobic System right wall after the room is complete. Cardiac Output and Breathing & Gas Exchange are unlocked; Fuel Selection remains locked until all prerequisites are complete."
  },
  {
    title: "Aerobic System — completed left wall",
    type: "Visual asset",
    src: "assets/atlas-quest-aerobic-system-left-wall-complete-ss.png?v=aerobic-left-complete-2",
    fileName: "atlas-quest-aerobic-system-left-wall-complete-ss.png",
    alt: "Completed Aerobic System room left wall with HAaLOS indicating the ATP basics portal as the next destination",
    description: "The completed Aerobic System left wall with HAaLOS indicating where the learner should go next."
  },
  {
    title: "Fuel Selection — Remember activity",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-activity-ss.png?v=fuel-selection-remember-2",
    fileName: "atlas-quest-fuel-selection-remember-activity-ss.png",
    alt: "Atlas Quest Fuel Selection Remember activity explaining how fat and carbohydrate use changes with exercise intensity",
    description: "The Fuel Selection Remember activity when the learner first enters it."
  },
  {
    title: "ATP Basics — HAaLOS points to Glycolytic System",
    type: "Visual asset",
    src: "assets/atlas-quest-atp-basics-haalos-next-glycolytic-ss.png?v=atp-next-glycolytic-1",
    fileName: "atlas-quest-atp-basics-haalos-next-glycolytic-ss.png",
    alt: "Completed ATP Basics room with HAaLOS hovering between the portals and indicating Glycolytic System as the next room",
    description: "The completed ATP Basics room after returning from Aerobic System, with HAaLOS indicating Glycolytic System next."
  },
  {
    title: "Fuel Selection room",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-room-ss.png?v=fuel-selection-room-1",
    fileName: "atlas-quest-fuel-selection-room-ss.png",
    alt: "Fuel Selection room with Remember available and Understand and Apply locked",
    description: "The Fuel Selection room after both Aerobic System and Glycolytic System are complete."
  },
  {
    title: "Fuel Selection — right wall",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-right-wall-ss.png?v=fuel-selection-right-wall-1",
    fileName: "atlas-quest-fuel-selection-right-wall-ss.png",
    alt: "Fuel Selection room turned toward the right wall with Training Principles and Recovery, Fuel and Heat portals locked",
    description: "The right-wall perspective of the Fuel Selection room on first entry."
  },
  {
    title: "Fuel Selection — left wall",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-left-wall-ss.png?v=fuel-selection-left-wall-1",
    fileName: "atlas-quest-fuel-selection-left-wall-ss.png",
    alt: "Fuel Selection room turned toward the left wall with Muscle Structure, ATP Basics, Aerobic System and Glycolytic System portals",
    description: "The left-wall perspective of the Fuel Selection room on first entry."
  },
  {
    title: "Fuel Selection — Remember question 1",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q1-ss.png?v=fuel-selection-q1-1",
    fileName: "atlas-quest-fuel-selection-remember-q1-ss.png",
    alt: "Fuel Selection Remember quick check question one asking which fuel use rises toward maximal exercise intensity",
    description: "Question one of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — question 1 incorrect",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q1-incorrect-ss.png?v=fuel-selection-q1-incorrect-1",
    fileName: "atlas-quest-fuel-selection-remember-q1-incorrect-ss.png",
    alt: "Fuel Selection Remember question one showing incorrect feedback",
    description: "Incorrect-answer feedback for question one of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — question 1 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q1-correct-ss.png?v=fuel-selection-q1-correct-1",
    fileName: "atlas-quest-fuel-selection-remember-q1-correct-ss.png",
    alt: "Fuel Selection Remember question one showing Carbohydrate as the correct answer",
    description: "Correct-answer feedback for question one of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — Remember question 2",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q2-ss.png?v=fuel-selection-q2-1",
    fileName: "atlas-quest-fuel-selection-remember-q2-ss.png",
    alt: "Fuel Selection Remember quick check question two asking why carbohydrate use rises with exercise intensity",
    description: "Question two of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — question 2 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q2-correct-ss.png?v=fuel-selection-q2-correct-1",
    fileName: "atlas-quest-fuel-selection-remember-q2-correct-ss.png",
    alt: "Fuel Selection Remember question two showing Can be broken down quickly to make ATP fast as the correct answer",
    description: "Correct-answer feedback for question two of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — Remember question 3",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q3-ss.png?v=fuel-selection-q3-1",
    fileName: "atlas-quest-fuel-selection-remember-q3-ss.png",
    alt: "Fuel Selection Remember quick check question three asking which fuel supplies a 20-minute easy walk",
    description: "Question three of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — question 3 incorrect",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q3-incorrect-ss.png?v=fuel-selection-q3-incorrect-1",
    fileName: "atlas-quest-fuel-selection-remember-q3-incorrect-ss.png",
    alt: "Fuel Selection Remember question three showing incorrect feedback after choosing Carbohydrate only",
    description: "Incorrect-answer feedback for question three of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — question 3 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-q3-correct-ss.png?v=fuel-selection-q3-correct-1",
    fileName: "atlas-quest-fuel-selection-remember-q3-correct-ss.png",
    alt: "Fuel Selection Remember question three showing Fat as the correct answer",
    description: "Correct-answer feedback for question three of the Fuel Selection Remember quick check."
  },
  {
    title: "Fuel Selection — Remember complete",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-remember-complete-ss.png?v=fuel-selection-remember-complete-1",
    fileName: "atlas-quest-fuel-selection-remember-complete-ss.png",
    alt: "Fuel Selection room with Remember complete, Understand unlocked, and Apply locked",
    description: "The Fuel Selection room after the Remember activity is finished."
  },
  {
    title: "Fuel Selection — Understand activity",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-activity-ss.png?v=fuel-selection-understand-1",
    fileName: "atlas-quest-fuel-selection-understand-activity-ss.png",
    alt: "Fuel Selection sorting activity with five bulbs and carbohydrate and fat drop boxes",
    description: "The Fuel Selection Understand activity before any bulbs are sorted."
  },
  {
    title: "Fuel Selection — bulb 1 selected",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb1-selected-ss.png?v=fuel-selection-understand-2",
    fileName: "atlas-quest-fuel-selection-understand-bulb1-selected-ss.png",
    alt: "Fuel Selection sorting activity with the first bulb selected",
    description: "The all-out 200 meter sprint bulb is selected first."
  },
  {
    title: "Fuel Selection — bulb 1 sorted",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb1-correct-ss.png?v=fuel-selection-understand-3",
    fileName: "atlas-quest-fuel-selection-understand-bulb1-correct-ss.png",
    alt: "Fuel Selection sorting activity after the first bulb is sorted into mostly carbohydrate",
    description: "The first bulb is correctly sorted into Mostly carbohydrate."
  },
  {
    title: "Fuel Selection — bulb 2 selected",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb2-selected-ss.png?v=fuel-selection-understand-4",
    fileName: "atlas-quest-fuel-selection-understand-bulb2-selected-ss.png",
    alt: "Fuel Selection sorting activity with the second bulb selected",
    description: "The heavy set of six squats bulb is selected second."
  },
  {
    title: "Fuel Selection — bulb 2 sorted",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb2-correct-ss.png?v=fuel-selection-understand-5",
    fileName: "atlas-quest-fuel-selection-understand-bulb2-correct-ss.png",
    alt: "Fuel Selection sorting activity after the second bulb is sorted into mostly carbohydrate",
    description: "The second bulb is correctly sorted into Mostly carbohydrate."
  },
  {
    title: "Fuel Selection — bulb 3 selected",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb3-selected-ss.png?v=fuel-selection-understand-6",
    fileName: "atlas-quest-fuel-selection-understand-bulb3-selected-ss.png",
    alt: "Fuel Selection sorting activity with the third bulb selected",
    description: "The easy two-hour bike ride bulb is selected third."
  },
  {
    title: "Fuel Selection — bulb 3 sorted",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb3-correct-ss.png?v=fuel-selection-understand-7",
    fileName: "atlas-quest-fuel-selection-understand-bulb3-correct-ss.png",
    alt: "Fuel Selection sorting activity after the third bulb is sorted into mostly fat",
    description: "The third bulb is correctly sorted into Mostly fat."
  },
  {
    title: "Fuel Selection — bulb 4 selected",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb4-selected-ss.png?v=fuel-selection-understand-8",
    fileName: "atlas-quest-fuel-selection-understand-bulb4-selected-ss.png",
    alt: "Fuel Selection sorting activity with the fourth bulb selected",
    description: "The sitting quietly at rest bulb is selected fourth."
  },
  {
    title: "Fuel Selection — bulb 4 sorted",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb4-correct-ss.png?v=fuel-selection-understand-9",
    fileName: "atlas-quest-fuel-selection-understand-bulb4-correct-ss.png",
    alt: "Fuel Selection sorting activity after the fourth bulb is sorted into mostly fat",
    description: "The fourth bulb is correctly sorted into Mostly fat."
  },
  {
    title: "Fuel Selection — bulb 5 selected",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-bulb5-selected-ss.png?v=fuel-selection-understand-10",
    fileName: "atlas-quest-fuel-selection-understand-bulb5-selected-ss.png",
    alt: "Fuel Selection sorting activity with the final bulb selected",
    description: "The final sprint to the finish line bulb is selected last."
  },
  {
    title: "Fuel Selection — Understand solved",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-solved-ss.png?v=fuel-selection-understand-11",
    fileName: "atlas-quest-fuel-selection-understand-solved-ss.png",
    alt: "Fuel Selection sorting activity solved with a Done button",
    description: "All five bulbs are sorted correctly and the Understand activity is complete."
  },
  {
    title: "Fuel Selection — Understand complete",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-understand-complete-ss.png?v=fuel-selection-understand-complete-1",
    fileName: "atlas-quest-fuel-selection-understand-complete-ss.png",
    alt: "Fuel Selection room with Remember and Understand complete and Apply unlocked",
    description: "The Fuel Selection room after the Understand activity is finished."
  },
  {
    title: "Fuel Selection — Apply scenario 1",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-apply-q1-ss.png?v=fuel-selection-apply-1",
    fileName: "atlas-quest-fuel-selection-apply-q1-ss.png",
    alt: "Fuel Selection Apply scenario one asking which fuel dominates a steep near-maximal cycling effort",
    description: "Scenario one of four in the Fuel Selection Apply activity."
  },
  {
    title: "Fuel Selection — Apply scenario 1 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-apply-q1-correct-ss.png?v=fuel-selection-apply-2",
    fileName: "atlas-quest-fuel-selection-apply-q1-correct-ss.png",
    alt: "Fuel Selection Apply scenario one showing Mostly carbohydrate as correct",
    description: "Correct-answer feedback for scenario one of the Fuel Selection Apply activity."
  },
  {
    title: "Fuel Selection — Apply scenario 2",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-apply-q2-ss.png?v=fuel-selection-apply-3",
    fileName: "atlas-quest-fuel-selection-apply-q2-ss.png",
    alt: "Fuel Selection Apply scenario two comparing walking and hard intervals",
    description: "Scenario two of four in the Fuel Selection Apply activity."
  },
  {
    title: "Fuel Selection — Apply scenario 2 correct",
    type: "Visual asset",
    src: "assets/atlas-quest-fuel-selection-apply-q2-correct-ss.png?v=fuel-selection-apply-4",
    fileName: "atlas-quest-fuel-selection-apply-q2-correct-ss.png",
    alt: "Fuel Selection Apply scenario two showing the interval athlete as correct",
    description: "Correct-answer feedback for scenario two of the Fuel Selection Apply activity."
  }
];

const mainImage = document.querySelector("#mainImage");
const imageCanvas = document.querySelector("#imageCanvas");
const imageFrame = document.querySelector("#imageFrame");
const title = document.querySelector("#assetTitle");
const type = document.querySelector("#assetType");
const description = document.querySelector("#assetDescription");
const fileName = document.querySelector("#fileName");
const count = document.querySelector("#assetCount");
const cards = [...document.querySelectorAll(".asset-card")];
document.querySelectorAll(".thumbnail img").forEach((image) => {
  image.src = withAssetCacheVersion(image.getAttribute("src"));
});
const muteButton = document.querySelector("#muteButton");
const fitButton = document.querySelector("#fitButton");
const mapCircleInAudio = document.querySelector("#mapCircleInAudio");
const mapCircleOutAudio = document.querySelector("#mapCircleOutAudio");
const mapHotspots = [...document.querySelectorAll(".map-hotspot")];
const smallMapHoverAudio = document.querySelector("#smallMapHoverAudio");
const smallMapHotspotContainer = document.querySelector(".small-map-hotspots");
const smallMapHotspots = [...document.querySelectorAll(".small-map-hotspot")];
const mapTopicProgressRings = [...document.querySelectorAll(".map-topic-ring-progress")];
const mapRoomProgressBars = new Map();
MAP_ROOM_PROGRESS_GEOMETRY.forEach((geometry, roomName) => {
  const progressBar = document.createElement("span");
  const progressFill = document.createElement("i");
  progressBar.className = "map-room-progress";
  progressBar.dataset.room = roomName;
  progressBar.setAttribute("role", "progressbar");
  progressBar.setAttribute("aria-label", `${roomName} progress`);
  progressBar.setAttribute("aria-valuemin", "0");
  progressBar.setAttribute("aria-valuemax", "100");
  progressBar.style.left = `${geometry.left}%`;
  progressBar.style.top = `${geometry.top}%`;
  progressBar.style.width = `${geometry.width}%`;
  progressBar.style.height = `${geometry.height}%`;
  progressFill.setAttribute("aria-hidden", "true");
  progressBar.append(progressFill);
  smallMapHotspotContainer.append(progressBar);
  mapRoomProgressBars.set(roomName, progressBar);
});
const mapBottomActivityHotspots = [...document.querySelectorAll(".map-bottom-activity-hotspot")];
const portalHoverAudio = document.querySelector("#portalHoverAudio");
const portalHotspots = [...document.querySelectorAll(".portal-hotspot")];
const phosphagenAtpPortalHotspot = document.querySelector(".phosphagen-atp-portal-hotspot");
const glycolyticFuelPortalHotspot = document.querySelector(".glycolytic-fuel-portal-hotspot");
const aerobicLinkedPortalHotspots = [...document.querySelectorAll(".aerobic-linked-portal-hotspot")];
const portalTraverseAudio = document.querySelector("#portalTraverseAudio");
const lockedPortalAudio = document.querySelector("#lockedPortalAudio");
const activityOpenAudio = document.querySelector("#activityOpenAudio");
const lockedActivityAudio = document.querySelector("#lockedActivityAudio");
const activityHoverAudio = document.querySelector("#activityHoverAudio");
const activityHoverOutAudio = document.querySelector("#activityHoverOutAudio");
const activityHotspots = [...document.querySelectorAll(".activity-hotspot, .bottom-activity-hotspot")];
const rememberActivityHotspot = document.querySelector(".remember-activity");
const understandActivityHotspot = document.querySelector(".understand-activity");
const bottomRememberHotspot = document.querySelector(".bottom-remember-hotspot");
const bottomUnderstandHotspot = document.querySelector(".bottom-understand-hotspot");
const mapOpenAudio = document.querySelector("#mapOpenAudio");
const mapOpenHotspot = document.querySelector(".map-open-hotspot");
const mapCloseAudio = document.querySelector("#mapCloseAudio");
const mapCloseHotspot = document.querySelector(".map-close-hotspot");
const ascendingClickAudio = document.querySelector("#ascendingClickAudio");
const descendingClickAudio = document.querySelector("#descendingClickAudio");
const haalosSummonAudio = document.querySelector("#haalosSummonAudio");
const haalosDismissAudio = document.querySelector("#haalosDismissAudio");
const haalosHoverAudio2 = document.querySelector("#haalosHoverAudio2");
const haalosHoverAudio3 = document.querySelector("#haalosHoverAudio3");
const roomHaalosHotspots = [...document.querySelectorAll(".room-haalos-hotspot")];
const tourHaalosHotspot = document.querySelector(".tour-haalos-hotspot");
const haalosFrameRobotHotspot = document.querySelector(".haalos-frame-robot-hotspot");
const allHaalosHotspots = [...roomHaalosHotspots, tourHaalosHotspot, haalosFrameRobotHotspot];
const showPathsToggleHotspot = document.querySelector(".show-paths-toggle-hotspot");
const showLabelsToggleHotspot = document.querySelector(".show-labels-toggle-hotspot");
const enterCourseHotspot = document.querySelector(".enter-course-hotspot");
const superUserHoverHotspot = document.querySelector(".super-user-hover-hotspot");
const resetProgressHoverHotspot = document.querySelector(".reset-progress-hover-hotspot");
const lockedNotNowHotspot = document.querySelector(".locked-not-now-hotspot");
const lockedStartTourHotspot = document.querySelector(".locked-start-tour-hotspot");
const clearGoalHotspot = document.querySelector(".clear-goal-hotspot");
const roomExitHotspot = document.querySelector(".room-exit-hotspot");
const roomProgressHoverHotspot = document.querySelector(".room-progress-hover-hotspot");
const roomRightWallHotspot = document.querySelector(".room-right-wall-hotspot");
const roomLeftWallHotspot = document.querySelector(".room-left-wall-hotspot");
const sideMainWallHotspot = document.querySelector(".side-main-wall-hotspot");
const roomAskHoverHotspot = document.querySelector(".room-ask-hover-hotspot");
const phosphagenGuidancePanel = document.querySelector("#phosphagenGuidancePanel");
const roomGuidanceCopy = phosphagenGuidancePanel.querySelector("p");
const phosphagenActivityOverlay = document.querySelector("#phosphagenActivityOverlay");
const glycolyticActivityOverlay = document.querySelector("#glycolyticActivityOverlay");
const glycolyticActivityCloseButton = document.querySelector(".glycolytic-activity-close");
const glycolyticHelpDismissButton = document.querySelector(".glycolytic-help-dismiss");
const glycolyticQuickCheckButton = document.querySelector(".glycolytic-quick-check-button");
const glycolyticQuickCheckCloseButton = document.querySelector(".glycolytic-quick-check-close");
const glycolyticQuestionOneCorrectOption = document.querySelector(".glycolytic-question-one-correct-option");
const glycolyticQuestionOneOptions = [
  ...glycolyticActivityOverlay.querySelectorAll(".glycolytic-quick-check-card .phosphagen-answer-option")
];
const glycolyticQuestionOneNextButton = document.querySelector(".glycolytic-question-one-next");
const glycolyticQuestionTwoCloseButton = document.querySelector(".glycolytic-question-two-close");
const glycolyticQuestionTwoCorrectOption = document.querySelector(".glycolytic-question-two-correct-option");
const glycolyticQuestionTwoOptions = [
  ...glycolyticActivityOverlay.querySelectorAll(".glycolytic-question-two-card .phosphagen-answer-option")
];
const glycolyticQuestionTwoNextButton = document.querySelector(".glycolytic-question-two-next");
const glycolyticQuestionThreeCloseButton = document.querySelector(".glycolytic-question-three-close");
const glycolyticQuestionThreeCorrectOption = document.querySelector(".glycolytic-question-three-correct-option");
const glycolyticQuestionThreeOptions = [
  ...glycolyticActivityOverlay.querySelectorAll(".glycolytic-question-three-card .phosphagen-answer-option")
];
const glycolyticQuestionThreeFinishButton = document.querySelector(".glycolytic-question-three-finish");
const glycolyticUnderstandCloseButton = document.querySelector(".glycolytic-understand-close");
const glycolyticUnderstandCorrectOption = document.querySelector(".glycolytic-understand-correct-option");
const glycolyticUnderstandOptions = [
  ...glycolyticActivityOverlay.querySelectorAll(".glycolytic-understand-card .phosphagen-answer-option")
];
const glycolyticUnderstandNextButton = document.querySelector(".glycolytic-understand-next");
const glycolyticUnderstandTwoCloseButton = document.querySelector(".glycolytic-understand-two-close");
const glycolyticUnderstandTwoCorrectOption = document.querySelector(".glycolytic-understand-two-correct-option");
const glycolyticUnderstandTwoOptions = [
  ...glycolyticActivityOverlay.querySelectorAll(".glycolytic-understand-two-card .phosphagen-answer-option")
];
const glycolyticUnderstandFinishButton = document.querySelector(".glycolytic-understand-finish");
const phosphagenActivityCloseButton = document.querySelector(".phosphagen-activity-close");
const phosphagenHelpDismissButton = document.querySelector(".phosphagen-help-dismiss");
const phosphagenQuickCheckButton = document.querySelector(".phosphagen-quick-check-button");
const phosphagenQuickCheckCloseButton = document.querySelector(".phosphagen-quick-check-close");
const phosphagenCorrectOption = document.querySelector(".phosphagen-correct-option");
const phosphagenNextQuestionButton = document.querySelector(".phosphagen-next-question");
const phosphagenQuestionTwoCloseButton = document.querySelector(".phosphagen-question-two-close");
const phosphagenQuestionTwoCorrectOption = document.querySelector(".phosphagen-question-two-correct-option");
const phosphagenFinishCheckButton = document.querySelector(".phosphagen-finish-check");
const phosphagenUnderstandCloseButton = document.querySelector(".phosphagen-understand-close");
const phosphagenUnderstandCorrectOption = document.querySelector(".phosphagen-understand-correct-option");
const phosphagenUnderstandNextButton = document.querySelector(".phosphagen-understand-next");
const phosphagenUnderstandTwoCloseButton = document.querySelector(".phosphagen-understand-two-close");
const phosphagenUnderstandTwoCorrectOption = document.querySelector(".phosphagen-understand-two-correct-option");
const phosphagenUnderstandFinishButton = document.querySelector(".phosphagen-understand-finish");
const tourOpenHotspot = document.querySelector(".tour-open-hotspot");
const tourExitHotspot = document.querySelector(".tour-exit-hotspot");
const tourSkipHotspot = document.querySelector(".tour-skip-hotspot");
const haalosFrameExitHotspot = document.querySelector(".haalos-frame-exit-hotspot");
const haalosFrameTourHotspot = document.querySelector(".haalos-frame-tour-hotspot");
const haalosFrameMapHotspot = document.querySelector(".haalos-frame-map-hotspot");
const rememberFrameExitHotspot = document.querySelector(".remember-frame-exit-hotspot");
const rememberFrameCloseHotspot = document.querySelector(".remember-frame-close-hotspot");
const rememberQuickCheckHotspot = document.querySelector(".remember-quick-check-hotspot");
const aerobicRememberExitHotspot = document.querySelector(".aerobic-remember-exit-hotspot");
const aerobicRememberCloseHotspot = document.querySelector(".aerobic-remember-close-hotspot");
const aerobicRememberQuickCheckHotspot = document.querySelector(".aerobic-remember-quick-check-hotspot");
const aerobicQuestionOneCorrectHotspot = document.querySelector(".aerobic-q1-correct-answer-hotspot");
const aerobicQuestionOneNextHotspot = document.querySelector(".aerobic-q1-next-hotspot");
const aerobicQuestionTwoCorrectHotspot = document.querySelector(".aerobic-q2-correct-answer-hotspot");
const aerobicQuestionTwoNextHotspot = document.querySelector(".aerobic-q2-next-hotspot");
const aerobicQuestionThreeCorrectHotspot = document.querySelector(".aerobic-q3-correct-answer-hotspot");
const aerobicQuestionThreeFinishHotspot = document.querySelector(".aerobic-q3-finish-hotspot");
const aerobicUnderstandExitHotspot = document.querySelector(".aerobic-understand-exit-hotspot");
const aerobicUnderstandCloseHotspot = document.querySelector(".aerobic-understand-close-hotspot");
const aerobicUnderstandStopHotspot = document.querySelector(".aerobic-understand-stop-hotspot");
const aerobicUnderstandTextboxHotspot = document.querySelector(".aerobic-understand-textbox-hotspot");
const aerobicUnderstandSubmitHotspot = document.querySelector(".aerobic-understand-submit-hotspot");
const fuelSelectionRememberExitHotspot = document.querySelector(".fuel-selection-remember-exit-hotspot");
const fuelSelectionRememberCloseHotspot = document.querySelector(".fuel-selection-remember-close-hotspot");
const fuelSelectionRememberQuickCheckHotspot = document.querySelector(".fuel-selection-remember-quick-check-hotspot");
const fuelSelectionQuestionOneCorrectHotspot = document.querySelector(".fuel-selection-q1-correct-hotspot");
const fuelSelectionQuestionOneIncorrectHotspots = [...document.querySelectorAll(".fuel-selection-q1-incorrect-hotspot")];
const fuelSelectionQuestionOneNextHotspot = document.querySelector(".fuel-selection-q1-next-hotspot");
const fuelSelectionQuestionTwoCorrectHotspot = document.querySelector(".fuel-selection-q2-correct-hotspot");
const fuelSelectionQuestionTwoNextHotspot = document.querySelector(".fuel-selection-q2-next-hotspot");
const fuelSelectionQuestionThreeIncorrectHotspots = [...document.querySelectorAll(".fuel-selection-q3-incorrect-hotspot")];
const fuelSelectionQuestionThreeCorrectHotspot = document.querySelector(".fuel-selection-q3-correct-hotspot");
const fuelSelectionQuestionThreeFinishHotspot = document.querySelector(".fuel-selection-q3-finish-hotspot");
const fuelSelectionUnderstandCloseHotspot = document.querySelector(".fuel-selection-understand-close-hotspot");
const fuelSelectionBulbHotspots = [...document.querySelectorAll(".fuel-selection-bulb-hotspot")];
const fuelSelectionCarbBoxHotspot = document.querySelector(".fuel-selection-carb-box-hotspot");
const fuelSelectionFatBoxHotspot = document.querySelector(".fuel-selection-fat-box-hotspot");
const fuelSelectionUnderstandDoneHotspot = document.querySelector(".fuel-selection-understand-done-hotspot");
const fuelSelectionApplyRoomHotspot = document.querySelector(".fuel-selection-apply-room-hotspot");
const fuelSelectionApplyCloseHotspot = document.querySelector(".fuel-selection-apply-close-hotspot");
const fuelSelectionApplyQuestionOneWrongHotspot = document.querySelector(".fuel-selection-apply-q1-wrong-hotspot");
const fuelSelectionApplyQuestionOneCorrectHotspot = document.querySelector(".fuel-selection-apply-q1-correct-hotspot");
const fuelSelectionApplyQuestionOneNextHotspot = document.querySelector(".fuel-selection-apply-q1-next-hotspot");
const fuelSelectionApplyQuestionTwoWrongHotspots = [...document.querySelectorAll(".fuel-selection-apply-q2-wrong-hotspot")];
const fuelSelectionApplyQuestionTwoCorrectHotspot = document.querySelector(".fuel-selection-apply-q2-correct-hotspot");
const quickCheckExitHotspot = document.querySelector(".quick-check-exit-hotspot");
const quickCheckCloseHotspot = document.querySelector(".quick-check-close-hotspot");
const longLastingReserveAnswerHotspot = document.querySelector(".long-lasting-reserve-answer-hotspot");
const tinyAmountAnswerHotspot = document.querySelector(".tiny-amount-answer-hotspot");
const questionOneIncorrectExitHotspot = document.querySelector(".question-one-incorrect-exit-hotspot");
const questionOneIncorrectCloseHotspot = document.querySelector(".question-one-incorrect-close-hotspot");
const questionOneIncorrectNextHotspot = document.querySelector(".question-one-incorrect-next-hotspot");
const correctAnswerExitHotspot = document.querySelector(".correct-answer-exit-hotspot");
const correctAnswerCloseHotspot = document.querySelector(".correct-answer-close-hotspot");
const correctAnswerNextHotspot = document.querySelector(".correct-answer-next-hotspot");
const questionTwoExitHotspot = document.querySelector(".question-two-exit-hotspot");
const questionTwoCloseHotspot = document.querySelector(".question-two-close-hotspot");
const storesOxygenAnswerHotspot = document.querySelector(".stores-oxygen-answer-hotspot");
const releasesEnergyAnswerHotspot = document.querySelector(".releases-energy-answer-hotspot");
const incorrectAnswerExitHotspot = document.querySelector(".incorrect-answer-exit-hotspot");
const incorrectAnswerCloseHotspot = document.querySelector(".incorrect-answer-close-hotspot");
const incorrectAnswerNextHotspot = document.querySelector(".incorrect-answer-next-hotspot");
const questionThreeExitHotspot = document.querySelector(".question-three-exit-hotspot");
const questionThreeCloseHotspot = document.querySelector(".question-three-close-hotspot");
const adenosineTriphosphateAnswerHotspot = document.querySelector(".adenosine-triphosphate-answer-hotspot");
const questionThreeCorrectExitHotspot = document.querySelector(".question-three-correct-exit-hotspot");
const questionThreeCorrectCloseHotspot = document.querySelector(".question-three-correct-close-hotspot");
const questionThreeFinishHotspot = document.querySelector(".question-three-finish-hotspot");
const understandFrameExitHotspot = document.querySelector(".understand-frame-exit-hotspot");
const understandFrameCloseHotspot = document.querySelector(".understand-frame-close-hotspot");
const understandStopHotspot = document.querySelector(".understand-stop-hotspot");
const understandTextboxHotspot = document.querySelector(".understand-textbox-hotspot");
const understandResponseExitHotspot = document.querySelector(".understand-response-exit-hotspot");
const understandResponseCloseHotspot = document.querySelector(".understand-response-close-hotspot");
const understandResponseStopHotspot = document.querySelector(".understand-response-stop-hotspot");
const understandSubmitHotspot = document.querySelector(".understand-submit-hotspot");
const questionTwoCorrectExitHotspot = document.querySelector(".question-two-correct-exit-hotspot");
const questionTwoCorrectCloseHotspot = document.querySelector(".question-two-correct-close-hotspot");
const questionTwoCorrectNextHotspot = document.querySelector(".question-two-correct-next-hotspot");
const incorrectAnswerAudio = document.querySelector("#incorrectAnswerAudio");
const correctAnswerAudio = document.querySelector("#correctAnswerAudio");
const finishActivityAudio = document.querySelector("#finishActivityAudio");
const ambientLayer1Audio = document.querySelector("#ambientLayer1Audio");
const roomBeepsAudio = document.querySelector("#roomBeepsAudio");
const portalFadeDuration = 1000;
const portalFadeInterval = 16;
const ambientFadeOutDuration = 650;
const ambientFadeInDuration = 1100;
const ambientFadePause = 220;
const courseExitFadeDuration = 900;
const roomBeepsVolume = 0.6;
const roomBeepsStartDelay = 10000;
const askResponseDuration = 5000;
const COURSE_PROGRESS_STORAGE_KEY = "atlasQuest.courseProgress.v1";
const MASTER_AUDIO_MUTE_STORAGE_KEY = "atlasQuest.masterAudioMuted.v1";
let masterAudioMuted = loadMasterAudioMutePreference();
let currentIndex = 0;
let activeRoomIndex = LOCKED_ROOM_INDEX;
let mapReturnIndex = LOCKED_ROOM_INDEX;
const dismissedNewHerePrompts = new Set();
let goalCleared = false;
let portalFadeTimer = null;
let portalUnlockTimer = null;
let ambienceActive = false;
let ambienceTransitionId = 0;
let ambientFadeFrame = null;
let ambientFadeReturnTimer = null;
let courseExitFadeFrame = null;
let courseExitStopTimer = null;
let roomBeepsStartTimer = null;
let roomBeepsPrimedMuted = false;
let askResponseReturnTimer = null;
let mapPathsVisible = true;
let mapLabelsVisible = true;
let haalosHoverCount = 0;
let phosphagenGuidanceVisible = false;
let phosphagenActivityVisible = false;
let glycolyticActivityVisible = false;
let atpBasicsRememberComplete = false;
let atpBasicsComplete = false;
let glycolyticRememberComplete = false;
let glycolyticUnderstandComplete = false;
let aerobicRememberComplete = false;
let aerobicSystemComplete = false;
let fuelSelectionRememberComplete = false;
let fuelSelectionUnderstandComplete = false;
let fuelSelectionApplyComplete = false;
let phosphagenRememberComplete = false;
let phosphagenUnderstandComplete = false;
let recoveryFuelHeatRememberComplete = false;
let recoveryFuelHeatComplete = false;
const activityHoverOutSuppression = new WeakMap();
const haalosReactionTimers = new WeakMap();
const activeHaalosHoverAudio = new Set();
const haalosFrameHoverSuppressionDuration = 400;
let haalosFrameHoverSuppressed = false;
let haalosFrameHoverSuppressionTimer = null;

function saveCourseProgress() {
  const progress = {
    atpBasicsRememberComplete,
    atpBasicsComplete,
    phosphagenRememberComplete,
    phosphagenUnderstandComplete,
    glycolyticRememberComplete,
    glycolyticUnderstandComplete,
    aerobicRememberComplete,
    aerobicSystemComplete,
    fuelSelectionRememberComplete,
    fuelSelectionUnderstandComplete,
    fuelSelectionApplyComplete,
    recoveryFuelHeatRememberComplete,
    recoveryFuelHeatComplete
  };

  try {
    window.localStorage.setItem(COURSE_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Progress still works for this session when browser storage is unavailable.
  }
}

function loadCourseProgress() {
  try {
    const savedProgress = JSON.parse(
      window.localStorage.getItem(COURSE_PROGRESS_STORAGE_KEY) ?? "null"
    );
    if (!savedProgress || typeof savedProgress !== "object") return;

    atpBasicsRememberComplete = savedProgress.atpBasicsRememberComplete === true;
    atpBasicsComplete = savedProgress.atpBasicsComplete === true;
    phosphagenRememberComplete = savedProgress.phosphagenRememberComplete === true;
    phosphagenUnderstandComplete = savedProgress.phosphagenUnderstandComplete === true;
    glycolyticRememberComplete = savedProgress.glycolyticRememberComplete === true;
    glycolyticUnderstandComplete = savedProgress.glycolyticUnderstandComplete === true;
    aerobicRememberComplete = savedProgress.aerobicRememberComplete === true;
    aerobicSystemComplete = savedProgress.aerobicSystemComplete === true;
    fuelSelectionRememberComplete = savedProgress.fuelSelectionRememberComplete === true;
    fuelSelectionUnderstandComplete = savedProgress.fuelSelectionUnderstandComplete === true;
    fuelSelectionApplyComplete = savedProgress.fuelSelectionApplyComplete === true;
    recoveryFuelHeatRememberComplete = savedProgress.recoveryFuelHeatRememberComplete === true;
    recoveryFuelHeatComplete = savedProgress.recoveryFuelHeatComplete === true;

    if (atpBasicsComplete) atpBasicsRememberComplete = true;
    if (phosphagenUnderstandComplete) phosphagenRememberComplete = true;
    if (glycolyticUnderstandComplete) glycolyticRememberComplete = true;
    if (aerobicSystemComplete) aerobicRememberComplete = true;
    if (fuelSelectionApplyComplete) fuelSelectionUnderstandComplete = true;
    if (fuelSelectionUnderstandComplete) fuelSelectionRememberComplete = true;
    if (recoveryFuelHeatComplete) recoveryFuelHeatRememberComplete = true;

    activeRoomIndex = atpBasicsComplete
      ? UNDERSTAND_COMPLETE_INDEX
      : atpBasicsRememberComplete
        ? UNLOCKED_AFTER_REMEMBER_INDEX
        : LOCKED_ROOM_INDEX;
    mapReturnIndex = activeRoomIndex;
  } catch {
    // Ignore missing or malformed saved data and begin with fresh progress.
  }
}

function clearSavedCourseProgress() {
  try {
    window.localStorage.removeItem(COURSE_PROGRESS_STORAGE_KEY);
  } catch {
    // The in-memory reset below still succeeds when storage is unavailable.
  }
}

function loadMasterAudioMutePreference() {
  try {
    return window.localStorage.getItem(MASTER_AUDIO_MUTE_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function saveMasterAudioMutePreference() {
  try {
    window.localStorage.setItem(MASTER_AUDIO_MUTE_STORAGE_KEY, String(masterAudioMuted));
  } catch {
    // The master mute still works for this session when browser storage is unavailable.
  }
}

function syncRoomBeepsMute() {
  roomBeepsAudio.muted = masterAudioMuted || roomBeepsPrimedMuted;
}

function updateMuteButton() {
  muteButton.setAttribute("aria-pressed", String(masterAudioMuted));
  const actionLabel = masterAudioMuted
    ? "Turn on all Atlas Quest audio"
    : "Mute all Atlas Quest audio";
  muteButton.setAttribute("aria-label", actionLabel);
  muteButton.title = actionLabel;
  muteButton.querySelector(".audio-toggle-icon").textContent = masterAudioMuted ? "🔇" : "🔊";
  muteButton.querySelector(".button-label").textContent = masterAudioMuted ? "Audio muted" : "Mute audio";
}

function setMasterAudioMuted(isMuted, persist = true) {
  masterAudioMuted = Boolean(isMuted);
  document.querySelectorAll("audio, video").forEach((media) => {
    media.muted = masterAudioMuted || (media === roomBeepsAudio && roomBeepsPrimedMuted);
  });
  updateMuteButton();
  if (persist) saveMasterAudioMutePreference();
}

loadCourseProgress();
setMasterAudioMuted(masterAudioMuted, false);

roomBeepsAudio.volume = roomBeepsVolume;
portalHoverAudio.volume = 1;

function playAudioToEnd(audioTemplate, volume = 1) {
  const audio = audioTemplate.cloneNode(true);
  audio.removeAttribute("id");
  audio.volume = volume;
  audio.muted = masterAudioMuted;
  audio.currentTime = 0;
  document.body.append(audio);
  audio.addEventListener("ended", () => audio.remove(), { once: true });
  audio.play().catch(() => {
    audio.remove();
    // Browsers can withhold audio until the user has interacted with the page.
  });
  return audio;
}

function isSmallMapTransition(event) {
  return event.relatedTarget?.classList?.contains("small-map-hotspot");
}

function playMapCircleInSound(event) {
  if (isSmallMapTransition(event)) return;
  playAudioToEnd(mapCircleInAudio);
}

function playMapCircleOutSound(event) {
  if (isSmallMapTransition(event)) return;
  playAudioToEnd(mapCircleOutAudio);
}

function playSmallMapHoverSound() {
  playAudioToEnd(smallMapHoverAudio);
}

function playActivityHoverInSound() {
  playAudioToEnd(activityHoverAudio);
}

function playActivityHoverOutSound() {
  playAudioToEnd(activityHoverOutAudio);
}

function playActivityClickSound() {
  playActivityOpenSound();
}

function playLockedActivitySound() {
  playAudioToEnd(lockedActivityAudio);
}

function isLockedActivityHotspot(activity) {
  const isFuelSelectionRememberLocked = (
    isFuelSelectionMainWall()
    && !fuelSelectionRememberComplete
    && !isFuelSelectionPortalUnlocked()
    && (activity === rememberActivityHotspot || activity === bottomRememberHotspot)
  );
  if (isFuelSelectionRememberLocked) return true;

  return (
    currentIndex === LOCKED_ROOM_INDEX
    || currentIndex === PORTAL_WALL_LOCKED_INDEX
    || currentIndex === LEFT_WALL_INDEX
    || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_ROOM_INDEX)
    || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_RIGHT_WALL_INDEX)
    || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_LEFT_WALL_INDEX)
    || (!glycolyticRememberComplete && currentIndex === GLYCOLYTIC_ROOM_INDEX)
    || (!aerobicRememberComplete && isAerobicRoomView(currentIndex))
    || (!fuelSelectionRememberComplete && isFuelSelectionRoomView(currentIndex))
  ) && activity === understandActivityHotspot;
}

function isPhosphagenRoomView(index = currentIndex) {
  return index === PHOSPHAGEN_ROOM_INDEX
    || index === PHOSPHAGEN_RIGHT_WALL_INDEX
    || index === PHOSPHAGEN_LEFT_WALL_INDEX;
}

function isGlycolyticRoomView(index = currentIndex) {
  return index === GLYCOLYTIC_ROOM_INDEX || index === GLYCOLYTIC_RIGHT_WALL_INDEX;
}

function isFuelSelectionRoomView(index = currentIndex) {
  return index === FUEL_SELECTION_ROOM_INDEX
    || index === FUEL_SELECTION_RIGHT_WALL_INDEX
    || index === FUEL_SELECTION_LEFT_WALL_INDEX
    || index === FUEL_SELECTION_REMEMBER_COMPLETE_INDEX
    || index === FUEL_SELECTION_UNDERSTAND_COMPLETE_INDEX;
}

function isFuelSelectionMainWall(index = currentIndex) {
  return index === FUEL_SELECTION_ROOM_INDEX
    || index === FUEL_SELECTION_REMEMBER_COMPLETE_INDEX
    || index === FUEL_SELECTION_UNDERSTAND_COMPLETE_INDEX;
}

function getMapCurrentRoomName(index = mapReturnIndex) {
  if (isFuelSelectionRoomView(index)) return "Fuel selection";
  if (isAerobicRoomView(index)) return "Aerobic system";
  if (isGlycolyticRoomView(index)) return "Glycolytic system";
  if (isPhosphagenRoomView(index)) return "Phosphagen system";
  if (ROOM_PERSPECTIVE_INDEXES.has(index) || index === ATP_BASICS_HAALOS_NEXT_GLYCOLYTIC_INDEX) {
    return "ATP basics";
  }
  return "";
}

function getFuelSelectionMainRoomIndex() {
  if (fuelSelectionUnderstandComplete) return FUEL_SELECTION_UNDERSTAND_COMPLETE_INDEX;
  if (fuelSelectionRememberComplete) return FUEL_SELECTION_REMEMBER_COMPLETE_INDEX;
  return FUEL_SELECTION_ROOM_INDEX;
}

function isAerobicRoomView(index = currentIndex) {
  return index === AEROBIC_ROOM_INDEX
    || index === AEROBIC_RIGHT_WALL_INDEX
    || index === AEROBIC_LEFT_WALL_INDEX
    || index === AEROBIC_UNDERSTAND_UNLOCKED_INDEX
    || index === AEROBIC_COMPLETE_INDEX
    || index === AEROBIC_RIGHT_WALL_COMPLETE_INDEX
    || index === AEROBIC_LEFT_WALL_COMPLETE_INDEX;
}

function isAerobicCompleteView(index = currentIndex) {
  return aerobicSystemComplete
    || index === AEROBIC_COMPLETE_INDEX
    || index === AEROBIC_RIGHT_WALL_COMPLETE_INDEX
    || index === AEROBIC_LEFT_WALL_COMPLETE_INDEX;
}

function getAerobicMainRoomIndex() {
  if (isAerobicCompleteView()) return AEROBIC_COMPLETE_INDEX;
  return aerobicRememberComplete ? AEROBIC_UNDERSTAND_UNLOCKED_INDEX : AEROBIC_ROOM_INDEX;
}

function isAerobicMainWall(index = currentIndex) {
  return index === AEROBIC_ROOM_INDEX
    || index === AEROBIC_UNDERSTAND_UNLOCKED_INDEX
    || index === AEROBIC_COMPLETE_INDEX;
}

function isAtpBasicsComplete() {
  return atpBasicsComplete
    || activeRoomIndex === QUEST_ROOM_INDEX
    || activeRoomIndex === UNDERSTAND_COMPLETE_INDEX
    || activeRoomIndex === BIOENERGETICS_PROGRESS_INDEX;
}

function getAtpBasicsProgressPercent() {
  if (
    atpBasicsComplete
    || activeRoomIndex === UNDERSTAND_COMPLETE_INDEX
    || activeRoomIndex === BIOENERGETICS_PROGRESS_INDEX
  ) return 100;
  if (atpBasicsRememberComplete || activeRoomIndex === UNLOCKED_AFTER_REMEMBER_INDEX) return 50;
  return 0;
}

function getRecoveryFuelHeatProgressPercent() {
  if (recoveryFuelHeatComplete) return 100;
  if (recoveryFuelHeatRememberComplete) return 50;
  return 0;
}

function getMapRoomProgressPercent(roomName) {
  if (roomName === "ATP basics") return getAtpBasicsProgressPercent();
  if (roomName === "Phosphagen system") {
    if (phosphagenUnderstandComplete) return 100;
    if (phosphagenRememberComplete) return 50;
    return 0;
  }
  if (roomName === "Glycolytic system") {
    if (glycolyticUnderstandComplete) return 100;
    if (glycolyticRememberComplete) return 50;
    return 0;
  }
  if (roomName === "Aerobic system") {
    if (aerobicSystemComplete) return 100;
    if (aerobicRememberComplete) return 50;
    return 0;
  }
  if (roomName === "Fuel selection") {
    if (fuelSelectionApplyComplete) return 100;
    if (fuelSelectionUnderstandComplete) return 67;
    if (fuelSelectionRememberComplete) return 33;
    return 0;
  }
  if (roomName === "Recovery, fuel & heat") return getRecoveryFuelHeatProgressPercent();
  return isMapRoomComplete(roomName) ? 100 : 0;
}

function getMapTopicProgressArc(progressRing, percent) {
  if (percent <= 0) return "";

  const centerX = Number(progressRing.dataset.cx);
  const centerY = Number(progressRing.dataset.cy);
  const radiusX = Number(progressRing.dataset.rx);
  const radiusY = Number(progressRing.dataset.ry);
  const topY = centerY - radiusY;

  if (percent >= 100) {
    return [
      `M ${centerX} ${topY}`,
      `A ${radiusX} ${radiusY} 0 0 1 ${centerX} ${centerY + radiusY}`,
      `A ${radiusX} ${radiusY} 0 0 1 ${centerX} ${topY}`
    ].join(" ");
  }

  const endAngle = (-90 + percent * 3.6) * (Math.PI / 180);
  const endX = centerX + radiusX * Math.cos(endAngle);
  const endY = centerY + radiusY * Math.sin(endAngle);
  const largeArcFlag = percent > 50 ? 1 : 0;
  return `M ${centerX} ${topY} A ${radiusX} ${radiusY} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}

function updateMapProgressVisuals() {
  imageCanvas.style.setProperty(
    "--map-topic-title-size",
    `${imageCanvas.getBoundingClientRect().width * 0.0168}px`
  );

  mapRoomProgressBars.forEach((progressBar, roomName) => {
    const percent = getMapRoomProgressPercent(roomName);
    progressBar.classList.toggle("is-partial-progress", percent > 0 && percent < 100);
    progressBar.querySelector("i").style.width = `${percent}%`;
    progressBar.setAttribute("aria-valuenow", String(percent));
    progressBar.setAttribute("aria-valuetext", `${percent}% complete`);
  });

  mapTopicProgressRings.forEach((progressRing) => {
    const topicName = progressRing.parentElement.dataset.topic;
    const topicRooms = MAP_TOPIC_ROOMS.get(topicName) ?? [];
    const percent = topicRooms.length === 0
      ? 0
      : (topicRooms.filter((roomName) => isMapRoomComplete(roomName)).length / topicRooms.length) * 100;
    progressRing.setAttribute("d", getMapTopicProgressArc(progressRing, percent));
    progressRing.style.opacity = percent === 0 ? "0" : "1";
    const titleLabel = document.querySelector(
      `.map-topic-title-overlay [data-topic="${topicName}"]`
    );
    titleLabel.classList.toggle(
      "is-visible",
      percent > 0 || topicName === "Bioenergetics" || topicName === "Training"
    );
  });
}

function isMapRoomComplete(roomName) {
  if (roomName === "ATP basics") return isAtpBasicsComplete();
  if (roomName === "Phosphagen system") return phosphagenUnderstandComplete;
  if (roomName === "Glycolytic system") return glycolyticUnderstandComplete;
  if (roomName === "Aerobic system") return aerobicSystemComplete;
  if (roomName === "Fuel selection") return fuelSelectionApplyComplete;
  if (roomName === "Recovery, fuel & heat") return recoveryFuelHeatComplete;
  return false;
}

function isMapRoomUnlocked(roomName) {
  const prerequisites = MAP_ROOM_PREREQUISITES.get(roomName);
  if (!prerequisites) return false;
  return prerequisites.every((prerequisite) => isMapRoomComplete(prerequisite));
}

function getMapRoomLockMessage(roomName) {
  const prerequisites = MAP_ROOM_PREREQUISITES.get(roomName) ?? [];
  const incompletePrerequisites = prerequisites.filter(
    (prerequisite) => !isMapRoomComplete(prerequisite)
  );
  if (incompletePrerequisites.length === 0) return `${roomName} room is unlocked`;
  if (incompletePrerequisites.length === 1) {
    return `Complete ${incompletePrerequisites[0]} to unlock ${roomName}`;
  }
  const finalPrerequisite = incompletePrerequisites.at(-1);
  return `Complete ${incompletePrerequisites.slice(0, -1).join(", ")} and ${finalPrerequisite} to unlock ${roomName}`;
}

function isFuelSelectionPortalUnlocked() {
  return isMapRoomUnlocked("Fuel selection");
}

function isInlineHaalosRoom(index = currentIndex) {
  return isPhosphagenRoomView(index)
    || isGlycolyticRoomView(index)
    || isAerobicRoomView(index);
}

function updateInlineHaalosGuidance() {
  if (isAerobicRoomView()) {
    roomGuidanceCopy.textContent = "In this room you'll explore how oxygen helps your muscles produce ATP steadily for longer efforts, from distance running to everyday movement. You'll connect breathing, fuel use, and endurance to the aerobic system.";
    return;
  }

  if (isGlycolyticRoomView()) {
    roomGuidanceCopy.textContent = "In this room you'll discover how your muscles make ATP quickly from carbohydrate without oxygen, powering hard efforts for up to about two minutes. You'll also learn why lactate is not a waste poison—it can be reused by your body as fuel.";
    return;
  }

  roomGuidanceCopy.textContent = "In this room you'll discover how your muscles get an almost instant burst of energy for explosive movements — think a sprint off the starting blocks or a heavy first pull in tug-of-war. You'll learn how a molecule called phosphocreatine acts like a spare battery, recharging your ATP so your muscles can keep firing for those critical few seconds. Understanding this helps you see why elite sprinters can go all-out but fade so quickly, and it all starts right here.";
}

function setPhosphagenGuidanceVisible(isVisible) {
  phosphagenGuidanceVisible = isVisible;
  imageCanvas.classList.toggle("is-phosphagen-guidance-visible", isVisible);
  phosphagenGuidancePanel.setAttribute("aria-hidden", String(!isVisible));
  roomAskHoverHotspot.setAttribute("aria-expanded", String(isVisible));
  roomHaalosHotspots.forEach((hotspot) => {
    hotspot.setAttribute("aria-expanded", String(isVisible));
  });
}

function toggleInlineHaalosGuidance() {
  const nextVisibility = !phosphagenGuidanceVisible;
  if (nextVisibility) playHaalosSummonSound();
  else playHaalosDismissSound();
  suppressHaalosHoverDuringFrameChange();
  stopAllPortalHovers();
  if (nextVisibility) updateInlineHaalosGuidance();
  setPhosphagenGuidanceVisible(nextVisibility);
}

function isPhosphagenGuidanceImageTarget(horizontalPosition, verticalPosition) {
  const isAskButton = horizontalPosition >= 0.885
    && horizontalPosition <= 0.96
    && verticalPosition <= 0.07;
  const isHaalosCharacter = horizontalPosition >= 0.865
    && horizontalPosition <= 0.975
    && verticalPosition >= 0.82;
  return isAskButton || isHaalosCharacter;
}

function setPhosphagenActivityVisible(isVisible) {
  phosphagenActivityVisible = isVisible;
  imageCanvas.classList.toggle("is-phosphagen-activity-visible", isVisible);
  phosphagenActivityOverlay.setAttribute("aria-hidden", String(!isVisible));
  if (isVisible) {
    phosphagenActivityOverlay.classList.remove(
      "is-help-dismissed",
      "is-phosphagen-quick-check",
      "is-phosphagen-answer-correct",
      "is-phosphagen-question-two",
      "is-phosphagen-question-two-correct",
      "is-phosphagen-understand-practice",
      "is-phosphagen-understand-q1-correct",
      "is-phosphagen-understand-question-two",
      "is-phosphagen-understand-q2-correct"
    );
    phosphagenCorrectOption.setAttribute("aria-pressed", "false");
    phosphagenQuestionTwoCorrectOption.setAttribute("aria-pressed", "false");
    phosphagenUnderstandCorrectOption.setAttribute("aria-pressed", "false");
    phosphagenUnderstandTwoCorrectOption.setAttribute("aria-pressed", "false");
  }
}

function setGlycolyticActivityVisible(isVisible) {
  glycolyticActivityVisible = isVisible;
  imageCanvas.classList.toggle("is-glycolytic-activity-visible", isVisible);
  glycolyticActivityOverlay.setAttribute("aria-hidden", String(!isVisible));
  if (isVisible) {
    glycolyticActivityOverlay.classList.remove(
      "is-help-dismissed",
      "is-glycolytic-quick-check",
      "is-glycolytic-question-one-correct",
      "is-glycolytic-question-two",
      "is-glycolytic-question-two-correct",
      "is-glycolytic-question-three",
      "is-glycolytic-question-three-correct",
      "is-glycolytic-understand-practice",
      "is-glycolytic-understand-q1-correct",
      "is-glycolytic-understand-question-two",
      "is-glycolytic-understand-q2-correct"
    );
    glycolyticQuestionOneCorrectOption.setAttribute("aria-pressed", "false");
    glycolyticQuestionOneOptions.forEach((option) => {
      option.disabled = false;
    });
    glycolyticQuestionTwoCorrectOption.setAttribute("aria-pressed", "false");
    glycolyticQuestionTwoOptions.forEach((option) => {
      option.disabled = false;
    });
    glycolyticQuestionThreeCorrectOption.setAttribute("aria-pressed", "false");
    glycolyticQuestionThreeOptions.forEach((option) => {
      option.disabled = false;
    });
    glycolyticUnderstandCorrectOption.setAttribute("aria-pressed", "false");
    glycolyticUnderstandOptions.forEach((option) => {
      option.disabled = false;
    });
    glycolyticUnderstandTwoCorrectOption.setAttribute("aria-pressed", "false");
    glycolyticUnderstandTwoOptions.forEach((option) => {
      option.disabled = false;
    });
  }
}

function openGlycolyticRememberActivity() {
  setPhosphagenGuidanceVisible(false);
  setGlycolyticActivityVisible(true);
}

function openGlycolyticUnderstandPractice() {
  setPhosphagenGuidanceVisible(false);
  setGlycolyticActivityVisible(true);
  glycolyticActivityOverlay.classList.add("is-glycolytic-understand-practice");
}

function selectGlycolyticUnderstandCorrectAnswer() {
  if (glycolyticActivityOverlay.classList.contains("is-glycolytic-understand-q1-correct")) return;

  playAudioToEnd(correctAnswerAudio);
  glycolyticActivityOverlay.classList.add("is-glycolytic-understand-q1-correct");
  glycolyticUnderstandCorrectOption.setAttribute("aria-pressed", "true");
  glycolyticUnderstandOptions.forEach((option) => {
    option.disabled = true;
  });
}

function openGlycolyticUnderstandQuestionTwo() {
  playActivityOpenSound();
  glycolyticActivityOverlay.classList.add("is-glycolytic-understand-question-two");
  glycolyticActivityOverlay.classList.remove("is-glycolytic-understand-q1-correct");
}

function selectGlycolyticUnderstandTwoCorrectAnswer() {
  if (glycolyticActivityOverlay.classList.contains("is-glycolytic-understand-q2-correct")) return;

  playAudioToEnd(correctAnswerAudio);
  glycolyticActivityOverlay.classList.add("is-glycolytic-understand-q2-correct");
  glycolyticUnderstandTwoCorrectOption.setAttribute("aria-pressed", "true");
  glycolyticUnderstandTwoOptions.forEach((option) => {
    option.disabled = true;
  });
}

function finishGlycolyticUnderstandPractice() {
  playAudioToEnd(finishActivityAudio);
  glycolyticRememberComplete = true;
  glycolyticUnderstandComplete = true;
  saveCourseProgress();
  setGlycolyticActivityVisible(false);
  showAsset(GLYCOLYTIC_ROOM_INDEX);
}

function closeGlycolyticRememberActivity() {
  playDescendingClickSound();
  setGlycolyticActivityVisible(false);
}

function openGlycolyticQuickCheck() {
  playActivityOpenSound();
  glycolyticActivityOverlay.classList.add("is-glycolytic-quick-check");
}

function selectGlycolyticQuestionOneCorrectAnswer() {
  if (glycolyticActivityOverlay.classList.contains("is-glycolytic-question-one-correct")) return;
  playAudioToEnd(correctAnswerAudio);
  glycolyticActivityOverlay.classList.add("is-glycolytic-question-one-correct");
  glycolyticQuestionOneCorrectOption.setAttribute("aria-pressed", "true");
  glycolyticQuestionOneOptions.forEach((option) => {
    option.disabled = true;
  });
}

function openGlycolyticQuestionTwo() {
  playActivityOpenSound();
  glycolyticActivityOverlay.classList.add("is-glycolytic-question-two");
}

function selectGlycolyticQuestionTwoCorrectAnswer() {
  if (glycolyticActivityOverlay.classList.contains("is-glycolytic-question-two-correct")) return;
  playAudioToEnd(correctAnswerAudio);
  glycolyticActivityOverlay.classList.add("is-glycolytic-question-two-correct");
  glycolyticQuestionTwoCorrectOption.setAttribute("aria-pressed", "true");
  glycolyticQuestionTwoOptions.forEach((option) => {
    option.disabled = true;
  });
}

function openGlycolyticQuestionThree() {
  playActivityOpenSound();
  glycolyticActivityOverlay.classList.add("is-glycolytic-question-three");
}

function selectGlycolyticQuestionThreeCorrectAnswer() {
  if (glycolyticActivityOverlay.classList.contains("is-glycolytic-question-three-correct")) return;

  playAudioToEnd(correctAnswerAudio);
  glycolyticActivityOverlay.classList.add("is-glycolytic-question-three-correct");
  glycolyticQuestionThreeCorrectOption.setAttribute("aria-pressed", "true");
  glycolyticQuestionThreeOptions.forEach((option) => {
    option.disabled = true;
  });
}

function finishGlycolyticRememberCheck() {
  playAudioToEnd(finishActivityAudio);
  glycolyticRememberComplete = true;
  saveCourseProgress();
  showAsset(GLYCOLYTIC_ROOM_INDEX);
}

function openPhosphagenActivity() {
  setPhosphagenGuidanceVisible(false);
  setPhosphagenActivityVisible(true);
}

function closePhosphagenActivity() {
  playDescendingClickSound();
  setPhosphagenActivityVisible(false);
}

function openPhosphagenQuickCheck() {
  playActivityOpenSound();
  phosphagenActivityOverlay.classList.add("is-phosphagen-quick-check");
  phosphagenActivityOverlay.classList.remove("is-phosphagen-answer-correct");
  phosphagenCorrectOption.setAttribute("aria-pressed", "false");
}

function selectPhosphagenCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  phosphagenActivityOverlay.classList.add("is-phosphagen-answer-correct");
  phosphagenCorrectOption.setAttribute("aria-pressed", "true");
}

function openPhosphagenQuestionTwo() {
  playActivityOpenSound();
  phosphagenActivityOverlay.classList.add("is-phosphagen-question-two");
  phosphagenActivityOverlay.classList.remove(
    "is-phosphagen-answer-correct",
    "is-phosphagen-question-two-correct"
  );
  phosphagenQuestionTwoCorrectOption.setAttribute("aria-pressed", "false");
}

function selectPhosphagenQuestionTwoCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  phosphagenActivityOverlay.classList.add("is-phosphagen-question-two-correct");
  phosphagenQuestionTwoCorrectOption.setAttribute("aria-pressed", "true");
}

function finishPhosphagenRememberCheck() {
  playAudioToEnd(finishActivityAudio);
  phosphagenRememberComplete = true;
  saveCourseProgress();
  imageCanvas.classList.add("is-phosphagen-remember-complete");
  understandActivityHotspot.setAttribute("aria-disabled", "false");
  understandActivityHotspot.setAttribute("aria-label", "Open Understand activity");
  understandActivityHotspot.title = "Open Understand activity";
  setPhosphagenActivityVisible(false);
}

function openPhosphagenUnderstandPractice() {
  setPhosphagenGuidanceVisible(false);
  setPhosphagenActivityVisible(true);
  phosphagenActivityOverlay.classList.add("is-phosphagen-understand-practice");
}

function selectPhosphagenUnderstandCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  phosphagenActivityOverlay.classList.add("is-phosphagen-understand-q1-correct");
  phosphagenUnderstandCorrectOption.setAttribute("aria-pressed", "true");
}

function openPhosphagenUnderstandQuestionTwo() {
  playActivityOpenSound();
  phosphagenActivityOverlay.classList.add("is-phosphagen-understand-question-two");
  phosphagenActivityOverlay.classList.remove(
    "is-phosphagen-understand-q1-correct",
    "is-phosphagen-understand-q2-correct"
  );
  phosphagenUnderstandCorrectOption.setAttribute("aria-pressed", "false");
  phosphagenUnderstandTwoCorrectOption.setAttribute("aria-pressed", "false");
}

function selectPhosphagenUnderstandTwoCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  phosphagenActivityOverlay.classList.add("is-phosphagen-understand-q2-correct");
  phosphagenUnderstandTwoCorrectOption.setAttribute("aria-pressed", "true");
}

function finishPhosphagenUnderstandPractice() {
  playAudioToEnd(finishActivityAudio);
  phosphagenRememberComplete = true;
  phosphagenUnderstandComplete = true;
  saveCourseProgress();
  imageCanvas.classList.add("is-phosphagen-understand-complete");
  setPhosphagenActivityVisible(false);
}

function playAscendingClickSound() {
  playAudioToEnd(ascendingClickAudio);
}

function playDescendingClickSound() {
  playAudioToEnd(descendingClickAudio);
}

function playHaalosSummonSound() {
  playAudioToEnd(haalosSummonAudio);
}

function playHaalosDismissSound() {
  playAudioToEnd(haalosDismissAudio);
}

function isHaalosHoverSoundPlaying() {
  activeHaalosHoverAudio.forEach((audio) => {
    if (!audio.isConnected || audio.ended) activeHaalosHoverAudio.delete(audio);
  });
  return activeHaalosHoverAudio.size > 0;
}

function suppressHaalosHoverDuringFrameChange() {
  haalosFrameHoverSuppressed = true;
  if (haalosFrameHoverSuppressionTimer !== null) {
    window.clearTimeout(haalosFrameHoverSuppressionTimer);
  }
  haalosFrameHoverSuppressionTimer = window.setTimeout(() => {
    haalosFrameHoverSuppressed = false;
    haalosFrameHoverSuppressionTimer = null;
  }, haalosFrameHoverSuppressionDuration);
}

function playHaalosHoverReaction(event) {
  if (haalosFrameHoverSuppressed) return;
  const hotspot = event.currentTarget;
  haalosHoverCount += 1;

  const isAnnoyed = haalosHoverCount % 7 === 0;
  const reactionClass = isAnnoyed ? "is-annoyed" : "is-startled";
  const audio = isAnnoyed ? haalosHoverAudio3 : haalosHoverAudio2;

  const hoverAudio = playAudioToEnd(audio);
  activeHaalosHoverAudio.add(hoverAudio);
  hoverAudio.addEventListener("ended", () => activeHaalosHoverAudio.delete(hoverAudio), { once: true });

  const existingTimer = haalosReactionTimers.get(hotspot);
  if (existingTimer) window.clearTimeout(existingTimer);

  hotspot.dataset.hoverCount = String(haalosHoverCount);
  hotspot.dataset.hoverReaction = isAnnoyed ? "annoyed" : "startled";
  hotspot.dataset.hoverSound = audio.id;
  hotspot.classList.remove("is-startled", "is-annoyed");
  void hotspot.offsetWidth;
  hotspot.classList.add(reactionClass);

  const timer = window.setTimeout(() => {
    hotspot.classList.remove(reactionClass);
    haalosReactionTimers.delete(hotspot);
  }, isAnnoyed ? 760 : 480);
  haalosReactionTimers.set(hotspot, timer);
}

function openMapFromRoom() {
  playAudioToEnd(mapOpenAudio);
  mapReturnIndex = isPhosphagenRoomView()
    || isGlycolyticRoomView()
    || isAerobicRoomView()
    || isFuelSelectionRoomView()
    ? currentIndex
    : activeRoomIndex;
  showAsset(QUEST_MAP_INDEX);
}

function closeMapToRoom() {
  playAudioToEnd(mapCloseAudio);
  showAsset(mapReturnIndex);
}

function enterAtpBasicsRoom() {
  stopAllPortalHovers();
  fadeAmbientForPortal();
  playAudioToEnd(portalTraverseAudio);
  showAsset(
    aerobicSystemComplete && !glycolyticUnderstandComplete
      ? ATP_BASICS_HAALOS_NEXT_GLYCOLYTIC_INDEX
      : activeRoomIndex
  );
}

function enterPhosphagenFromMap() {
  stopAllPortalHovers();
  fadeAmbientForPortal();
  playAudioToEnd(portalTraverseAudio);
  showAsset(PHOSPHAGEN_ROOM_INDEX);
}

function enterGlycolyticRoom() {
  stopAllPortalHovers();
  fadeAmbientForPortal();
  playAudioToEnd(portalTraverseAudio);
  showAsset(GLYCOLYTIC_ROOM_INDEX);
}

function enterAerobicRoom() {
  stopAllPortalHovers();
  fadeAmbientForPortal();
  playAudioToEnd(portalTraverseAudio);
  showAsset(getAerobicMainRoomIndex());
}

function closeFuelSelectionRememberActivity() {
  playDescendingClickSound();
  showAsset(getFuelSelectionMainRoomIndex());
}

function enterFuelSelectionRoom() {
  stopAllPortalHovers();
  fadeAmbientForPortal();
  playAudioToEnd(portalTraverseAudio);
  showAsset(getFuelSelectionMainRoomIndex());
}

function openFuelSelectionRememberActivity() {
  playActivityOpenSound();
  showAsset(FUEL_SELECTION_REMEMBER_ACTIVITY_INDEX);
}

function openFuelSelectionRememberQuickCheck() {
  playActivityOpenSound();
  showAsset(FUEL_SELECTION_REMEMBER_Q1_INDEX);
}

function selectFuelSelectionQuestionOneCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(FUEL_SELECTION_REMEMBER_Q1_CORRECT_INDEX);
}

function selectFuelSelectionQuestionOneIncorrectAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
  showAsset(FUEL_SELECTION_REMEMBER_Q1_INCORRECT_INDEX);
}

function openFuelSelectionRememberQuestionTwo() {
  playActivityOpenSound();
  showAsset(FUEL_SELECTION_REMEMBER_Q2_INDEX);
}

function selectFuelSelectionQuestionTwoCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(FUEL_SELECTION_REMEMBER_Q2_CORRECT_INDEX);
}

function openFuelSelectionRememberQuestionThree() {
  playActivityOpenSound();
  showAsset(FUEL_SELECTION_REMEMBER_Q3_INDEX);
}

function selectFuelSelectionQuestionThreeIncorrectAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
  showAsset(FUEL_SELECTION_REMEMBER_Q3_INCORRECT_INDEX);
}

function selectFuelSelectionQuestionThreeCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(FUEL_SELECTION_REMEMBER_Q3_CORRECT_INDEX);
}

function finishFuelSelectionRememberCheck() {
  playAudioToEnd(finishActivityAudio);
  fuelSelectionRememberComplete = true;
  saveCourseProgress();
  showAsset(FUEL_SELECTION_REMEMBER_COMPLETE_INDEX);
}

const FUEL_SELECTION_BULB_SEQUENCE = [1, 2, 3, 4, 5];
const FUEL_SELECTION_BULB_SELECTED_INDEXES = [
  FUEL_SELECTION_UNDERSTAND_BULB1_SELECTED_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB2_SELECTED_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB3_SELECTED_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB4_SELECTED_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB5_SELECTED_INDEX
];
const FUEL_SELECTION_BULB_CORRECT_INDEXES = [
  FUEL_SELECTION_UNDERSTAND_BULB1_CORRECT_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB2_CORRECT_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB3_CORRECT_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB4_CORRECT_INDEX,
  FUEL_SELECTION_UNDERSTAND_SOLVED_INDEX
];
const FUEL_SELECTION_BULB_START_INDEXES = [
  FUEL_SELECTION_UNDERSTAND_ACTIVITY_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB1_CORRECT_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB2_CORRECT_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB3_CORRECT_INDEX,
  FUEL_SELECTION_UNDERSTAND_BULB4_CORRECT_INDEX
];

function getFuelSelectionBulbStep(index = currentIndex) {
  return FUEL_SELECTION_BULB_START_INDEXES.indexOf(index);
}

function updateFuelSelectionBulbHotspotStates() {
  const step = getFuelSelectionBulbStep();
  const nextBulb = step >= 0 ? FUEL_SELECTION_BULB_SEQUENCE[step] : null;

  fuelSelectionBulbHotspots.forEach((hotspot) => {
    const bulb = Number(hotspot.dataset.bulb);
    const isNextBulb = bulb === nextBulb;
    const defaultLabel = hotspot.dataset.defaultLabel || hotspot.getAttribute("aria-label");
    hotspot.dataset.defaultLabel = defaultLabel;
    hotspot.disabled = !isNextBulb;
    hotspot.setAttribute("aria-disabled", String(!isNextBulb));
    hotspot.setAttribute(
      "aria-label",
      isNextBulb ? defaultLabel : `${defaultLabel}; complete the bulbs to its left first`
    );
    hotspot.title = isNextBulb ? defaultLabel : "Complete bulbs from left to right";
  });
}

function selectFuelSelectionBulb(event) {
  const step = getFuelSelectionBulbStep();
  const bulb = Number(event.currentTarget.dataset.bulb);
  if (step < 0 || bulb !== FUEL_SELECTION_BULB_SEQUENCE[step]) {
    playLockedActivitySound();
    return;
  }
  playSmallMapHoverSound();
  showAsset(FUEL_SELECTION_BULB_SELECTED_INDEXES[step]);
}

function sortFuelSelectionBulb(targetFuel) {
  const step = FUEL_SELECTION_BULB_SELECTED_INDEXES.indexOf(currentIndex);
  if (step < 0) return;
  const expectedFuel = ["carbohydrate", "carbohydrate", "fat", "fat", "carbohydrate"][step];
  if (targetFuel !== expectedFuel) {
    playLockedActivitySound();
    return;
  }
  playAudioToEnd(correctAnswerAudio);
  showAsset(FUEL_SELECTION_BULB_CORRECT_INDEXES[step]);
}

function closeFuelSelectionUnderstandActivity() {
  playDescendingClickSound();
  showAsset(getFuelSelectionMainRoomIndex());
}

function finishFuelSelectionUnderstandActivity() {
  playAudioToEnd(finishActivityAudio);
  fuelSelectionRememberComplete = true;
  fuelSelectionUnderstandComplete = true;
  saveCourseProgress();
  showAsset(FUEL_SELECTION_UNDERSTAND_COMPLETE_INDEX);
}

function openFuelSelectionApplyActivity() {
  if (!fuelSelectionUnderstandComplete) {
    playLockedActivitySound();
    return;
  }
  playActivityOpenSound();
  showAsset(FUEL_SELECTION_APPLY_Q1_INDEX);
}

function closeFuelSelectionApplyActivity() {
  playDescendingClickSound();
  showAsset(getFuelSelectionMainRoomIndex());
}

function selectFuelSelectionApplyQuestionOneCorrect() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(FUEL_SELECTION_APPLY_Q1_CORRECT_INDEX);
}

function selectFuelSelectionApplyWrongAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
}

function openFuelSelectionApplyQuestionTwo() {
  playActivityOpenSound();
  showAsset(FUEL_SELECTION_APPLY_Q2_INDEX);
}

function selectFuelSelectionApplyQuestionTwoCorrect() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(FUEL_SELECTION_APPLY_Q2_CORRECT_INDEX);
}

function activateMapRoom(event) {
  const roomName = event.currentTarget.dataset.label;

  if (!isMapRoomUnlocked(roomName)) {
    playAudioToEnd(lockedActivityAudio);
    return;
  }

  if (roomName === "ATP basics") {
    enterAtpBasicsRoom();
    return;
  }

  if (roomName === "Phosphagen system") {
    enterPhosphagenFromMap();
    return;
  }

  if (roomName === "Glycolytic system") {
    enterGlycolyticRoom();
    return;
  }

  if (roomName === "Aerobic system") {
    enterAerobicRoom();
    return;
  }

  if (roomName === "Fuel selection") {
    enterFuelSelectionRoom();
    return;
  }

  // The remaining map rooms use the same graph now, even before their room
  // mockups are added. Their unlocked state and feedback still stay accurate.
  playAudioToEnd(portalTraverseAudio);
}

function updateMapRoomHotspotStates() {
  const currentRoomName = getMapCurrentRoomName();
  smallMapHotspots.forEach((hotspot) => {
    const roomName = hotspot.dataset.label;
    const isUnlocked = isMapRoomUnlocked(roomName);
    const isComplete = isMapRoomComplete(roomName);
    const stateDescription = isUnlocked
      ? isComplete
        ? `${roomName} room is complete; enter room`
        : `Enter ${roomName} room`
      : getMapRoomLockMessage(roomName);

    hotspot.classList.toggle("is-locked-map-room", !isUnlocked);
    hotspot.classList.toggle("is-unlocked-map-room", isUnlocked);
    hotspot.classList.toggle("is-complete-map-room", isComplete);
    hotspot.classList.toggle("is-current-map-room", roomName === currentRoomName);
    hotspot.setAttribute("aria-disabled", String(!isUnlocked));
    hotspot.setAttribute("aria-label", stateDescription);
    hotspot.title = stateDescription;
  });
  updateMapProgressVisuals();
}

function enterCourse() {
  playAscendingClickSound();
  activeRoomIndex = atpBasicsComplete
    ? UNDERSTAND_COMPLETE_INDEX
    : atpBasicsRememberComplete
      ? UNLOCKED_AFTER_REMEMBER_INDEX
      : LOCKED_ROOM_INDEX;
  dismissedNewHerePrompts.clear();
  goalCleared = false;
  startRoomAmbience();
  showAsset(activeRoomIndex);
}

function resetCourseProgress() {
  playDescendingClickSound();
  atpBasicsRememberComplete = false;
  atpBasicsComplete = false;
  phosphagenRememberComplete = false;
  phosphagenUnderstandComplete = false;
  glycolyticRememberComplete = false;
  glycolyticUnderstandComplete = false;
  aerobicRememberComplete = false;
  aerobicSystemComplete = false;
  fuelSelectionRememberComplete = false;
  fuelSelectionUnderstandComplete = false;
  fuelSelectionApplyComplete = false;
  recoveryFuelHeatRememberComplete = false;
  recoveryFuelHeatComplete = false;
  clearSavedCourseProgress();
  activeRoomIndex = LOCKED_ROOM_INDEX;
  mapReturnIndex = LOCKED_ROOM_INDEX;
  dismissedNewHerePrompts.clear();
  goalCleared = false;
  clearAskResponseReturnTimer();
  setPhosphagenGuidanceVisible(false);
  setPhosphagenActivityVisible(false);
  setGlycolyticActivityVisible(false);
  stopAllPortalHovers();
  ambienceActive = false;
  ambienceTransitionId += 1;
  clearAmbientTransition();
  clearCourseExitFade();
  stopRoomBeeps();
  resetRoomAmbiencePlayback();
  showAsset(COURSE_HOME_INDEX);
}

function clearAmbientTransition() {
  if (ambientFadeFrame !== null) {
    window.cancelAnimationFrame(ambientFadeFrame);
    ambientFadeFrame = null;
  }
  if (ambientFadeReturnTimer !== null) {
    window.clearTimeout(ambientFadeReturnTimer);
    ambientFadeReturnTimer = null;
  }
}

function clearCourseExitFade() {
  if (courseExitFadeFrame !== null) {
    window.cancelAnimationFrame(courseExitFadeFrame);
    courseExitFadeFrame = null;
  }
  if (courseExitStopTimer !== null) {
    window.clearTimeout(courseExitStopTimer);
    courseExitStopTimer = null;
  }
}

function isAtpBasicsAudioContext(index = currentIndex) {
  return (index >= LOCKED_ROOM_INDEX && index <= LEFT_WALL_INDEX)
    || index === ATP_BASICS_HAALOS_NEXT_GLYCOLYTIC_INDEX;
}

function isRoomAudioContext(index = currentIndex) {
  return isAtpBasicsAudioContext(index)
    || isPhosphagenRoomView(index)
    || isGlycolyticRoomView(index)
    || isAerobicRoomView(index)
    || index === AEROBIC_REMEMBER_ACTIVITY_INDEX
    || index === AEROBIC_REMEMBER_QUICK_CHECK_INDEX
    || index === AEROBIC_REMEMBER_Q1_CORRECT_INDEX
    || index === AEROBIC_REMEMBER_QUESTION_TWO_INDEX
    || index === AEROBIC_REMEMBER_Q2_CORRECT_INDEX
    || index === AEROBIC_REMEMBER_QUESTION_THREE_INDEX
    || index === AEROBIC_REMEMBER_Q3_CORRECT_INDEX
    || index === AEROBIC_UNDERSTAND_ACTIVITY_INDEX
    || index === AEROBIC_UNDERSTAND_RESPONSE_INDEX
    || isFuelSelectionRoomView(index)
    || index === FUEL_SELECTION_REMEMBER_ACTIVITY_INDEX
    || index === FUEL_SELECTION_REMEMBER_Q1_INDEX
    || index === FUEL_SELECTION_REMEMBER_Q1_INCORRECT_INDEX
    || index === FUEL_SELECTION_REMEMBER_Q1_CORRECT_INDEX
    || index === FUEL_SELECTION_REMEMBER_Q2_INDEX
    || index === FUEL_SELECTION_REMEMBER_Q2_CORRECT_INDEX
    || index === FUEL_SELECTION_REMEMBER_Q3_INDEX
    || index === FUEL_SELECTION_REMEMBER_Q3_INCORRECT_INDEX
    || (index >= FUEL_SELECTION_REMEMBER_ACTIVITY_INDEX
      && index <= FUEL_SELECTION_APPLY_Q2_CORRECT_INDEX);
}

function startAtpRoomBeeps() {
  if (!ambienceActive || !isAtpBasicsAudioContext()) return;
  if (roomBeepsStartTimer !== null || (!roomBeepsAudio.paused && !roomBeepsPrimedMuted)) return;

  roomBeepsAudio.volume = roomBeepsVolume;
  roomBeepsAudio.currentTime = 0;
  roomBeepsPrimedMuted = true;
  syncRoomBeepsMute();
  roomBeepsAudio.play().catch(() => {
    // Priming during a room-entry gesture keeps delayed playback browser-safe.
  });

  roomBeepsStartTimer = window.setTimeout(() => {
    roomBeepsStartTimer = null;
    if (!ambienceActive || !isAtpBasicsAudioContext()) {
      stopRoomBeeps();
      return;
    }

    roomBeepsAudio.currentTime = 0;
    roomBeepsAudio.volume = roomBeepsVolume;
    roomBeepsPrimedMuted = false;
    syncRoomBeepsMute();
    if (roomBeepsAudio.paused) {
      roomBeepsAudio.play().catch(() => {
        // Browsers can withhold audio until the user has interacted with the page.
      });
    }
  }, roomBeepsStartDelay);
}

function syncRoomBeepsForContext() {
  if (!ambienceActive) return;
  if (isAtpBasicsAudioContext()) startAtpRoomBeeps();
  else stopRoomBeeps();
}

function startRoomAmbience() {
  ambienceTransitionId += 1;
  clearAmbientTransition();
  clearCourseExitFade();
  stopRoomBeeps();
  ambienceActive = true;

  ambientLayer1Audio.volume = 1;
  ambientLayer1Audio.currentTime = 0;

  ambientLayer1Audio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
  syncRoomBeepsForContext();
}

function stopRoomBeeps() {
  if (roomBeepsStartTimer !== null) {
    window.clearTimeout(roomBeepsStartTimer);
    roomBeepsStartTimer = null;
  }
  roomBeepsAudio.pause();
  roomBeepsAudio.currentTime = 0;
  roomBeepsPrimedMuted = false;
  syncRoomBeepsMute();
}

function resetRoomAmbiencePlayback() {
  clearCourseExitFade();
  ambientLayer1Audio.pause();
  ambientLayer1Audio.currentTime = 0;
  ambientLayer1Audio.volume = 1;
  roomBeepsAudio.pause();
  roomBeepsAudio.currentTime = 0;
  roomBeepsAudio.volume = roomBeepsVolume;
  roomBeepsPrimedMuted = false;
  syncRoomBeepsMute();
}

function fadeOutRoomAmbience() {
  ambienceActive = false;
  ambienceTransitionId += 1;
  clearAmbientTransition();
  clearCourseExitFade();

  if (roomBeepsStartTimer !== null) {
    window.clearTimeout(roomBeepsStartTimer);
    roomBeepsStartTimer = null;
  }

  const ambientStartVolume = ambientLayer1Audio.paused ? 0 : ambientLayer1Audio.volume;
  const beepsStartVolume = roomBeepsAudio.paused || roomBeepsPrimedMuted ? 0 : roomBeepsAudio.volume;
  if (roomBeepsPrimedMuted) {
    roomBeepsAudio.pause();
    roomBeepsAudio.currentTime = 0;
    roomBeepsPrimedMuted = false;
    syncRoomBeepsMute();
  }

  if (ambientStartVolume === 0 && beepsStartVolume === 0) {
    resetRoomAmbiencePlayback();
    return;
  }

  const fadeStartedAt = performance.now();
  function updateCourseExitFade(now) {
    const progress = Math.min((now - fadeStartedAt) / courseExitFadeDuration, 1);
    const remainingVolume = 1 - progress;
    if (!ambientLayer1Audio.paused) ambientLayer1Audio.volume = ambientStartVolume * remainingVolume;
    if (!roomBeepsAudio.paused) roomBeepsAudio.volume = beepsStartVolume * remainingVolume;

    if (progress < 1) {
      courseExitFadeFrame = window.requestAnimationFrame(updateCourseExitFade);
      return;
    }

    courseExitFadeFrame = null;
    resetRoomAmbiencePlayback();
  }

  courseExitFadeFrame = window.requestAnimationFrame(updateCourseExitFade);
  courseExitStopTimer = window.setTimeout(() => {
    courseExitStopTimer = null;
    resetRoomAmbiencePlayback();
  }, courseExitFadeDuration + 100);
}

function rampAmbientVolume(targetVolume, duration, transitionId, onComplete) {
  const startingVolume = ambientLayer1Audio.volume;
  const fadeStartedAt = performance.now();

  function updateVolume(now) {
    if (!ambienceActive || transitionId !== ambienceTransitionId) return;

    const progress = Math.max(0, Math.min((now - fadeStartedAt) / duration, 1));
    ambientLayer1Audio.volume = startingVolume + (targetVolume - startingVolume) * progress;
    if (progress < 1) {
      ambientFadeFrame = window.requestAnimationFrame(updateVolume);
      return;
    }

    ambientFadeFrame = null;
    onComplete?.();
  }

  ambientFadeFrame = window.requestAnimationFrame(updateVolume);
}

function fadeAmbientForPortal() {
  stopRoomBeeps();
  if (!ambienceActive || ambientLayer1Audio.paused) return;

  ambienceTransitionId += 1;
  const transitionId = ambienceTransitionId;
  clearAmbientTransition();

  rampAmbientVolume(0, ambientFadeOutDuration, transitionId, () => {
    ambientFadeReturnTimer = window.setTimeout(() => {
      ambientFadeReturnTimer = null;
      rampAmbientVolume(1, ambientFadeInDuration, transitionId);
    }, ambientFadePause);
  });
}

function exitQuestRoom() {
  playDescendingClickSound();
  stopAllPortalHovers();
  showAsset(COURSE_HOME_INDEX);
}

function openRoomTour() {
  playHaalosSummonSound();
  stopAllPortalHovers();
  showAsset(TOUR_INDEX);
}

function openHaalosGuidance() {
  if (isInlineHaalosRoom()) {
    toggleInlineHaalosGuidance();
    return;
  }
  if (!isHaalosHoverSoundPlaying()) playHaalosSummonSound();
  suppressHaalosHoverDuringFrameChange();
  stopAllPortalHovers();
  showAsset(HAALOS_GUIDANCE_INDEX);
}

function openHaalosAskResponse() {
  if (isInlineHaalosRoom()) {
    toggleInlineHaalosGuidance();
    return;
  }
  playHaalosSummonSound();
  suppressHaalosHoverDuringFrameChange();
  stopAllPortalHovers();
  clearAskResponseReturnTimer();
  showAsset(ASK_HAALOS_INDEX);
  askResponseReturnTimer = window.setTimeout(() => {
    askResponseReturnTimer = null;
    if (currentIndex === ASK_HAALOS_INDEX) showAsset(activeRoomIndex);
  }, askResponseDuration);
}

function openBioenergeticsProgress() {
  playAudioToEnd(finishActivityAudio);
  stopAllPortalHovers();
  showAsset(BIOENERGETICS_PROGRESS_INDEX);
}

function openPortalWallView() {
  if (isAerobicMainWall()) {
    stopAllPortalHovers();
    showAsset(isAerobicCompleteView()
      ? AEROBIC_RIGHT_WALL_COMPLETE_INDEX
      : AEROBIC_RIGHT_WALL_INDEX);
    return;
  }

  if (currentIndex === GLYCOLYTIC_ROOM_INDEX) {
    stopAllPortalHovers();
    showAsset(GLYCOLYTIC_RIGHT_WALL_INDEX);
    return;
  }

  if (isFuelSelectionMainWall()) {
    stopAllPortalHovers();
    showAsset(FUEL_SELECTION_RIGHT_WALL_INDEX);
    return;
  }

  const targetIndex = areAtpSystemPortalsUnlocked()
    ? PORTAL_WALL_UNLOCKED_INDEX
    : PORTAL_WALL_LOCKED_INDEX;
  stopAllPortalHovers();
  showAsset(targetIndex);
}

function openLeftWallView() {
  stopAllPortalHovers();
  if (isAerobicMainWall()) {
    showAsset(isAerobicCompleteView()
      ? AEROBIC_LEFT_WALL_COMPLETE_INDEX
      : AEROBIC_LEFT_WALL_INDEX);
    return;
  }
  if (isFuelSelectionMainWall()) {
    showAsset(FUEL_SELECTION_LEFT_WALL_INDEX);
    return;
  }
  showAsset(LEFT_WALL_INDEX);
}

function returnToMainWall() {
  stopAllPortalHovers();
  if (currentIndex === GLYCOLYTIC_RIGHT_WALL_INDEX) {
    showAsset(GLYCOLYTIC_ROOM_INDEX);
    return;
  }
  if (
    currentIndex === FUEL_SELECTION_RIGHT_WALL_INDEX
    || currentIndex === FUEL_SELECTION_LEFT_WALL_INDEX
  ) {
    showAsset(getFuelSelectionMainRoomIndex());
    return;
  }
  if (
    currentIndex === AEROBIC_RIGHT_WALL_INDEX
    || currentIndex === AEROBIC_LEFT_WALL_INDEX
    || currentIndex === AEROBIC_RIGHT_WALL_COMPLETE_INDEX
    || currentIndex === AEROBIC_LEFT_WALL_COMPLETE_INDEX
  ) {
    showAsset(getAerobicMainRoomIndex());
    return;
  }
  showAsset(activeRoomIndex);
}

function advanceRoomPerspective(event) {
  if (event.target !== mainImage) return;

  if (isFuelSelectionRoomView()) {
    const imageBounds = mainImage.getBoundingClientRect();
    const horizontalPosition = (event.clientX - imageBounds.left) / imageBounds.width;

    if (isFuelSelectionMainWall() && horizontalPosition < 0.42) {
      showAsset(FUEL_SELECTION_LEFT_WALL_INDEX);
      return;
    }
    if (isFuelSelectionMainWall() && horizontalPosition > 0.58) {
      showAsset(FUEL_SELECTION_RIGHT_WALL_INDEX);
      return;
    }
    if (currentIndex === FUEL_SELECTION_LEFT_WALL_INDEX && horizontalPosition > 0.42) {
      showAsset(getFuelSelectionMainRoomIndex());
      return;
    }
    if (currentIndex === FUEL_SELECTION_RIGHT_WALL_INDEX && horizontalPosition < 0.68) {
      showAsset(getFuelSelectionMainRoomIndex());
    }
    return;
  }

  if (isAerobicRoomView()) {
    const imageBounds = mainImage.getBoundingClientRect();
    const horizontalPosition = (event.clientX - imageBounds.left) / imageBounds.width;
    const verticalPosition = (event.clientY - imageBounds.top) / imageBounds.height;

    if (isPhosphagenGuidanceImageTarget(horizontalPosition, verticalPosition)) {
      toggleInlineHaalosGuidance();
      return;
    }

    if (isAerobicMainWall() && horizontalPosition < 0.42) {
      showAsset(isAerobicCompleteView()
        ? AEROBIC_LEFT_WALL_COMPLETE_INDEX
        : AEROBIC_LEFT_WALL_INDEX);
      return;
    }

    if (isAerobicMainWall() && horizontalPosition > 0.58) {
      showAsset(isAerobicCompleteView()
        ? AEROBIC_RIGHT_WALL_COMPLETE_INDEX
        : AEROBIC_RIGHT_WALL_INDEX);
      return;
    }

    if (
      (currentIndex === AEROBIC_LEFT_WALL_INDEX || currentIndex === AEROBIC_LEFT_WALL_COMPLETE_INDEX)
      && horizontalPosition > 0.28
    ) {
      showAsset(getAerobicMainRoomIndex());
      return;
    }

    if (
      (currentIndex === AEROBIC_RIGHT_WALL_INDEX || currentIndex === AEROBIC_RIGHT_WALL_COMPLETE_INDEX)
      && horizontalPosition < 0.72
    ) {
      showAsset(getAerobicMainRoomIndex());
    }
    return;
  }

  if (isGlycolyticRoomView()) {
    const imageBounds = mainImage.getBoundingClientRect();
    const horizontalPosition = (event.clientX - imageBounds.left) / imageBounds.width;
    const verticalPosition = (event.clientY - imageBounds.top) / imageBounds.height;

    if (isPhosphagenGuidanceImageTarget(horizontalPosition, verticalPosition)) {
      toggleInlineHaalosGuidance();
      return;
    }

    if (currentIndex === GLYCOLYTIC_ROOM_INDEX && horizontalPosition > 0.62) {
      showAsset(GLYCOLYTIC_RIGHT_WALL_INDEX);
      return;
    }

    if (currentIndex === GLYCOLYTIC_RIGHT_WALL_INDEX && horizontalPosition < 0.7) {
      showAsset(GLYCOLYTIC_ROOM_INDEX);
    }
    return;
  }

  if (isPhosphagenRoomView()) {
    const imageBounds = mainImage.getBoundingClientRect();
    const horizontalPosition = (event.clientX - imageBounds.left) / imageBounds.width;
    const verticalPosition = (event.clientY - imageBounds.top) / imageBounds.height;

    if (isPhosphagenGuidanceImageTarget(horizontalPosition, verticalPosition)) {
      toggleInlineHaalosGuidance();
      return;
    }

    if (currentIndex === PHOSPHAGEN_ROOM_INDEX) {
      if (horizontalPosition < 0.34) showAsset(PHOSPHAGEN_LEFT_WALL_INDEX);
      else if (horizontalPosition > 0.66) showAsset(PHOSPHAGEN_RIGHT_WALL_INDEX);
      return;
    }

    if (currentIndex === PHOSPHAGEN_LEFT_WALL_INDEX) {
      if (horizontalPosition > 0.42) showAsset(PHOSPHAGEN_ROOM_INDEX);
      return;
    }

    if (currentIndex === PHOSPHAGEN_RIGHT_WALL_INDEX && horizontalPosition < 0.58) {
      showAsset(PHOSPHAGEN_ROOM_INDEX);
    }
    return;
  }

  if (!ROOM_PERSPECTIVE_INDEXES.has(currentIndex)) return;

  if (MAIN_WALL_INDEXES.has(currentIndex)) {
    openPortalWallView();
    return;
  }

  if (currentIndex === PORTAL_WALL_LOCKED_INDEX || currentIndex === PORTAL_WALL_UNLOCKED_INDEX) {
    openLeftWallView();
    return;
  }

  returnToMainWall();
}

function skipRoomTour() {
  playHaalosDismissSound();
  stopAllPortalHovers();
  showAsset(activeRoomIndex);
}

function dismissHaalosGuidance() {
  if (!isHaalosHoverSoundPlaying()) playHaalosDismissSound();
  suppressHaalosHoverDuringFrameChange();
  stopAllPortalHovers();
  showAsset(activeRoomIndex);
}

function dismissNewHerePrompt() {
  playDescendingClickSound();
  if (currentIndex === PORTAL_WALL_LOCKED_INDEX || currentIndex === LEFT_WALL_INDEX) {
    dismissedNewHerePrompts.add(LOCKED_ROOM_INDEX);
    showAsset(LOCKED_ROOM_INDEX);
    return;
  }
  dismissedNewHerePrompts.add(currentIndex);
  showAsset(currentIndex);
}

function clearGoal() {
  playDescendingClickSound();
  goalCleared = true;
  showAsset(LOCKED_ROOM_INDEX);
}

function openRememberActivity() {
  if (isPhosphagenRoomView()) {
    openPhosphagenActivity();
    return;
  }
  if (currentIndex === GLYCOLYTIC_ROOM_INDEX) {
    openGlycolyticRememberActivity();
    return;
  }
  if (isAerobicMainWall()) {
    showAsset(AEROBIC_REMEMBER_ACTIVITY_INDEX);
    return;
  }
  if (isFuelSelectionMainWall()) {
    if (!fuelSelectionRememberComplete && !isFuelSelectionPortalUnlocked()) return;
    openFuelSelectionRememberActivity();
    return;
  }
  showAsset(REMEMBER_ACTIVITY_INDEX);
}

function closeRememberActivity() {
  playDescendingClickSound();
  if (
    currentIndex === AEROBIC_REMEMBER_ACTIVITY_INDEX
    || currentIndex === AEROBIC_REMEMBER_QUICK_CHECK_INDEX
    || currentIndex === AEROBIC_REMEMBER_Q1_CORRECT_INDEX
    || currentIndex === AEROBIC_REMEMBER_QUESTION_TWO_INDEX
    || currentIndex === AEROBIC_REMEMBER_Q2_CORRECT_INDEX
    || currentIndex === AEROBIC_REMEMBER_QUESTION_THREE_INDEX
    || currentIndex === AEROBIC_REMEMBER_Q3_CORRECT_INDEX
  ) {
    showAsset(getAerobicMainRoomIndex());
    return;
  }
  showAsset(activeRoomIndex);
}

function openAerobicRememberQuickCheck() {
  if (aerobicRememberComplete) {
    showAsset(AEROBIC_UNDERSTAND_UNLOCKED_INDEX);
    return;
  }
  playActivityOpenSound();
  showAsset(AEROBIC_REMEMBER_QUICK_CHECK_INDEX);
}

function selectAerobicQuestionOneCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(AEROBIC_REMEMBER_Q1_CORRECT_INDEX);
}

function openAerobicRememberQuestionTwo() {
  playActivityOpenSound();
  showAsset(AEROBIC_REMEMBER_QUESTION_TWO_INDEX);
}

function selectAerobicQuestionTwoCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(AEROBIC_REMEMBER_Q2_CORRECT_INDEX);
}

function openAerobicRememberQuestionThree() {
  playActivityOpenSound();
  showAsset(AEROBIC_REMEMBER_QUESTION_THREE_INDEX);
}

function selectAerobicQuestionThreeCorrectAnswer() {
  playAudioToEnd(correctAnswerAudio);
  aerobicRememberComplete = true;
  saveCourseProgress();
  showAsset(AEROBIC_REMEMBER_Q3_CORRECT_INDEX);
}

function finishAerobicRememberCheck() {
  playAudioToEnd(finishActivityAudio);
  aerobicRememberComplete = true;
  saveCourseProgress();
  showAsset(AEROBIC_UNDERSTAND_UNLOCKED_INDEX);
}

function openRememberQuickCheck() {
  playActivityOpenSound();
  showAsset(QUICK_CHECK_INDEX);
}

function closeRememberQuickCheck() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function selectTinyAmountAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(CORRECT_ANSWER_INDEX);
}

function selectLongLastingReserveAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
  showAsset(QUESTION_ONE_INCORRECT_INDEX);
}

function closeQuestionOneIncorrectAnswer() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function closeCorrectAnswer() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function openQuickCheckQuestionTwo() {
  playActivityOpenSound();
  showAsset(QUESTION_TWO_INDEX);
}

function closeQuickCheckQuestionTwo() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function selectStoresOxygenAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
  showAsset(INCORRECT_ANSWER_INDEX);
}

function selectReleasesEnergyAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(QUESTION_TWO_CORRECT_INDEX);
}

function closeIncorrectAnswer() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function closeQuestionTwoCorrectAnswer() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function openQuickCheckQuestionThree() {
  playActivityOpenSound();
  showAsset(QUESTION_THREE_INDEX);
}

function closeQuickCheckQuestionThree() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function selectAdenosineTriphosphateAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(QUESTION_THREE_CORRECT_INDEX);
}

function finishRememberQuickCheck() {
  playAudioToEnd(finishActivityAudio);
  atpBasicsRememberComplete = true;
  activeRoomIndex = UNLOCKED_AFTER_REMEMBER_INDEX;
  mapPathsVisible = false;
  mapLabelsVisible = true;
  saveCourseProgress();
  showAsset(UNLOCKED_AFTER_REMEMBER_INDEX);
}

function closeQuestionThreeCorrectAnswer() {
  playDescendingClickSound();
  showAsset(activeRoomIndex);
}

function openUnderstandActivity() {
  if (
    currentIndex === LOCKED_ROOM_INDEX
    || currentIndex === PORTAL_WALL_LOCKED_INDEX
    || currentIndex === LEFT_WALL_INDEX
    || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_ROOM_INDEX)
    || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_RIGHT_WALL_INDEX)
    || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_LEFT_WALL_INDEX)
    || (!glycolyticRememberComplete && currentIndex === GLYCOLYTIC_ROOM_INDEX)
    || (!aerobicRememberComplete && isAerobicRoomView(currentIndex))
    || (!fuelSelectionRememberComplete && isFuelSelectionRoomView(currentIndex))
  ) return;
  if (isPhosphagenRoomView()) {
    playActivityOpenSound();
    openPhosphagenUnderstandPractice();
    return;
  }
  if (currentIndex === GLYCOLYTIC_ROOM_INDEX) {
    openGlycolyticUnderstandPractice();
    return;
  }
  if (isAerobicMainWall() && aerobicRememberComplete) {
    playActivityOpenSound();
    showAsset(AEROBIC_UNDERSTAND_ACTIVITY_INDEX);
    return;
  }
  if (isFuelSelectionMainWall() && fuelSelectionRememberComplete) {
    playActivityOpenSound();
    showAsset(FUEL_SELECTION_UNDERSTAND_ACTIVITY_INDEX);
    return;
  }
  if (isAerobicRoomView()) return;
  showAsset(UNDERSTAND_ACTIVITY_INDEX);
}

function closeUnderstandActivity() {
  playDescendingClickSound();
  if (
    currentIndex === AEROBIC_UNDERSTAND_ACTIVITY_INDEX
    || currentIndex === AEROBIC_UNDERSTAND_RESPONSE_INDEX
  ) {
    showAsset(AEROBIC_UNDERSTAND_UNLOCKED_INDEX);
    return;
  }
  showAsset(activeRoomIndex);
}

function openAerobicUnderstandResponse() {
  showAsset(AEROBIC_UNDERSTAND_RESPONSE_INDEX);
}

function submitAerobicUnderstandResponse() {
  playAudioToEnd(finishActivityAudio);
  playAudioToEnd(mapCircleInAudio);
  playPortalUnlockSound();
  aerobicRememberComplete = true;
  aerobicSystemComplete = true;
  saveCourseProgress();
  showAsset(AEROBIC_COMPLETE_INDEX);
}

function openUnderstandResponse() {
  showAsset(UNDERSTAND_RESPONSE_INDEX);
}

function restartPortalHoverAudio() {
  if (portalUnlockTimer !== null) {
    window.clearTimeout(portalUnlockTimer);
    portalUnlockTimer = null;
  }
  if (portalFadeTimer !== null) {
    window.clearInterval(portalFadeTimer);
    portalFadeTimer = null;
  }

  portalHoverAudio.pause();
  portalHoverAudio.currentTime = 0;
  portalHoverAudio.volume = 1;
  portalHoverAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
}

function startPortalHoverSound(event) {
  const isPhosphagenReturnPortal = event.currentTarget === phosphagenAtpPortalHotspot;
  const isFuelSelectionPortal = event.currentTarget === glycolyticFuelPortalHotspot;
  if (isFuelSelectionPortal) {
    if (!isFuelSelectionPortalUnlocked()) return;
    restartPortalHoverAudio();
    return;
  }
  const portalRoomName = event.currentTarget.dataset.portal;
  if (!isPhosphagenReturnPortal && !isMapRoomUnlocked(portalRoomName)) return;
  restartPortalHoverAudio();
}

function activateFuelSelectionPortal() {
  if (!isFuelSelectionPortalUnlocked()) {
    playAudioToEnd(lockedPortalAudio);
    return;
  }

  stopAllPortalHovers();
  fadeAmbientForPortal();
  playAudioToEnd(portalTraverseAudio);
  showAsset(FUEL_SELECTION_ROOM_INDEX);
}

function updateAerobicLinkedPortalStates() {
  aerobicLinkedPortalHotspots.forEach((hotspot) => {
    const roomName = hotspot.dataset.portal;
    const isUnlocked = isMapRoomUnlocked(roomName);
    const label = isUnlocked ? `${roomName} portal is unlocked` : getMapRoomLockMessage(roomName);
    hotspot.setAttribute("aria-disabled", String(!isUnlocked));
    hotspot.setAttribute("aria-label", label);
    hotspot.title = label;
  });
}

function activateAerobicLinkedPortal(event) {
  const roomName = event.currentTarget.dataset.portal;
  if (!isMapRoomUnlocked(roomName)) {
    playAudioToEnd(lockedPortalAudio);
    return;
  }

  if (roomName === "Fuel selection") {
    activateFuelSelectionPortal();
    return;
  }

  stopAllPortalHovers();
  playAudioToEnd(portalTraverseAudio);
}

function playPortalUnlockSound() {
  restartPortalHoverAudio();

  portalUnlockTimer = window.setTimeout(() => {
    portalUnlockTimer = null;
    fadeOutPortalAudio();
  }, 2500);
}

function submitUnderstandResponse() {
  playAudioToEnd(mapCircleInAudio);
  playPortalUnlockSound();
  atpBasicsRememberComplete = true;
  atpBasicsComplete = true;
  activeRoomIndex = UNDERSTAND_COMPLETE_INDEX;
  saveCourseProgress();
  showAsset(UNDERSTAND_COMPLETE_INDEX);
}

function setLinkedActivityState(activityName, isActive) {
  imageCanvas.classList.toggle(`is-${activityName}-linked`, isActive);
}

function areAtpSystemPortalsUnlocked() {
  return ["Phosphagen system", "Glycolytic system", "Aerobic system"]
    .every((roomName) => isMapRoomUnlocked(roomName));
}

function fadeOutPortalAudio() {
  if (portalFadeTimer !== null) return;
  if (portalHoverAudio.paused) {
    portalHoverAudio.currentTime = 0;
    portalHoverAudio.volume = 0;
    return;
  }

  const startingVolume = portalHoverAudio.volume;
  const fadeStartedAt = performance.now();

  portalFadeTimer = window.setInterval(() => {
    const progress = Math.min((performance.now() - fadeStartedAt) / portalFadeDuration, 1);
    portalHoverAudio.volume = Math.max(0, startingVolume * (1 - progress));
    if (progress < 1) return;

    window.clearInterval(portalFadeTimer);
    portalFadeTimer = null;
    portalHoverAudio.volume = 0;
    portalHoverAudio.pause();
    portalHoverAudio.currentTime = 0;
  }, portalFadeInterval);
}

function stopAllPortalHovers() {
  if (portalUnlockTimer !== null) {
    window.clearTimeout(portalUnlockTimer);
    portalUnlockTimer = null;
  }
  fadeOutPortalAudio();
}

function playPortalTraversal(event) {
  const portalRoomName = event.currentTarget.dataset.portal;
  if (!isMapRoomUnlocked(portalRoomName)) {
    playAudioToEnd(lockedPortalAudio);
    return;
  }
  stopAllPortalHovers();
  fadeAmbientForPortal();
  portalTraverseAudio.pause();
  portalTraverseAudio.currentTime = 0;
  portalTraverseAudio.volume = 1;
  portalTraverseAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });

  if (event.currentTarget.dataset.portal === "Phosphagen system") {
    showAsset(PHOSPHAGEN_ROOM_INDEX);
    return;
  }

  if (event.currentTarget.dataset.portal === "Glycolytic system") {
    showAsset(GLYCOLYTIC_ROOM_INDEX);
    return;
  }

  if (event.currentTarget.dataset.portal === "Aerobic system") {
    showAsset(getAerobicMainRoomIndex());
  }
}

function playActivityOpenSound() {
  activityOpenAudio.pause();
  activityOpenAudio.currentTime = 0;
  activityOpenAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
}

function updateMapStateFrame() {
  const bothFeaturesVisible = mapPathsVisible && mapLabelsVisible;
  const mapSource = withAssetCacheVersion(bothFeaturesVisible
    ? "assets/atlas-quest-map-paths-labels-on-ss.png"
    : "assets/atlas-quest-map-paths-labels-off-ss.png");

  imageCanvas.classList.remove("is-map-reference-progress-frame");
  imageCanvas.classList.toggle("is-map-base-off-frame", !bothFeaturesVisible);
  imageCanvas.classList.toggle("map-labels-visible", mapLabelsVisible);

  if (currentIndex === QUEST_MAP_INDEX && mainImage.getAttribute("src") !== mapSource) {
    mainImage.src = mapSource;
  }

  imageCanvas.classList.toggle(
    "map-paths-overlay-active",
    mapPathsVisible && !bothFeaturesVisible
  );
  imageCanvas.classList.toggle(
    "map-labels-overlay-active",
    mapLabelsVisible && !bothFeaturesVisible
  );
  showPathsToggleHotspot.classList.toggle(
    "is-overlay-checked",
    mapPathsVisible && !bothFeaturesVisible
  );
  showLabelsToggleHotspot.classList.toggle(
    "is-overlay-checked",
    mapLabelsVisible && !bothFeaturesVisible
  );
  showPathsToggleHotspot.setAttribute("aria-pressed", String(mapPathsVisible));
  showLabelsToggleHotspot.setAttribute("aria-pressed", String(mapLabelsVisible));
  updateMapRoomHotspotStates();
}

function toggleMapPaths() {
  mapPathsVisible = !mapPathsVisible;
  if (mapPathsVisible) playAscendingClickSound();
  else playDescendingClickSound();
  updateMapStateFrame();
}

function toggleMapLabels() {
  mapLabelsVisible = !mapLabelsVisible;
  if (mapLabelsVisible) playAscendingClickSound();
  else playDescendingClickSound();
  updateMapStateFrame();
}

function clearAskResponseReturnTimer() {
  if (askResponseReturnTimer === null) return;
  window.clearTimeout(askResponseReturnTimer);
  askResponseReturnTimer = null;
}

function showAsset(index) {
  currentIndex = (index + assets.length) % assets.length;
  setPhosphagenGuidanceVisible(false);
  setPhosphagenActivityVisible(false);
  setGlycolyticActivityVisible(false);
  if (currentIndex !== ASK_HAALOS_INDEX) clearAskResponseReturnTimer();
  const asset = assets[currentIndex];

  if (currentIndex === COURSE_HOME_INDEX) fadeOutRoomAmbience();
  else if (isRoomAudioContext() && !ambienceActive) startRoomAmbience();
  syncRoomBeepsForContext();

  if (
    currentIndex === LOCKED_ROOM_INDEX
    || currentIndex === QUEST_ROOM_INDEX
    || currentIndex === UNLOCKED_AFTER_REMEMBER_INDEX
    || currentIndex === UNDERSTAND_COMPLETE_INDEX
    || currentIndex === BIOENERGETICS_PROGRESS_INDEX
    || currentIndex === ATP_BASICS_HAALOS_NEXT_GLYCOLYTIC_INDEX
  ) {
    activeRoomIndex = currentIndex;
  }

  mainImage.classList.add("is-changing");
  window.setTimeout(() => {
    const isNewHerePromptDismissed = dismissedNewHerePrompts.has(currentIndex);

    const usesCompletedGlycolyticFrame = (
      (currentIndex === GLYCOLYTIC_ROOM_INDEX && glycolyticRememberComplete)
      || (currentIndex === GLYCOLYTIC_RIGHT_WALL_INDEX && glycolyticUnderstandComplete)
    );
    const displaySource = usesCompletedGlycolyticFrame
      ? asset.completedSrc
      : currentIndex === LOCKED_ROOM_INDEX && goalCleared
        ? asset.clearedGoalSrc
        : currentIndex === LOCKED_ROOM_INDEX && isNewHerePromptDismissed
          ? asset.dismissedSrc
          : asset.src;
    mainImage.src = withAssetCacheVersion(displaySource);
    mainImage.alt = usesCompletedGlycolyticFrame && asset.completedAlt
      ? asset.completedAlt
      : asset.alt;
    title.textContent = asset.title;
    type.textContent = asset.type;
    description.textContent = usesCompletedGlycolyticFrame && asset.completedDescription
      ? asset.completedDescription
      : asset.description;
    fileName.textContent = usesCompletedGlycolyticFrame && asset.completedFileName
      ? asset.completedFileName
      : asset.fileName;
    count.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(assets.length).padStart(2, "0")}`;
    imageCanvas.classList.toggle("is-course-active", currentIndex === COURSE_HOME_INDEX);
    imageCanvas.classList.toggle("is-map-active", currentIndex === QUEST_MAP_INDEX);
    imageCanvas.classList.toggle(
      "is-phosphagen-map-complete",
      currentIndex === QUEST_MAP_INDEX && phosphagenUnderstandComplete
    );
    imageCanvas.classList.toggle(
      "is-locked-room-active",
      currentIndex === LOCKED_ROOM_INDEX || currentIndex === PORTAL_WALL_LOCKED_INDEX
    );
    const isUnderstandActivityLocked = currentIndex === LOCKED_ROOM_INDEX
      || currentIndex === PORTAL_WALL_LOCKED_INDEX
      || currentIndex === LEFT_WALL_INDEX
      || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_ROOM_INDEX)
      || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_RIGHT_WALL_INDEX)
      || (!phosphagenRememberComplete && currentIndex === PHOSPHAGEN_LEFT_WALL_INDEX)
      || (!glycolyticRememberComplete && isGlycolyticRoomView())
      || (!aerobicRememberComplete && isAerobicRoomView(currentIndex))
      || (!fuelSelectionRememberComplete && isFuelSelectionRoomView(currentIndex));
    understandActivityHotspot.setAttribute("aria-disabled", String(isUnderstandActivityLocked));
    understandActivityHotspot.setAttribute(
      "aria-label",
      isUnderstandActivityLocked ? "Understand activity is locked" : "Open Understand activity"
    );
    understandActivityHotspot.title = isUnderstandActivityLocked
      ? "Understand activity is locked"
      : "Open Understand activity";
    const isRememberActivityLocked = (
      isFuelSelectionMainWall()
      && !fuelSelectionRememberComplete
      && !isFuelSelectionPortalUnlocked()
    );
    const rememberActivityLabel = isRememberActivityLocked
      ? "Complete Aerobic System and Glycolytic System to unlock Remember"
      : fuelSelectionRememberComplete && isFuelSelectionMainWall()
        ? "Review Remember activity"
        : "Open Remember activity";
    [rememberActivityHotspot, bottomRememberHotspot].forEach((hotspot) => {
      hotspot.setAttribute("aria-disabled", String(isRememberActivityLocked));
      hotspot.setAttribute("aria-label", rememberActivityLabel);
      hotspot.title = rememberActivityLabel;
      hotspot.style.cursor = isRememberActivityLocked ? "not-allowed" : "";
    });
    imageCanvas.classList.toggle("has-new-here-prompt", NEW_HERE_ROOM_INDEXES.has(currentIndex));
    imageCanvas.classList.toggle(
      "is-room-active",
      currentIndex === QUEST_ROOM_INDEX
        || currentIndex === UNLOCKED_AFTER_REMEMBER_INDEX
        || currentIndex === UNDERSTAND_COMPLETE_INDEX
        || currentIndex === BIOENERGETICS_PROGRESS_INDEX
        || currentIndex === PORTAL_WALL_UNLOCKED_INDEX
        || currentIndex === ATP_BASICS_HAALOS_NEXT_GLYCOLYTIC_INDEX
    );
    imageCanvas.classList.toggle("is-quest-room-active", currentIndex === QUEST_ROOM_INDEX);
    imageCanvas.classList.toggle(
      "is-understand-unlocked-room",
      currentIndex === UNLOCKED_AFTER_REMEMBER_INDEX
    );
    const portalsUnlocked = areAtpSystemPortalsUnlocked();
    imageCanvas.classList.toggle("is-portals-unlocked", portalsUnlocked);
    imageCanvas.classList.toggle(
      "is-understand-complete-room",
      currentIndex === UNDERSTAND_COMPLETE_INDEX
        || currentIndex === BIOENERGETICS_PROGRESS_INDEX
    );
    portalHotspots.forEach((portal) => {
      const portalName = portal.dataset.portal;
      const portalUnlocked = isMapRoomUnlocked(portalName);
      portal.disabled = false;
      portal.setAttribute("aria-disabled", String(!portalUnlocked));
      portal.setAttribute(
        "aria-label",
        portalUnlocked ? `Activate portal ${portalName}` : getMapRoomLockMessage(portalName)
      );
      portal.title = portalUnlocked
        ? `Activate portal ${portalName}`
        : getMapRoomLockMessage(portalName);
    });
    imageCanvas.classList.toggle("is-tour-active", currentIndex === TOUR_INDEX);
    imageCanvas.classList.toggle("is-remember-frame-active", currentIndex === REMEMBER_ACTIVITY_INDEX);
    imageCanvas.classList.toggle("is-quick-check-active", currentIndex === QUICK_CHECK_INDEX);
    imageCanvas.classList.toggle("is-question-one-incorrect-active", currentIndex === QUESTION_ONE_INCORRECT_INDEX);
    imageCanvas.classList.toggle("is-correct-answer-active", currentIndex === CORRECT_ANSWER_INDEX);
    imageCanvas.classList.toggle("is-question-two-active", currentIndex === QUESTION_TWO_INDEX);
    imageCanvas.classList.toggle("is-incorrect-answer-active", currentIndex === INCORRECT_ANSWER_INDEX);
    imageCanvas.classList.toggle("is-question-three-active", currentIndex === QUESTION_THREE_INDEX);
    imageCanvas.classList.toggle("is-question-three-correct-active", currentIndex === QUESTION_THREE_CORRECT_INDEX);
    imageCanvas.classList.toggle("is-understand-frame-active", currentIndex === UNDERSTAND_ACTIVITY_INDEX);
    imageCanvas.classList.toggle("is-understand-response-active", currentIndex === UNDERSTAND_RESPONSE_INDEX);
    imageCanvas.classList.toggle("is-question-two-correct-active", currentIndex === QUESTION_TWO_CORRECT_INDEX);
    imageCanvas.classList.toggle("is-haalos-active", currentIndex === HAALOS_GUIDANCE_INDEX);
    imageCanvas.classList.toggle("is-ask-response-active", currentIndex === ASK_HAALOS_INDEX);
    imageCanvas.classList.toggle(
      "is-portal-wall-active",
      currentIndex === PORTAL_WALL_LOCKED_INDEX || currentIndex === PORTAL_WALL_UNLOCKED_INDEX
    );
    imageCanvas.classList.toggle(
      "is-portal-wall-locked",
      currentIndex === PORTAL_WALL_LOCKED_INDEX
    );
    imageCanvas.classList.toggle(
      "is-portal-wall-unlocked",
      currentIndex === PORTAL_WALL_UNLOCKED_INDEX
    );
    imageCanvas.classList.toggle("is-left-wall-active", currentIndex === LEFT_WALL_INDEX);
    imageCanvas.classList.toggle("is-phosphagen-room-active", currentIndex === PHOSPHAGEN_ROOM_INDEX);
    imageCanvas.classList.toggle("is-glycolytic-room-active", isGlycolyticRoomView());
    imageCanvas.classList.toggle("is-aerobic-room-active", isAerobicRoomView());
    imageCanvas.classList.toggle("is-fuel-selection-room-active", isFuelSelectionRoomView());
    imageCanvas.classList.toggle(
      "is-fuel-selection-right-wall-active",
      currentIndex === FUEL_SELECTION_RIGHT_WALL_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-left-wall-active",
      currentIndex === FUEL_SELECTION_LEFT_WALL_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-remember-active",
      currentIndex === AEROBIC_REMEMBER_ACTIVITY_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-quick-check-active",
      currentIndex === AEROBIC_REMEMBER_QUICK_CHECK_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-q1-correct-active",
      currentIndex === AEROBIC_REMEMBER_Q1_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-question-two-active",
      currentIndex === AEROBIC_REMEMBER_QUESTION_TWO_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-q2-correct-active",
      currentIndex === AEROBIC_REMEMBER_Q2_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-question-three-active",
      currentIndex === AEROBIC_REMEMBER_QUESTION_THREE_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-q3-correct-active",
      currentIndex === AEROBIC_REMEMBER_Q3_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-understand-active",
      currentIndex === AEROBIC_UNDERSTAND_ACTIVITY_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-understand-response-active",
      currentIndex === AEROBIC_UNDERSTAND_RESPONSE_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-remember-active",
      currentIndex === FUEL_SELECTION_REMEMBER_ACTIVITY_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q1-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q1_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q1-incorrect-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q1_INCORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q1-correct-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q1_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q2-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q2_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q2-correct-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q2_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q3-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q3_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q3-incorrect-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q3_INCORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-q3-correct-active",
      currentIndex === FUEL_SELECTION_REMEMBER_Q3_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-understand-active",
      currentIndex >= FUEL_SELECTION_UNDERSTAND_ACTIVITY_INDEX
        && currentIndex <= FUEL_SELECTION_UNDERSTAND_SOLVED_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-understand-start",
      currentIndex === FUEL_SELECTION_UNDERSTAND_ACTIVITY_INDEX
    );
    FUEL_SELECTION_BULB_SELECTED_INDEXES.forEach((assetIndex, step) => {
      imageCanvas.classList.toggle(
        `is-fuel-selection-bulb${step + 1}-selected`,
        currentIndex === assetIndex
      );
    });
    FUEL_SELECTION_BULB_CORRECT_INDEXES.forEach((assetIndex, step) => {
      imageCanvas.classList.toggle(
        `is-fuel-selection-bulb${step + 1}-correct`,
        currentIndex === assetIndex
      );
    });
    imageCanvas.classList.toggle(
      "is-fuel-selection-understand-solved",
      currentIndex === FUEL_SELECTION_UNDERSTAND_SOLVED_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-understand-complete",
      currentIndex === FUEL_SELECTION_UNDERSTAND_COMPLETE_INDEX
    );
    updateFuelSelectionBulbHotspotStates();
    imageCanvas.classList.toggle(
      "is-fuel-selection-apply-active",
      currentIndex >= FUEL_SELECTION_APPLY_Q1_INDEX
        && currentIndex <= FUEL_SELECTION_APPLY_Q2_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-apply-q1-active",
      currentIndex === FUEL_SELECTION_APPLY_Q1_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-apply-q1-correct-active",
      currentIndex === FUEL_SELECTION_APPLY_Q1_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-apply-q2-active",
      currentIndex === FUEL_SELECTION_APPLY_Q2_INDEX
    );
    imageCanvas.classList.toggle(
      "is-fuel-selection-apply-q2-correct-active",
      currentIndex === FUEL_SELECTION_APPLY_Q2_CORRECT_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-right-wall-active",
      currentIndex === AEROBIC_RIGHT_WALL_INDEX
        || currentIndex === AEROBIC_RIGHT_WALL_COMPLETE_INDEX
    );
    imageCanvas.classList.toggle(
      "is-aerobic-left-wall-active",
      currentIndex === AEROBIC_LEFT_WALL_INDEX
        || currentIndex === AEROBIC_LEFT_WALL_COMPLETE_INDEX
    );
    imageCanvas.classList.toggle(
      "is-glycolytic-right-wall-active",
      currentIndex === GLYCOLYTIC_RIGHT_WALL_INDEX
    );
    imageCanvas.classList.toggle("is-glycolytic-remember-complete", glycolyticRememberComplete);
    imageCanvas.classList.toggle("is-glycolytic-understand-complete", glycolyticUnderstandComplete);
    imageCanvas.classList.toggle("is-fuel-selection-remember-complete", fuelSelectionRememberComplete);
    imageCanvas.classList.toggle("is-fuel-selection-understand-progress-complete", fuelSelectionUnderstandComplete);
    imageCanvas.classList.toggle("is-phosphagen-remember-complete", phosphagenRememberComplete);
    imageCanvas.classList.toggle("is-phosphagen-understand-complete", phosphagenUnderstandComplete);
    imageCanvas.classList.toggle(
      "is-phosphagen-right-wall-active",
      currentIndex === PHOSPHAGEN_RIGHT_WALL_INDEX
    );
    imageCanvas.classList.toggle(
      "is-phosphagen-left-wall-active",
      currentIndex === PHOSPHAGEN_LEFT_WALL_INDEX
    );
    imageCanvas.classList.toggle(
      "is-intro-prompt-dismissed",
      isNewHerePromptDismissed
    );
    imageCanvas.classList.toggle(
      "is-goal-cleared",
      currentIndex === LOCKED_ROOM_INDEX && goalCleared
    );
    const fuelSelectionUnlocked = isFuelSelectionPortalUnlocked();
    glycolyticFuelPortalHotspot.setAttribute("aria-disabled", String(!fuelSelectionUnlocked));
    glycolyticFuelPortalHotspot.setAttribute(
      "aria-label",
      fuelSelectionUnlocked ? "Enter Fuel Selection room" : "Fuel Selection portal is locked"
    );
    glycolyticFuelPortalHotspot.title = fuelSelectionUnlocked
      ? "Enter Fuel Selection room"
      : "Complete both the Glycolytic and Aerobic System rooms to unlock Fuel Selection";
    updateAerobicLinkedPortalStates();
    if (currentIndex === QUEST_MAP_INDEX) updateMapStateFrame();
    mainImage.classList.remove("is-changing");
  }, 140);

  if (
    currentIndex !== QUEST_ROOM_INDEX
    && currentIndex !== UNLOCKED_AFTER_REMEMBER_INDEX
    && currentIndex !== UNDERSTAND_COMPLETE_INDEX
    && currentIndex !== BIOENERGETICS_PROGRESS_INDEX
    && currentIndex !== PORTAL_WALL_LOCKED_INDEX
    && currentIndex !== PORTAL_WALL_UNLOCKED_INDEX
  ) {
    stopAllPortalHovers();
    setLinkedActivityState("remember", false);
    setLinkedActivityState("understand", false);
  }

  cards.forEach((card, cardIndex) => {
    const isActive = cardIndex === currentIndex;
    card.classList.toggle("is-active", isActive);
    if (isActive) card.setAttribute("aria-current", "true");
    else card.removeAttribute("aria-current");
  });
}

mapHotspots.forEach((hotspot) => {
  hotspot.addEventListener("pointerenter", playMapCircleInSound);
  hotspot.addEventListener("pointerleave", playMapCircleOutSound);
});
smallMapHotspots.forEach((hotspot) => {
  hotspot.addEventListener("pointerenter", playSmallMapHoverSound);
  hotspot.addEventListener("pointerleave", playSmallMapHoverSound);
  hotspot.addEventListener("click", activateMapRoom);
});
mapBottomActivityHotspots.forEach((hotspot) => {
  hotspot.addEventListener("pointerenter", playActivityHoverInSound);
  hotspot.addEventListener("pointerleave", playActivityHoverOutSound);
});
portalHotspots.forEach((portal) => {
  portal.addEventListener("pointerenter", startPortalHoverSound);
  portal.addEventListener("pointerleave", stopAllPortalHovers);
  portal.addEventListener("pointerdown", stopAllPortalHovers);
  portal.addEventListener("click", playPortalTraversal);
});
phosphagenAtpPortalHotspot.addEventListener("pointerenter", startPortalHoverSound);
phosphagenAtpPortalHotspot.addEventListener("pointerleave", stopAllPortalHovers);
phosphagenAtpPortalHotspot.addEventListener("pointerdown", stopAllPortalHovers);
phosphagenAtpPortalHotspot.addEventListener("click", enterAtpBasicsRoom);
glycolyticFuelPortalHotspot.addEventListener("pointerenter", startPortalHoverSound);
glycolyticFuelPortalHotspot.addEventListener("pointerleave", stopAllPortalHovers);
glycolyticFuelPortalHotspot.addEventListener("pointerdown", stopAllPortalHovers);
glycolyticFuelPortalHotspot.addEventListener("click", activateFuelSelectionPortal);
aerobicLinkedPortalHotspots.forEach((hotspot) => {
  hotspot.addEventListener("pointerenter", startPortalHoverSound);
  hotspot.addEventListener("pointerleave", stopAllPortalHovers);
  hotspot.addEventListener("pointerdown", stopAllPortalHovers);
  hotspot.addEventListener("click", activateAerobicLinkedPortal);
});
activityHotspots.forEach((activity) => {
  activity.addEventListener("click", () => {
    activityHoverOutSuppression.set(activity, performance.now() + 500);
    if (isLockedActivityHotspot(activity)) {
      playLockedActivitySound();
      return;
    }
    playActivityClickSound();
  });
  activity.addEventListener("pointerenter", () => {
    if (isLockedActivityHotspot(activity)) return;
    playActivityHoverInSound();
  });
  activity.addEventListener("pointerleave", () => {
    if (isLockedActivityHotspot(activity)) return;
    const suppressUntil = activityHoverOutSuppression.get(activity) ?? 0;
    activityHoverOutSuppression.delete(activity);
    if (performance.now() < suppressUntil) return;
    playActivityHoverOutSound();
  });
});
bottomRememberHotspot.addEventListener("pointerenter", () => setLinkedActivityState("remember", true));
bottomRememberHotspot.addEventListener("pointerleave", () => setLinkedActivityState("remember", false));
bottomUnderstandHotspot.addEventListener("pointerenter", () => setLinkedActivityState("understand", true));
bottomUnderstandHotspot.addEventListener("pointerleave", () => setLinkedActivityState("understand", false));
rememberActivityHotspot.addEventListener("click", openRememberActivity);
bottomRememberHotspot.addEventListener("click", openRememberActivity);
understandActivityHotspot.addEventListener("click", openUnderstandActivity);
bottomUnderstandHotspot.addEventListener("click", openUnderstandActivity);
mapOpenHotspot.addEventListener("click", openMapFromRoom);
mapCloseHotspot.addEventListener("click", closeMapToRoom);
showPathsToggleHotspot.addEventListener("click", toggleMapPaths);
showLabelsToggleHotspot.addEventListener("click", toggleMapLabels);
enterCourseHotspot.addEventListener("click", enterCourse);
enterCourseHotspot.addEventListener("pointerenter", playSmallMapHoverSound);
resetProgressHoverHotspot.addEventListener("click", resetCourseProgress);
[
  superUserHoverHotspot,
  resetProgressHoverHotspot,
  roomExitHotspot,
  roomProgressHoverHotspot,
  tourOpenHotspot,
  roomAskHoverHotspot,
  mapOpenHotspot
].forEach((hotspot) => hotspot.addEventListener("pointerenter", playSmallMapHoverSound));
lockedNotNowHotspot.addEventListener("click", dismissNewHerePrompt);
lockedNotNowHotspot.addEventListener("pointerenter", playSmallMapHoverSound);
lockedStartTourHotspot.addEventListener("click", openRoomTour);
lockedStartTourHotspot.addEventListener("pointerenter", playSmallMapHoverSound);
clearGoalHotspot.addEventListener("click", clearGoal);
roomExitHotspot.addEventListener("click", exitQuestRoom);
roomProgressHoverHotspot.addEventListener("click", openBioenergeticsProgress);
roomRightWallHotspot.addEventListener("click", openPortalWallView);
roomLeftWallHotspot.addEventListener("click", openLeftWallView);
sideMainWallHotspot.addEventListener("click", returnToMainWall);
tourOpenHotspot.addEventListener("click", openRoomTour);
roomAskHoverHotspot.addEventListener("click", openHaalosAskResponse);
phosphagenActivityCloseButton.addEventListener("click", closePhosphagenActivity);
glycolyticActivityCloseButton.addEventListener("click", closeGlycolyticRememberActivity);
glycolyticQuickCheckButton.addEventListener("click", openGlycolyticQuickCheck);
glycolyticQuickCheckCloseButton.addEventListener("click", closeGlycolyticRememberActivity);
glycolyticQuestionOneCorrectOption.addEventListener("click", selectGlycolyticQuestionOneCorrectAnswer);
glycolyticQuestionOneNextButton.addEventListener("click", openGlycolyticQuestionTwo);
glycolyticQuestionTwoCloseButton.addEventListener("click", closeGlycolyticRememberActivity);
glycolyticQuestionTwoCorrectOption.addEventListener("click", selectGlycolyticQuestionTwoCorrectAnswer);
glycolyticQuestionTwoNextButton.addEventListener("click", openGlycolyticQuestionThree);
glycolyticQuestionThreeCloseButton.addEventListener("click", closeGlycolyticRememberActivity);
glycolyticQuestionThreeCorrectOption.addEventListener("click", selectGlycolyticQuestionThreeCorrectAnswer);
glycolyticQuestionThreeFinishButton.addEventListener("click", finishGlycolyticRememberCheck);
glycolyticUnderstandCloseButton.addEventListener("click", closeGlycolyticRememberActivity);
glycolyticUnderstandCorrectOption.addEventListener("click", selectGlycolyticUnderstandCorrectAnswer);
glycolyticUnderstandNextButton.addEventListener("click", openGlycolyticUnderstandQuestionTwo);
glycolyticUnderstandTwoCloseButton.addEventListener("click", closeGlycolyticRememberActivity);
glycolyticUnderstandTwoCorrectOption.addEventListener("click", selectGlycolyticUnderstandTwoCorrectAnswer);
glycolyticUnderstandFinishButton.addEventListener("click", finishGlycolyticUnderstandPractice);
phosphagenQuickCheckCloseButton.addEventListener("click", closePhosphagenActivity);
phosphagenQuickCheckButton.addEventListener("click", openPhosphagenQuickCheck);
phosphagenCorrectOption.addEventListener("click", selectPhosphagenCorrectAnswer);
phosphagenNextQuestionButton.addEventListener("click", openPhosphagenQuestionTwo);
phosphagenQuestionTwoCloseButton.addEventListener("click", closePhosphagenActivity);
phosphagenQuestionTwoCorrectOption.addEventListener("click", selectPhosphagenQuestionTwoCorrectAnswer);
phosphagenFinishCheckButton.addEventListener("click", finishPhosphagenRememberCheck);
phosphagenUnderstandCloseButton.addEventListener("click", closePhosphagenActivity);
phosphagenUnderstandCorrectOption.addEventListener("click", selectPhosphagenUnderstandCorrectAnswer);
phosphagenUnderstandNextButton.addEventListener("click", openPhosphagenUnderstandQuestionTwo);
phosphagenUnderstandTwoCloseButton.addEventListener("click", closePhosphagenActivity);
phosphagenUnderstandTwoCorrectOption.addEventListener("click", selectPhosphagenUnderstandTwoCorrectAnswer);
phosphagenUnderstandFinishButton.addEventListener("click", finishPhosphagenUnderstandPractice);
phosphagenHelpDismissButton.addEventListener("click", () => {
  phosphagenActivityOverlay.classList.add("is-help-dismissed");
});
glycolyticHelpDismissButton.addEventListener("click", () => {
  glycolyticActivityOverlay.classList.add("is-help-dismissed");
});
tourExitHotspot.addEventListener("click", exitQuestRoom);
tourSkipHotspot.addEventListener("click", skipRoomTour);
roomHaalosHotspots.forEach((hotspot) => hotspot.addEventListener("click", openHaalosGuidance));
tourHaalosHotspot.addEventListener("click", dismissHaalosGuidance);
haalosFrameRobotHotspot.addEventListener("click", dismissHaalosGuidance);
allHaalosHotspots.forEach((hotspot) => hotspot.addEventListener("mouseenter", playHaalosHoverReaction));
haalosFrameExitHotspot.addEventListener("click", exitQuestRoom);
haalosFrameTourHotspot.addEventListener("click", openRoomTour);
haalosFrameMapHotspot.addEventListener("click", openMapFromRoom);
rememberFrameExitHotspot.addEventListener("click", exitQuestRoom);
rememberFrameCloseHotspot.addEventListener("click", closeRememberActivity);
rememberQuickCheckHotspot.addEventListener("click", openRememberQuickCheck);
aerobicRememberExitHotspot.addEventListener("click", exitQuestRoom);
aerobicRememberCloseHotspot.addEventListener("click", closeRememberActivity);
aerobicRememberQuickCheckHotspot.addEventListener("click", openAerobicRememberQuickCheck);
aerobicQuestionOneCorrectHotspot.addEventListener("click", selectAerobicQuestionOneCorrectAnswer);
aerobicQuestionOneNextHotspot.addEventListener("click", openAerobicRememberQuestionTwo);
aerobicQuestionTwoCorrectHotspot.addEventListener("click", selectAerobicQuestionTwoCorrectAnswer);
aerobicQuestionTwoNextHotspot.addEventListener("click", openAerobicRememberQuestionThree);
aerobicQuestionThreeCorrectHotspot.addEventListener("click", selectAerobicQuestionThreeCorrectAnswer);
aerobicQuestionThreeFinishHotspot.addEventListener("click", finishAerobicRememberCheck);
aerobicUnderstandExitHotspot.addEventListener("click", exitQuestRoom);
aerobicUnderstandCloseHotspot.addEventListener("click", closeUnderstandActivity);
aerobicUnderstandStopHotspot.addEventListener("click", closeUnderstandActivity);
aerobicUnderstandTextboxHotspot.addEventListener("click", openAerobicUnderstandResponse);
aerobicUnderstandSubmitHotspot.addEventListener("click", submitAerobicUnderstandResponse);
fuelSelectionRememberExitHotspot.addEventListener("click", exitQuestRoom);
fuelSelectionRememberCloseHotspot.addEventListener("click", closeFuelSelectionRememberActivity);
fuelSelectionRememberQuickCheckHotspot.addEventListener("click", openFuelSelectionRememberQuickCheck);
fuelSelectionQuestionOneCorrectHotspot.addEventListener("click", selectFuelSelectionQuestionOneCorrectAnswer);
fuelSelectionQuestionOneIncorrectHotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", selectFuelSelectionQuestionOneIncorrectAnswer);
});
fuelSelectionQuestionOneNextHotspot.addEventListener("click", openFuelSelectionRememberQuestionTwo);
fuelSelectionQuestionTwoCorrectHotspot.addEventListener("click", selectFuelSelectionQuestionTwoCorrectAnswer);
fuelSelectionQuestionTwoNextHotspot.addEventListener("click", openFuelSelectionRememberQuestionThree);
fuelSelectionQuestionThreeIncorrectHotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", selectFuelSelectionQuestionThreeIncorrectAnswer);
});
fuelSelectionQuestionThreeCorrectHotspot.addEventListener("click", selectFuelSelectionQuestionThreeCorrectAnswer);
fuelSelectionQuestionThreeFinishHotspot.addEventListener("click", finishFuelSelectionRememberCheck);
fuelSelectionUnderstandCloseHotspot.addEventListener("click", closeFuelSelectionUnderstandActivity);
fuelSelectionBulbHotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", selectFuelSelectionBulb);
});
fuelSelectionCarbBoxHotspot.addEventListener("click", () => sortFuelSelectionBulb("carbohydrate"));
fuelSelectionFatBoxHotspot.addEventListener("click", () => sortFuelSelectionBulb("fat"));
fuelSelectionUnderstandDoneHotspot.addEventListener("click", finishFuelSelectionUnderstandActivity);
fuelSelectionApplyRoomHotspot.addEventListener("click", openFuelSelectionApplyActivity);
fuelSelectionApplyCloseHotspot.addEventListener("click", closeFuelSelectionApplyActivity);
fuelSelectionApplyQuestionOneWrongHotspot.addEventListener("click", selectFuelSelectionApplyWrongAnswer);
fuelSelectionApplyQuestionOneCorrectHotspot.addEventListener("click", selectFuelSelectionApplyQuestionOneCorrect);
fuelSelectionApplyQuestionOneNextHotspot.addEventListener("click", openFuelSelectionApplyQuestionTwo);
fuelSelectionApplyQuestionTwoWrongHotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", selectFuelSelectionApplyWrongAnswer);
});
fuelSelectionApplyQuestionTwoCorrectHotspot.addEventListener("click", selectFuelSelectionApplyQuestionTwoCorrect);
quickCheckExitHotspot.addEventListener("click", exitQuestRoom);
quickCheckCloseHotspot.addEventListener("click", closeRememberQuickCheck);
longLastingReserveAnswerHotspot.addEventListener("click", selectLongLastingReserveAnswer);
tinyAmountAnswerHotspot.addEventListener("click", selectTinyAmountAnswer);
questionOneIncorrectExitHotspot.addEventListener("click", exitQuestRoom);
questionOneIncorrectCloseHotspot.addEventListener("click", closeQuestionOneIncorrectAnswer);
questionOneIncorrectNextHotspot.addEventListener("click", openQuickCheckQuestionTwo);
correctAnswerExitHotspot.addEventListener("click", exitQuestRoom);
correctAnswerCloseHotspot.addEventListener("click", closeCorrectAnswer);
correctAnswerNextHotspot.addEventListener("click", openQuickCheckQuestionTwo);
questionTwoExitHotspot.addEventListener("click", exitQuestRoom);
questionTwoCloseHotspot.addEventListener("click", closeQuickCheckQuestionTwo);
storesOxygenAnswerHotspot.addEventListener("click", selectStoresOxygenAnswer);
releasesEnergyAnswerHotspot.addEventListener("click", selectReleasesEnergyAnswer);
incorrectAnswerExitHotspot.addEventListener("click", exitQuestRoom);
incorrectAnswerCloseHotspot.addEventListener("click", closeIncorrectAnswer);
incorrectAnswerNextHotspot.addEventListener("click", openQuickCheckQuestionThree);
questionThreeExitHotspot.addEventListener("click", exitQuestRoom);
questionThreeCloseHotspot.addEventListener("click", closeQuickCheckQuestionThree);
adenosineTriphosphateAnswerHotspot.addEventListener("click", selectAdenosineTriphosphateAnswer);
questionThreeCorrectExitHotspot.addEventListener("click", exitQuestRoom);
questionThreeCorrectCloseHotspot.addEventListener("click", closeQuestionThreeCorrectAnswer);
questionThreeFinishHotspot.addEventListener("click", finishRememberQuickCheck);
understandFrameExitHotspot.addEventListener("click", exitQuestRoom);
understandFrameCloseHotspot.addEventListener("click", closeUnderstandActivity);
understandStopHotspot.addEventListener("click", closeUnderstandActivity);
understandTextboxHotspot.addEventListener("click", openUnderstandResponse);
understandResponseExitHotspot.addEventListener("click", exitQuestRoom);
understandResponseCloseHotspot.addEventListener("click", closeUnderstandActivity);
understandResponseStopHotspot.addEventListener("click", closeUnderstandActivity);
understandSubmitHotspot.addEventListener("click", submitUnderstandResponse);
questionTwoCorrectExitHotspot.addEventListener("click", exitQuestRoom);
questionTwoCorrectCloseHotspot.addEventListener("click", closeQuestionTwoCorrectAnswer);
questionTwoCorrectNextHotspot.addEventListener("click", openQuickCheckQuestionThree);
cards.forEach((card) => card.addEventListener("click", () => showAsset(Number(card.dataset.index))));
document.querySelector("#previousButton").addEventListener("click", () => showAsset(currentIndex - 1));
document.querySelector("#nextButton").addEventListener("click", () => showAsset(currentIndex + 1));

muteButton.addEventListener("click", () => {
  setMasterAudioMuted(!masterAudioMuted);
});

fitButton.addEventListener("click", () => {
  const isFullSize = imageFrame.classList.toggle("is-full-size");
  fitButton.setAttribute("aria-pressed", String(isFullSize));
  fitButton.querySelector(".button-label").textContent = isFullSize ? "Fit image" : "Full size";
  window.requestAnimationFrame(updateMapProgressVisuals);
});

window.addEventListener("resize", updateMapProgressVisuals);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showAsset(currentIndex - 1);
  if (event.key === "ArrowRight") showAsset(currentIndex + 1);
});
