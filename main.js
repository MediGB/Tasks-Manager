


const input = document.getElementById("input");

const add = document.getElementById("add");

const container = document.getElementById("container");

const form = document.getElementById("form");


// ------Add a Task--------


form.addEventListener("submit", (eo) => {

    eo.preventDefault();

    if (input.value === "") {
        alert("Please enter a Task");
    }
    else {
        container.innerHTML += `<li class="flex task"><i class="fa-solid fa-star"></i><span>${input.value}</span><i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-xmark"></i></li>`
        input.value = "";
    }

});


container.addEventListener("click", (eo) => {

    //Delete a Task

    if (eo.target.classList == "fa-solid fa-trash-can") {

        eo.target.parentElement.remove();
    }

    //UNCHECK A TASK

    else if (eo.target.classList == "fa-solid fa-check") {

        eo.target.className = "fa-solid fa-xmark";

        eo.target.parentElement.style.opacity = "1";

        eo.target.parentElement.classList.toggle("completed");

        eo.target.parentElement.classList.add("pending");



    }

    //CHECK A TASK

    else if (eo.target.classList == "fa-solid fa-xmark") {

        eo.target.className = "fa-solid fa-check";

        container.append(eo.target.parentElement)

        eo.target.parentElement.style.opacity = "0.5";

        eo.target.parentElement.classList.toggle("completed");

        eo.target.parentElement.classList.remove("pending");



        // PRIMARY TASK

    } else if (eo.target.classList == "fa-solid fa-star") {

        eo.target.classList.toggle("yellow");

        container.prepend(eo.target.parentElement)
    }

    //NOT A PRIMARY TASK

    else if (eo.target.classList == "fa-solid fa-star yellow") {

        eo.target.classList.toggle("yellow");
    }
})

//SELECT A TASK CLASS

const filter = document.getElementById("filter");




filter.addEventListener("input", (eo) => {

    const tasks = container.childNodes;

    tasks.forEach(item => {

        if (eo.target.value == "completed") {

            if (item.classList !== "completed") {

                item.display = "none";

            }
        }





    });

});










