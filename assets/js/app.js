const inputEl1 = document.querySelector(".input1");
const inputEl2 = document.querySelector(".input2");
const inputEl3 = document.querySelector(".input3");
const inputEl4 = document.querySelector(".input4");
const inputEl5 = document.querySelector(".input5");
const formEl = document.querySelector(".form");
const boxEl = document.querySelector(".box");

let data = new Date(); 

let sana = data.getDate() + "." + data.getMonth() + 1 + "." + data.getFullYear();


formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputEl2.value > 1000000001) {
        alert("10tagacha bo'lgan son kiriting!");
        inputEl2.value = ""
    }
    else{
        const divEl = document.createElement(`div`);
    const img = document.createElement(`img`);
    const p1El = document.createElement(`p`);
    const p2El = document.createElement(`p`);
    const p3El = document.createElement(`p`);
    const p4El = document.createElement(`p`);
    const btn1El = document.createElement(`button`);
    const btn2El = document.createElement(`button`);
    const btn3El = document.createElement(`button`);
    const btngr1El = document.createElement(`div`);
    const pgrEl = document.createElement(`div`);

    divEl.className = "box1"
    img.className = "img1"
    p1El.className = "p1_1"
    p2El.className = "p1_2"
    p3El.className = "p1_3"
    p4El.className = "p1_4"
    btn1El.className = "btn2"
    btn2El.className = "btn3"
    btn3El.className = "btn4"
    pgrEl.className = "pgr1"
    btngr1El.className = "btngr1"

    boxEl.appendChild(divEl);
    divEl.appendChild(img);
    divEl.appendChild(pgrEl);
    divEl.appendChild(btngr1El)
    pgrEl.appendChild(p1El);
    pgrEl.appendChild(p2El);
    pgrEl.appendChild(p3El);
    pgrEl.appendChild(p4El);
    btngr1El.appendChild(btn1El);
    btngr1El.appendChild(btn2El);
    btngr1El.appendChild(btn3El);

    p1El.innerText = "Taom nomi: " + inputEl1.value;
    p2El.innerText = "Taom narxi: $" + inputEl2.value;
    p3El.innerText = "Taom oshpazi: " + inputEl4.value;
    p4El.innerText = "Taom restorani: " + inputEl5.value;

    btn1El.innerHTML = "Taomni o'chirish";
    btn2El.innerHTML = sana
    btn3El.innerHTML = "Taom tugagan";

    img.src = inputEl3.value

    inputEl1.value = "";
    inputEl2.value = "";
    inputEl3.value = "";
    inputEl4.value = "";
    inputEl5.value = "";

    btn1El.addEventListener("click", () => {
        let qqq = confirm("Uchirishga rozimisiz?");
        if (qqq) {
            divEl.remove();
        }
    })

    btn3El.addEventListener("click", () => {
        divEl.classList.toggle("active");
    })
    }
})