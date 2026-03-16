const API = "https://jellybellywikiapi.onrender.com/api/beans";

let beans = [];

async function loadBeans() {
    const res = await fetch(API);
    const data = await res.json();
    beans = data.items;

    console.log("Összes íz betöltve:", beans.length);
}

loadBeans();


document.getElementById("randomBtn").addEventListener("click", () => {
    if (beans.length === 0) return alert("Még töltődnek az ízek!");

    const bean = beans[Math.floor(Math.random() * beans.length)];
    document.getElementById("randomResult").innerHTML = `
        <h3>${bean.flavorName}</h3>
        <p>${bean.description}</p>
        <img src="${bean.imageUrl}" width="120">
    `;
});

document.getElementById("dailyBtn").addEventListener("click", () => {

    if (beans.length === 0) return alert("Még töltődnek az ízek!");

   
    const today = new Date();

    
    const dayNumber = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();


    const bean = beans[dayNumber % beans.length];

    document.getElementById("dailyResult").innerHTML = `
        <h3>${bean.flavorName}</h3>
        <p>${bean.description}</p>
        <img src="${bean.imageUrl}" width="120">
    `;
});

const luckyMessages = [
    "Ma ez a jellyebelly szerencsés napod íze! 🍬",
    "Ez a jellybelly boldoggá tesz ma! 😄",
    "Figyelj erre a jellybellyre, szerencsés meglepetés vár! 🎁",
    "Ez a jellybelly energiát ad a napodra! ⚡",
    "Ma ez a jellybelly a kedvenced lehet! ❤️"
];

document.getElementById("luckyBtn").addEventListener("click", () => {

    if (beans.length === 0) return alert("Még töltődnek az ízek!");

    const bean = beans[Math.floor(Math.random() * beans.length)];
    const message = luckyMessages[Math.floor(Math.random() * luckyMessages.length)];

    document.getElementById("luckyResult").innerHTML = `
        <h3>${bean.flavorName}</h3>
        <img src="${bean.imageUrl}" width="120">
        <p>${message}</p>
    `;
});