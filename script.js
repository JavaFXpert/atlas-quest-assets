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
const HAALOS_GUIDANCE_INDEX = 17;

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
    title: "HAaLOS guidance",
    type: "Visual asset",
    src: "assets/atlas-quest-haalos-guidance-ss.png",
    fileName: "atlas-quest-haalos-guidance-ss.png",
    alt: "Atlas Quest room with HAaLOS explaining the ATP Basics room in a guidance panel",
    description: "HAaLOS explains what the learner will discover in the ATP Basics Quest Room."
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
const fitButton = document.querySelector("#fitButton");
const mapCircleInAudio = document.querySelector("#mapCircleInAudio");
const mapCircleOutAudio = document.querySelector("#mapCircleOutAudio");
const mapHotspots = [...document.querySelectorAll(".map-hotspot")];
const smallMapHoverAudio = document.querySelector("#smallMapHoverAudio");
const smallMapHotspots = [...document.querySelectorAll(".small-map-hotspot")];
const portalHoverAudio = document.querySelector("#portalHoverAudio");
const portalHotspots = [...document.querySelectorAll(".portal-hotspot")];
const portalTraverseAudio = document.querySelector("#portalTraverseAudio");
const activityOpenAudio = document.querySelector("#activityOpenAudio");
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
const tinyClickAudio = document.querySelector("#tinyClickAudio");
const haalosSummonAudio = document.querySelector("#haalosSummonAudio");
const haalosDismissAudio = document.querySelector("#haalosDismissAudio");
const haalosHoverAudio1 = document.querySelector("#haalosHoverAudio1");
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
const roomAskHoverHotspot = document.querySelector(".room-ask-hover-hotspot");
const tourOpenHotspot = document.querySelector(".tour-open-hotspot");
const tourExitHotspot = document.querySelector(".tour-exit-hotspot");
const tourSkipHotspot = document.querySelector(".tour-skip-hotspot");
const haalosFrameExitHotspot = document.querySelector(".haalos-frame-exit-hotspot");
const haalosFrameTourHotspot = document.querySelector(".haalos-frame-tour-hotspot");
const haalosFrameMapHotspot = document.querySelector(".haalos-frame-map-hotspot");
const rememberFrameExitHotspot = document.querySelector(".remember-frame-exit-hotspot");
const rememberFrameCloseHotspot = document.querySelector(".remember-frame-close-hotspot");
const rememberQuickCheckHotspot = document.querySelector(".remember-quick-check-hotspot");
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
const tinyClickVolume = 0.49;
const roomBeepsVolume = 0.6;
const roomBeepsStartDelay = 10000;
let currentIndex = 0;
let activeRoomIndex = LOCKED_ROOM_INDEX;
let introPromptDismissed = false;
let goalCleared = false;
let activePortal = null;
let portalFadeTimer = null;
let portalUnlockTimer = null;
let ambienceActive = false;
let ambienceTransitionId = 0;
let ambientFadeFrame = null;
let ambientFadeReturnTimer = null;
let roomBeepsStartTimer = null;
let mapPathsVisible = true;
let mapLabelsVisible = true;
let haalosHoverCount = 0;
let haalosStartleSoundIndex = 0;
const activityHoverOutSuppression = new WeakMap();
const haalosReactionTimers = new WeakMap();

roomBeepsAudio.volume = roomBeepsVolume;
portalHoverAudio.volume = 1;

