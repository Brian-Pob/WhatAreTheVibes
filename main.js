function useGrabBag(list) {
  function grab(currentList) {
    if (currentList.length === 0) {
      return { selectedItem: null, newList: list };
    }
    const selectedItemIndex = Math.floor(Math.random() * currentList.length);
    const selectedItem = currentList[selectedItemIndex];
    const newList = currentList.filter(
      (_, index) => index !== selectedItemIndex,
    );
    return { selectedItem, newList };
  }
  return grab;
}

function getVibe() {}

window.onload = () => {
  // Initialize the list and grab function
  const initialList = [
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
  ];
  const grab = useGrabBag(initialList);

  // Current list starts as the initial list
  let currentList = [...initialList];

  document.querySelector("#getVibe").addEventListener("click", () => {
    const { selectedItem, newList } = grab(currentList);

    document.getElementById("vibe").innerHTML = `${selectedItem}`;
    document.querySelector("#vibe").style.animation =
      "var(--animation-shake-x) forwards";

    document.querySelector("#getVibe").disabled = true;

    setTimeout(() => {
      document.querySelector("#vibe").style.animation = "";
      document.querySelector("#getVibe").disabled = false;
    }, 1000);

    if (newList.length === 0) {
      currentList = [...initialList]; // Reset the list
    } else {
      currentList = newList; // Update the current list with the new list
    }
  });
};
