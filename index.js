let cards = document.querySelectorAll(".col-4");
console.log(cards);

document.getElementById("england").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "englandCard") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});

document.getElementById("portugal").addEventListener("click", () => {
    cards.forEach((item)=>{
        if (item.id != "portugalCard") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});
document.getElementById("all").addEventListener("click", () => {
    cards.forEach((item) => {
        item.style.display = "flex";
    })
});
document.getElementById("france").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "franceCard") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});
document.getElementById("belgium").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "belgiumCard") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});

document.getElementById("search").addEventListener("keyup", () => {
    let query = document.getElementById("search").value.toLowerCase()
    cards.forEach((item) => {
        if(item.querySelector("h5").textContent.toLowerCase().indexOf(query) > -1){
            item.style.display = "flex"
        }else{
            item.style.display = "none"
        }
    })
})