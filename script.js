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
    src: "assets/atlas-quest-ui-ss.png",
    fileName: "atlas-quest-ui-ss.png",
    alt: "Atlas Quest neuromuscular learning room with a muscle structure video and activity stations",
    description: "An immersive learning room with video, reading, diagram, and topic activities."
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
const mapHoverAudio = document.querySelector("#mapHoverAudio");
const mapHotspots = [...document.querySelectorAll(".map-hotspot")];
const portalHoverAudio = document.querySelector("#portalHoverAudio");
const portalHotspots = [...document.querySelectorAll(".portal-hotspot")];
const hoveredPortals = new Set();
let currentIndex = 0;

function playMapHoverSound() {
  mapHoverAudio.pause();
  mapHoverAudio.currentTime = 0;
  mapHoverAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
}

function startPortalHover(portal) {
  const shouldStartAudio = hoveredPortals.size === 0;
  hoveredPortals.add(portal);
  if (!shouldStartAudio) return;

  portalHoverAudio.currentTime = 0;
  portalHoverAudio.play().catch(() => {
    // Browsers can withhold audio until the user has interacted with the page.
  });
}

function stopPortalHover(portal) {
  hoveredPortals.delete(portal);
  if (hoveredPortals.size > 0) return;

  portalHoverAudio.pause();
  portalHoverAudio.currentTime = 0;
}

function stopAllPortalHovers() {
  hoveredPortals.clear();
  portalHoverAudio.pause();
  portalHoverAudio.currentTime = 0;
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

mapHotspots.forEach((hotspot) => hotspot.addEventListener("pointerenter", playMapHoverSound));
portalHotspots.forEach((portal) => {
  portal.addEventListener("pointerenter", () => startPortalHover(portal));
  portal.addEventListener("pointerleave", () => stopPortalHover(portal));
});

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
