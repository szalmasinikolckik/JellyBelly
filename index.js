const API = "https://jellybellywikiapi.onrender.com/api/beans";

let beans = [];
let guessBean = null;

async function loadBeans() {
    const res = await fetch(API);
    const data = await res.json();
    beans = data.items;
}

loadBeans();


console.log(beans.length)
document.getElementById("randomBtn").addEventListener("click", () => {
    
    const bean = beans[Math.floor(Math.random() * beans.length)];
    document.getElementById("randomResult").innerHTML = `
    <h3>${bean.flavorName}</h3>
    <p>${bean.description}</p>
    <img src="${bean.imageUrl}" width="120">
    `;
});