function playAudioToEnd(audioTemplate, volume = 1) {
  const audio = audioTemplate.cloneNode(true);
  audio.removeAttribute("id");
  audio.volume = volume;
  audio.currentTime = 0;
  document.body.append(audio);
  audio.addEventListener("ended", () => audio.remove(), { once: true });
  audio.play().catch(() => {
    audio.remove();
    // Browsers can withhold audio until the user has interacted with the page.
  });
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

function playTinyClickSound() {
  playAudioToEnd(tinyClickAudio, tinyClickVolume);
}

function playHaalosSummonSound() {
  playAudioToEnd(haalosSummonAudio);
}

function playHaalosDismissSound() {
  playAudioToEnd(haalosDismissAudio);
}

function playHaalosHoverReaction(event) {
  const hotspot = event.currentTarget;
  haalosHoverCount += 1;

  const isAnnoyed = haalosHoverCount % 7 === 0;
  const reactionClass = isAnnoyed ? "is-annoyed" : "is-startled";
  const audio = isAnnoyed
    ? haalosHoverAudio3
    : [haalosHoverAudio1, haalosHoverAudio2][haalosStartleSoundIndex++ % 2];

  playAudioToEnd(audio);

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
  showAsset(QUEST_MAP_INDEX);
}

function closeMapToRoom() {
  playAudioToEnd(mapCloseAudio);
  showAsset(activeRoomIndex);
}

function enterCourse() {
  playActivityOpenSound();
  activeRoomIndex = LOCKED_ROOM_INDEX;
  introPromptDismissed = false;
  goalCleared = false;
  startRoomAmbience();
  showAsset(LOCKED_ROOM_INDEX);
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

function startRoomAmbience() {
  ambienceTransitionId += 1;
  clearAmbientTransition();
  stopRoomBeeps();
  ambienceActive = true;

  ambientLayer1Audio.volume = 1;
  ambientLayer1Audio.currentTime = 0;
  roomBeepsAudio.volume = roomBeepsVolume;
  roomBeepsAudio.currentTime = 0;
  roomBeepsAudio.muted = true;

  ambientLayer1Audio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
  roomBeepsAudio.play().catch(() => {
    // Priming under the Enter Course gesture keeps delayed playback browser-safe.
  });
  roomBeepsStartTimer = window.setTimeout(() => {
    roomBeepsStartTimer = null;
    if (!ambienceActive) return;

    roomBeepsAudio.currentTime = 0;
    roomBeepsAudio.volume = roomBeepsVolume;
    roomBeepsAudio.muted = false;
    if (roomBeepsAudio.paused) {
      roomBeepsAudio.play().catch(() => {
        // Browsers can withhold audio until the user has interacted with the page.
      });
    }
  }, roomBeepsStartDelay);
}

function stopRoomBeeps() {
  if (roomBeepsStartTimer !== null) {
    window.clearTimeout(roomBeepsStartTimer);
    roomBeepsStartTimer = null;
  }
  roomBeepsAudio.pause();
  roomBeepsAudio.currentTime = 0;
  roomBeepsAudio.muted = false;
}

function stopRoomAmbience() {
  ambienceActive = false;
  ambienceTransitionId += 1;
  clearAmbientTransition();

  ambientLayer1Audio.pause();
  ambientLayer1Audio.currentTime = 0;
  ambientLayer1Audio.volume = 1;
  stopRoomBeeps();
}

function rampAmbientVolume(targetVolume, duration, transitionId, onComplete) {
  const startingVolume = ambientLayer1Audio.volume;
  const fadeStartedAt = performance.now();

  function updateVolume(now) {
    if (!ambienceActive || transitionId !== ambienceTransitionId) return;

    const progress = Math.min((now - fadeStartedAt) / duration, 1);
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
  playTinyClickSound();
  stopRoomAmbience();
  stopAllPortalHovers();
  showAsset(COURSE_HOME_INDEX);
}

function openRoomTour() {
  playHaalosSummonSound();
  stopAllPortalHovers();
  showAsset(TOUR_INDEX);
}

function openHaalosGuidance() {
  playHaalosSummonSound();
  stopAllPortalHovers();
  showAsset(HAALOS_GUIDANCE_INDEX);
}

function skipRoomTour() {
  playHaalosDismissSound();
  stopAllPortalHovers();
  showAsset(activeRoomIndex);
}

function dismissHaalosGuidance() {
  playHaalosDismissSound();
  stopAllPortalHovers();
  showAsset(activeRoomIndex);
}

function dismissLockedRoomPrompt() {
  playHaalosDismissSound();
  introPromptDismissed = true;
  showAsset(LOCKED_ROOM_INDEX);
}

function clearGoal() {
  playTinyClickSound();
  goalCleared = true;
  showAsset(LOCKED_ROOM_INDEX);
}

function openRememberActivity() {
  showAsset(REMEMBER_ACTIVITY_INDEX);
}

function closeRememberActivity() {
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function openRememberQuickCheck() {
  playActivityOpenSound();
  showAsset(QUICK_CHECK_INDEX);
}

function closeRememberQuickCheck() {
  playTinyClickSound();
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
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function closeCorrectAnswer() {
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function openQuickCheckQuestionTwo() {
  playActivityOpenSound();
  showAsset(QUESTION_TWO_INDEX);
}

function closeQuickCheckQuestionTwo() {
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function selectStoresOxygenAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
  showAsset(INCORRECT_ANSWER_INDEX);
}

function closeIncorrectAnswer() {
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function openQuickCheckQuestionThree() {
  playActivityOpenSound();
  showAsset(QUESTION_THREE_INDEX);
}

function closeQuickCheckQuestionThree() {
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function selectAdenosineTriphosphateAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(QUESTION_THREE_CORRECT_INDEX);
}

function finishRememberQuickCheck() {
  playAudioToEnd(finishActivityAudio);
  activeRoomIndex = UNLOCKED_AFTER_REMEMBER_INDEX;
  showAsset(UNLOCKED_AFTER_REMEMBER_INDEX);
}

function closeQuestionThreeCorrectAnswer() {
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function openUnderstandActivity() {
  showAsset(UNDERSTAND_ACTIVITY_INDEX);
}

function closeUnderstandActivity() {
  playTinyClickSound();
  showAsset(activeRoomIndex);
}

function openUnderstandResponse() {
  showAsset(UNDERSTAND_RESPONSE_INDEX);
}

function playPortalUnlockSound() {
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

  portalUnlockTimer = window.setTimeout(() => {
    portalUnlockTimer = null;
    fadeOutPortalAudio();
  }, 2500);
}

function submitUnderstandResponse() {
  playAudioToEnd(mapCircleInAudio);
  playPortalUnlockSound();
  activeRoomIndex = UNDERSTAND_COMPLETE_INDEX;
  showAsset(UNDERSTAND_COMPLETE_INDEX);
}

function setLinkedActivityState(activityName, isActive) {
  imageCanvas.classList.toggle(`is-${activityName}-linked`, isActive);
}

function isPortalUnlocked() {
  return currentIndex === QUEST_ROOM_INDEX || currentIndex === UNDERSTAND_COMPLETE_INDEX;
}

function startPortalHover(portal) {
  if (!isPortalUnlocked()) return;
  activePortal = portal;

  if (portalUnlockTimer !== null) {
    window.clearTimeout(portalUnlockTimer);
    portalUnlockTimer = null;
  }

  const wasPlaying = !portalHoverAudio.paused;
  if (portalFadeTimer !== null) {
    window.clearInterval(portalFadeTimer);
    portalFadeTimer = null;
  }
  portalHoverAudio.volume = 1;
  if (wasPlaying) return;

  portalHoverAudio.currentTime = 0;
  portalHoverAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
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

function stopPortalHover(portal) {
  if (activePortal !== portal) return;

  activePortal = null;
  fadeOutPortalAudio();
}

function stopAllPortalHovers() {
  activePortal = null;
  if (portalUnlockTimer !== null) {
    window.clearTimeout(portalUnlockTimer);
    portalUnlockTimer = null;
  }
  fadeOutPortalAudio();
}

function playPortalTraversal() {
  if (!isPortalUnlocked()) return;
  stopAllPortalHovers();
  fadeAmbientForPortal();
  portalTraverseAudio.pause();
  portalTraverseAudio.currentTime = 0;
  portalTraverseAudio.volume = 1;
  portalTraverseAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
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
  const mapSource = bothFeaturesVisible
    ? "assets/atlas-quest-map-paths-labels-on-ss.png"
    : "assets/atlas-quest-map-paths-labels-off-ss.png";

  if (currentIndex === QUEST_MAP_INDEX && mainImage.getAttribute("src") !== mapSource) {
    mainImage.src = mapSource;
  }

  imageCanvas.classList.toggle("map-paths-overlay-active", mapPathsVisible && !bothFeaturesVisible);
  imageCanvas.classList.toggle("map-labels-overlay-active", mapLabelsVisible && !bothFeaturesVisible);
  showPathsToggleHotspot.classList.toggle("is-overlay-checked", mapPathsVisible && !bothFeaturesVisible);
  showLabelsToggleHotspot.classList.toggle("is-overlay-checked", mapLabelsVisible && !bothFeaturesVisible);
  showPathsToggleHotspot.setAttribute("aria-pressed", String(mapPathsVisible));
  showLabelsToggleHotspot.setAttribute("aria-pressed", String(mapLabelsVisible));
}

function toggleMapPaths() {
  playTinyClickSound();
  mapPathsVisible = !mapPathsVisible;
  updateMapStateFrame();
}

function toggleMapLabels() {
  playTinyClickSound();
  mapLabelsVisible = !mapLabelsVisible;
  updateMapStateFrame();
}

function showAsset(index) {
  currentIndex = (index + assets.length) % assets.length;
  const asset = assets[currentIndex];

  if (
    currentIndex === LOCKED_ROOM_INDEX
    || currentIndex === QUEST_ROOM_INDEX
    || currentIndex === UNLOCKED_AFTER_REMEMBER_INDEX
    || currentIndex === UNDERSTAND_COMPLETE_INDEX
  ) {
    activeRoomIndex = currentIndex;
  }

  mainImage.classList.add("is-changing");
  window.setTimeout(() => {
    mainImage.src = currentIndex === LOCKED_ROOM_INDEX && goalCleared
      ? asset.clearedGoalSrc
      : currentIndex === LOCKED_ROOM_INDEX && introPromptDismissed
        ? asset.dismissedSrc
        : asset.src;
    mainImage.alt = asset.alt;
    title.textContent = asset.title;
    type.textContent = asset.type;
    description.textContent = asset.description;
    fileName.textContent = asset.fileName;
    count.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(assets.length).padStart(2, "0")}`;
    imageCanvas.classList.toggle("is-course-active", currentIndex === COURSE_HOME_INDEX);
    imageCanvas.classList.toggle("is-map-active", currentIndex === QUEST_MAP_INDEX);
    imageCanvas.classList.toggle("is-locked-room-active", currentIndex === LOCKED_ROOM_INDEX);
    imageCanvas.classList.toggle(
      "is-room-active",
      currentIndex === QUEST_ROOM_INDEX
        || currentIndex === UNLOCKED_AFTER_REMEMBER_INDEX
        || currentIndex === UNDERSTAND_COMPLETE_INDEX
    );
    imageCanvas.classList.toggle("is-portals-unlocked", isPortalUnlocked());
    imageCanvas.classList.toggle(
      "is-understand-complete-room",
      currentIndex === UNDERSTAND_COMPLETE_INDEX
    );
    portalHotspots.forEach((portal) => {
      portal.disabled = !isPortalUnlocked();
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
    imageCanvas.classList.toggle("is-haalos-active", currentIndex === HAALOS_GUIDANCE_INDEX);
    imageCanvas.classList.toggle(
      "is-intro-prompt-dismissed",
      currentIndex === LOCKED_ROOM_INDEX && introPromptDismissed
    );
    imageCanvas.classList.toggle(
      "is-goal-cleared",
      currentIndex === LOCKED_ROOM_INDEX && goalCleared
    );
    if (currentIndex === QUEST_MAP_INDEX) updateMapStateFrame();
    mainImage.classList.remove("is-changing");
  }, 140);

  if (
    currentIndex !== QUEST_ROOM_INDEX
    && currentIndex !== UNLOCKED_AFTER_REMEMBER_INDEX
    && currentIndex !== UNDERSTAND_COMPLETE_INDEX
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
});
portalHotspots.forEach((portal) => {
  portal.addEventListener("pointerover", () => startPortalHover(portal));
  portal.addEventListener("pointerout", () => stopPortalHover(portal));
  portal.addEventListener("pointercancel", () => stopPortalHover(portal));
  portal.addEventListener("pointerdown", stopAllPortalHovers);
  portal.addEventListener("click", playPortalTraversal);
});
activityHotspots.forEach((activity) => {
  activity.addEventListener("click", () => {
    activityHoverOutSuppression.set(activity, performance.now() + 500);
    playActivityClickSound();
  });
  activity.addEventListener("pointerenter", playActivityHoverInSound);
  activity.addEventListener("pointerleave", () => {
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
[
  superUserHoverHotspot,
  resetProgressHoverHotspot,
  roomExitHotspot,
  roomProgressHoverHotspot,
  tourOpenHotspot,
  roomAskHoverHotspot,
  mapOpenHotspot
].forEach((hotspot) => hotspot.addEventListener("pointerenter", playSmallMapHoverSound));
lockedNotNowHotspot.addEventListener("click", dismissLockedRoomPrompt);
lockedNotNowHotspot.addEventListener("pointerenter", playSmallMapHoverSound);
lockedStartTourHotspot.addEventListener("click", openRoomTour);
lockedStartTourHotspot.addEventListener("pointerenter", playSmallMapHoverSound);
clearGoalHotspot.addEventListener("click", clearGoal);
roomExitHotspot.addEventListener("click", exitQuestRoom);
tourOpenHotspot.addEventListener("click", openRoomTour);
tourExitHotspot.addEventListener("click", exitQuestRoom);
tourSkipHotspot.addEventListener("click", skipRoomTour);
roomHaalosHotspots.forEach((hotspot) => hotspot.addEventListener("click", openHaalosGuidance));
tourHaalosHotspot.addEventListener("click", dismissHaalosGuidance);
haalosFrameRobotHotspot.addEventListener("click", dismissHaalosGuidance);
allHaalosHotspots.forEach((hotspot) => hotspot.addEventListener("pointerenter", playHaalosHoverReaction));
haalosFrameExitHotspot.addEventListener("click", exitQuestRoom);
haalosFrameTourHotspot.addEventListener("click", openRoomTour);
haalosFrameMapHotspot.addEventListener("click", openMapFromRoom);
rememberFrameExitHotspot.addEventListener("click", exitQuestRoom);
rememberFrameCloseHotspot.addEventListener("click", closeRememberActivity);
rememberQuickCheckHotspot.addEventListener("click", openRememberQuickCheck);
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
cards.forEach((card) => card.addEventListener("click", () => showAsset(Number(card.dataset.index))));
document.querySelector("#previousButton").addEventListener("click", () => showAsset(currentIndex - 1));
document.querySelector("#nextButton").addEventListener("click", () => showAsset(currentIndex + 1));

fitButton.addEventListener("click", () => {
  const isFullSize = imageFrame.classList.toggle("is-full-size");
  fitButton.setAttribute("aria-pressed", String(isFullSize));
  fitButton.querySelector(".button-label").textContent = isFullSize ? "Fit image" : "Full size";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showAsset(currentIndex - 1);
  if (event.key === "ArrowRight") showAsset(currentIndex + 1);
});
