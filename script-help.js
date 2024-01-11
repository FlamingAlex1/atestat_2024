const dryDiv = document.getElementById("dry-div");
const oilyDiv = document.getElementById("oily-div");
const comboDiv = document.getElementById("combo-div");

const dryContent = document.getElementById("dry");
const oilyContent = document.getElementById("oily");
const comboContent = document.getElementById("combination");

let previous = oily;

dryDiv.addEventListener("click", () => {
    if (previous) {
        previous.toggleAttribute("hidden", true);
    }
    previous = dryContent;
    dryContent.toggleAttribute("hidden");
});
oilyDiv.addEventListener("click", () => {
    if (previous) {
        previous.toggleAttribute("hidden", true);
    }
    previous = oilyContent;
    oilyContent.toggleAttribute("hidden");
});
comboDiv.addEventListener("click", () => {
    if (previous) {
        previous.toggleAttribute("hidden", true);
    }
    previous = comboContent;
    comboContent.toggleAttribute("hidden");
});