function getData() {
  const vibes = [
    "Blissful",
    "Bold",
    "Bussing",
    "Busting",
    "Capping",
    "Captivating",
    "Carefree",
    "Courageous",
    "Cozy",
    "Curious",
    "Dreamy",
    "Dying",
    "Dynamic",
    "Eccentric",
    "Ecstatic",
    "Eepy",
    "Eerie",
    "Effervescent",
    "Electric",
    "Empathetic",
    "Empowered",
    "Enchanting",
    "Enigmatic",
    "Ethereal",
    "Euphoric",
    "Exciting",
    "Fire",
    "For real life",
    "Graceful",
    "Grounded",
    "Harmonious",
    "Hateful",
    "Heartfelt",
    "Honest",
    "Hopeful",
    "Hopeless",
    "Humble",
    "Hypnotic",
    "Hungry",
    "Innocent",
    "Inspiring",
    "Intimate",
    "Intriguing",
    "Jubilant",
    "Lively",
    "Loving",
    "Lucky",
    "Lush",
    "Magical",
    "Majestic",
    "Melancholic",
    "Mystical",
    "Nostalgic",
    "Nurturing",
    "Optimistic",
    "Peaceful",
    "Playful",
    "Quirky",
    "Radiant",
    "Reflective",
    "Refreshing",
    "Resilient",
    "Rustic",
    "Sentimental",
    "Serendipitous",
    "Serene",
    "Silly",
    "Sincere",
    "Sleepy",
    "Starving",
    "Sulking",
    "Sultry",
    "Terrific",
    "Terrifying",
    "Thoughtful",
    "Thrilling",
    "Tranquil",
    "Unreal",
    "Uplifting",
    "Vexing",
    "Vibing",
    "Vibrant",
    "Wackadoo",
    "Whimsical",
    "Wistful",
  ];
  return vibes[Math.floor(Math.random() * vibes.length)];
}

function getVibe() {
  document.getElementById("vibe").innerHTML = `${getData()}`;
  document.querySelector("#vibe").style.animation =
    "var(--animation-shake-x) forwards";

  document.querySelector("#getVibe").disabled = true;

  setTimeout(() => {
    document.querySelector("#vibe").style.animation = "";
    document.querySelector("#getVibe").disabled = false;
  }, 1000);
}

window.onload = function () {
  getVibe();
};

document.querySelector("#getVibe").addEventListener("click", getVibe);
