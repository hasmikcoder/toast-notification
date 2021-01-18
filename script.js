let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

btn.addEventListener ("click", () => {
    createNotification();
});

 function createNotification() {

    let notif = document.createElement("div");

    notif.classList.add("toast");
    notif.innerText = " This is JS!!!!"


    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
 }


   
