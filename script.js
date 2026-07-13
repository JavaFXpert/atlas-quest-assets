const assets = [
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
const activityHotspots = [...document.querySelectorAll(".activity-hotspot")];
const mapOpenAudio = document.querySelector("#mapOpenAudio");
const mapOpenHotspot = document.querySelector(".map-open-hotspot");
const mapCloseAudio = document.querySelector("#mapCloseAudio");
const mapCloseHotspot = document.querySelector(".map-close-hotspot");
const portalFadeDuration = 1000;
const portalFadeInterval = 16;
let currentIndex = 0;
let activePortal = null;
let portalFadeTimer = null;

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

function playActivityClickSounds() {
  playActivityOpenSound();
  playActivityHoverInSound();
}

function openMapFromRoom() {
  playAudioToEnd(mapOpenAudio);
  showAsset(0);
}

function closeMapToRoom() {
  playAudioToEnd(mapCloseAudio);
  showAsset(1);
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
    imageCanvas.classList.toggle("is-map-active", currentIndex === 0);
    imageCanvas.classList.toggle("is-room-active", currentIndex === 1);
    mainImage.classList.remove("is-changing");
  }, 140);

  if (currentIndex !== 1) stopAllPortalHovers();

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
  activity.addEventListener("click", playActivityClickSounds);
  activity.addEventListener("pointerenter", playActivityHoverInSound);
  activity.addEventListener("pointerleave", playActivityHoverOutSound);
});
mapOpenHotspot.addEventListener("click", openMapFromRoom);
mapCloseHotspot.addEventListener("click", closeMapToRoom);
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
