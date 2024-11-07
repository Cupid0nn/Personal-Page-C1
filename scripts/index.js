class activity {
    constructor(id, titulo, descripcion, imagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

class repository {
    constructor() {
        this.activity = [];
        this.id = 0;
    }

    addActivity(titulo, descripcion, imagen) {
        this.id++;
        const newActivity = new activity(this.id, titulo, descripcion, imagen);
        this.activity.push(newActivity);
        return newActivity;
    }

    getAllActivities() {
        return this.activity;
    }

    filterActivities(filterFunction) {
        return this.activity.filter(filterFunction);
    }

    deleteActivity(id) {
        this.activity = this.activity.filter(activity => activity.id !== id);
        return this.activity;
    }
}

const repo = new repository();

document.querySelector("#boton").addEventListener("click", () => {
    const titulo = document.querySelector("#titulo").value;
    const descripcion = document.querySelector("#descripcion").value;
    const imagen = document.querySelector("#imagen").value;

    if(titulo && descripcion && isValidURL(imagen)) {
        const newActivity = repo.addActivity(titulo, descripcion, imagen);
        displayActivity(newActivity);
    } else {
        alert("Por favor, completa todos los campos con valores válidos.");
    }
});

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function displayActivity(activity) {
    const listaActividades = document.querySelector("#listaActividades");
    const actividadDiv = document.createElement("div");
    actividadDiv.className = "actividad";
    actividadDiv.innerHTML = `
        <h3>${activity.titulo}</h3>
        <p>${activity.descripcion}</p>
        <img src="${activity.imagen}" alt="${activity.titulo}" width="100px" height="100px">
    `;
    listaActividades.appendChild(actividadDiv);
}
