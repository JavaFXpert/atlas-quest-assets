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
    src: "assets/atlas-quest-map-ss.png",
    fileName: "atlas-quest-map-ss.png",
    alt: "Atlas Quest course map showing bioenergetics, cardio, neuromuscular, and training topics",
    description: "A course-level map organizing learning activities into four topic areas."
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
const bottomRememberHotspot = document.querySelector(".bottom-remember-hotspot");
const bottomUnderstandHotspot = document.querySelector(".bottom-understand-hotspot");
const mapOpenAudio = document.querySelector("#mapOpenAudio");
const mapOpenHotspot = document.querySelector(".map-open-hotspot");
const mapCloseAudio = document.querySelector("#mapCloseAudio");
const mapCloseHotspot = document.querySelector(".map-close-hotspot");
const enterCourseHotspot = document.querySelector(".enter-course-hotspot");
const roomExitHotspot = document.querySelector(".room-exit-hotspot");
const tourOpenHotspot = document.querySelector(".tour-open-hotspot");
const tourExitHotspot = document.querySelector(".tour-exit-hotspot");
const tourSkipHotspot = document.querySelector(".tour-skip-hotspot");
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
const incorrectAnswerAudio = document.querySelector("#incorrectAnswerAudio");
const correctAnswerAudio = document.querySelector("#correctAnswerAudio");
const ambientLayer1Audio = document.querySelector("#ambientLayer1Audio");
const roomBeepsAudio = document.querySelector("#roomBeepsAudio");
const portalFadeDuration = 1000;
const portalFadeInterval = 16;
const ambientFadeOutDuration = 650;
const ambientFadeInDuration = 1100;
const ambientFadePause = 220;
let currentIndex = 0;
let activePortal = null;
let portalFadeTimer = null;
let ambienceActive = false;
let ambienceTransitionId = 0;
let ambientFadeFrame = null;
let ambientFadeReturnTimer = null;
const activityHoverOutSuppression = new WeakMap();

portalHoverAudio.volume = 1;

function playAudioToEnd(audioTemplate) {
  const audio = audioTemplate.cloneNode(true);
  audio.removeAttribute("id");
  audio.volume = 1;
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

function openMapFromRoom() {
  playAudioToEnd(mapOpenAudio);
  showAsset(1);
}

function closeMapToRoom() {
  playAudioToEnd(mapCloseAudio);
  showAsset(2);
}

function enterCourse() {
  startRoomAmbience();
  showAsset(2);
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
  ambienceActive = true;

  ambientLayer1Audio.volume = 1;
  ambientLayer1Audio.currentTime = 0;
  roomBeepsAudio.volume = 1;
  roomBeepsAudio.currentTime = 0;

  ambientLayer1Audio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
  roomBeepsAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
}

function stopRoomBeeps() {
  roomBeepsAudio.pause();
  roomBeepsAudio.currentTime = 0;
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
  stopRoomAmbience();
  stopAllPortalHovers();
  showAsset(0);
}

function openRoomTour() {
  stopAllPortalHovers();
  showAsset(3);
}

function skipRoomTour() {
  showAsset(2);
}

function openRememberActivity() {
  showAsset(4);
}

function closeRememberActivity() {
  showAsset(2);
}

function openRememberQuickCheck() {
  playActivityOpenSound();
  showAsset(5);
}

function closeRememberQuickCheck() {
  showAsset(2);
}

function selectTinyAmountAnswer() {
  playAudioToEnd(correctAnswerAudio);
  showAsset(7);
}

function selectLongLastingReserveAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
  showAsset(6);
}

function closeQuestionOneIncorrectAnswer() {
  showAsset(2);
}

function closeCorrectAnswer() {
  showAsset(2);
}

function openQuickCheckQuestionTwo() {
  playActivityOpenSound();
  showAsset(8);
}

function closeQuickCheckQuestionTwo() {
  showAsset(2);
}

function selectStoresOxygenAnswer() {
  playAudioToEnd(incorrectAnswerAudio);
  showAsset(9);
}

function closeIncorrectAnswer() {
  showAsset(2);
}

function setLinkedActivityState(activityName, isActive) {
  imageCanvas.classList.toggle(`is-${activityName}-linked`, isActive);
}

function startPortalHover(portal) {
  activePortal = portal;

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
  fadeOutPortalAudio();
}

function playPortalTraversal() {
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

function showAsset(index) {
  currentIndex = (index + assets.length) % assets.length;
  const asset = assets[currentIndex];

  mainImage.classList.add("is-changing");
  window.setTimeout(() => {
    mainImage.src = asset.src;
    mainImage.alt = asset.alt;
    title.textContent = asset.title;
    type.textContent = asset.type;
    description.textContent = asset.description;
    fileName.textContent = asset.fileName;
    count.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(assets.length).padStart(2, "0")}`;
    imageCanvas.classList.toggle("is-course-active", currentIndex === 0);
    imageCanvas.classList.toggle("is-map-active", currentIndex === 1);
    imageCanvas.classList.toggle("is-room-active", currentIndex === 2);
    imageCanvas.classList.toggle("is-tour-active", currentIndex === 3);
    imageCanvas.classList.toggle("is-remember-frame-active", currentIndex === 4);
    imageCanvas.classList.toggle("is-quick-check-active", currentIndex === 5);
    imageCanvas.classList.toggle("is-question-one-incorrect-active", currentIndex === 6);
    imageCanvas.classList.toggle("is-correct-answer-active", currentIndex === 7);
    imageCanvas.classList.toggle("is-question-two-active", currentIndex === 8);
    imageCanvas.classList.toggle("is-incorrect-answer-active", currentIndex === 9);
    mainImage.classList.remove("is-changing");
  }, 140);

  if (currentIndex !== 2) {
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
mapOpenHotspot.addEventListener("click", openMapFromRoom);
mapCloseHotspot.addEventListener("click", closeMapToRoom);
enterCourseHotspot.addEventListener("click", enterCourse);
roomExitHotspot.addEventListener("click", exitQuestRoom);
tourOpenHotspot.addEventListener("click", openRoomTour);
tourExitHotspot.addEventListener("click", exitQuestRoom);
tourSkipHotspot.addEventListener("click", skipRoomTour);
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
