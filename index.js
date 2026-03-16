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