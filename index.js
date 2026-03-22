let beans = [];

async function loadAllBeans() {
    for (let i = 1; i <= 12; i++) {
        const url = `https://jellybellywikiapi.onrender.com/api/beans?pageIndex=${i}`;
        
        const res = await fetch(url);
        const data = await res.json();

        beans.push(...data.items);
    }

    console.log(beans.length);
}

loadAllBeans();
console.log(beans.length)


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
    let datePicker = document.getElementById("datePicker");

    if (!datePicker.value) return;

    if (beans.length === 0) return alert("Még töltődnek az ízek!");

    let day = new Date(datePicker.value);

    const seed =
        day.getFullYear() * 10000 +
        (day.getMonth() + 1) * 100 +
        day.getDate();

    const bean = beans[seed % beans.length];

    document.getElementById("dailyResult").innerHTML = `
        <h3>${bean.flavorName}</h3>
        <p>${bean.description}</p>
        <img src="${bean.imageUrl}" width="120">
    `;
});

const luckyMessages = [
    "Ma rád mosolyog a szerencse! 🍀",
    "Egy apró öröm ma nagy boldogságot hoz! 😊",
    "Ma valami édes meglepetés vár rád! 🍬",
    "Hallgass a megérzéseidre, jó úton jársz! ✨",
    "Egy váratlan találkozás feldobja a napod! 👀",
    "Ma egy kis kockázat nagy jutalmat hozhat! 🎯",
    "Mosolyogj, mert ma visszamosolyog rád a világ! 😄",
    "Egy régi vágyad ma közelebb kerül hozzád! 💫",
    "Ma szerencsés választás lesz ez az íz! 🍭",
    "Valaki ma rád gondol! ❤️",
    "Egy kis pihenés csodákat tesz ma! 🌿",
    "Ma minden okkal történik! 🔮",
    "Egy jó hír már úton van feléd! 📩",
    "Ne félj kipróbálni valami újat ma! 🚀",
    "Ma egy apró döntés nagy változást hoz! 🔄",
    "A szerencse ma a bátorokat választja! 🦁",
    "Figyelj a jelekre, ma vezetnek téged! 🧭",
    "Egy mosolyod ma valakinek sokat jelent! 😊",
    "Ma egy finom ízhez egy jó élmény társul! 🍇",
    "A napod édesebb lesz, mint gondolnád! 🍯",
    "Ma egy kis varázslat vesz körül! ✨",
    "Bízz magadban, ma nyerő vagy! 🏆",
    "Egy kis szerencse ma melléd szegődik! 🍀",
    "Ma megérdemelsz egy jutalmat! 🎁",
    "A legjobb még csak most jön! 😏"
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