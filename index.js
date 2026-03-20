const API = "https://jellybellywikiapi.onrender.com/api/beans";

let beans = [];

async function loadBeans() {
    const requests = [];
    for (let i = 0; i < 10; i++) {
        requests.push(fetch(`${API}?page=${i}`).then(res => res.json()));
        
    }
    const results = await Promise.all(requests);
    beans = results.flatMap(data => data.beans)
}


loadBeans();


document.getElementById("randomBtn").addEventListener("click", () => {
    alert(beans.length);
    const bean = beans[Math.floor(Math.random() * beans.length)];
    document.getElementById("randomResult").innerHTML = `
    <h3>${bean.flavorName}</h3>
    <p>${bean.description}</p>
    <img src="${bean.imageUrl}" width="120">
    `;
});


