let count = 0;
const counter = document.getElementById("counter");

document.getElementById("catBtn").onclick = () => showAnimal("cat");
document.getElementById("dogBtn").onclick = () => showAnimal("dog");
document.getElementById("cowBtn").onclick = () => showAnimal("cow");

function showAnimal(animal) {
    let img = document.getElementById(animal + "Img");
    let btn = document.getElementById(animal + "Btn");
    let hideBtn = document.getElementById(animal + "HideBtn");

    if (img.style.display !== "block") {
        img.style.display = "block";
        hideBtn.style.display = "inline-block";
        btn.classList.add("active");
        count++;
        updateCounter();
    }
}

function hideAnimal(animal) {
    let img = document.getElementById(animal + "Img");
    let btn = document.getElementById(animal + "Btn");
    let hideBtn = document.getElementById(animal + "HideBtn");

    img.style.display = "none";
    hideBtn.style.display = "none";
    btn.classList.remove("active");
    count--;
    updateCounter();
}

function resetZoo() {
    ["cat", "dog", "cow"].forEach(animal => {
        document.getElementById(animal + "Img").style.display = "none";
        document.getElementById(animal + "HideBtn").style.display = "none";
        document.getElementById(animal + "Btn").classList.remove("active");
    });

    count = 0;
    updateCounter();
}

function updateCounter() {
    counter.textContent = count;
}