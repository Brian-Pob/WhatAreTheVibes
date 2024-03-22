function useGrabBag(list) {
  let grabList = list;

  function grab() {
    if (grabList.length === 0) {
      console.log("No more items in the grab bag. Resetting.");
      grabList = list;
    }
    const selectedItem = grabList[Math.floor(Math.random() * grabList.length)];
    console.log(selectedItem);
    console.log(grabList.length);
    grabList = grabList.filter((item) => item !== selectedItem);
    return selectedItem;
  }

  return [grab];
}

const [grabBag] = useGrabBag([
  "For real life",
  "Wackadoo",
  "Tough",
  "Cheeky",
  "Fluffy",
  "Bluey",
  "Eepy",
  "Trifficult",
  "Squishy",
  "Greeny",
  "Wired",
  "Tired",
  "Caffeinated",
  "Awesome",
]);

function getVibe() {
  document.getElementById("vibe").innerHTML = `${grabBag()}`;
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
