window.addEventListener('load', init, false);

function init() {
    console.log("Init...");

    let scene = document.querySelector("a-scene");
    let box = document.getElementById("text-box");

    // When text-box clicked
    box.addEventListener('click', () => {
        if (scene.hasLoaded){
            box.classList.toggle("change");
        }
    });

    if (scene.hasLoaded) {
        console.log("Scene has loaded...");
        changeText();
    } else {
        scene.addEventListener("loaded", changeText);
    }

    function changeText() {
        let displayText = "OPEN: ctrl + alt + \'i\'<br>"
        displayText += "HELP: \'h\'"
        document.getElementById("text").innerHTML = displayText;
    }
}