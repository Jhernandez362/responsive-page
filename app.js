const animeGrid = document.getElementById("anime-grid");


async function loadData() {
    try{
        const animeData = await fetch("./animeData.json");
        const mangaData = await fetch("./mangaData.json");
        const novelsData = await fetch("./novelsData.json");

        if (!animeData.ok || !mangaData.ok || !novelsData.ok) {
            throw new Error(`Error al cargar los archivos ${animeData.status}`);
        }

        const animes = await animeData.json()
        const mangas = await mangaData.json()
        const novels = await novelsData.json()

        if (!Array.isArray(animes) || animes.length === 0) {
            throw new Error("Error en el formato o no hay animes registrados.")
        }
        if (!Array.isArray(mangas) || mangas.length === 0) {
            throw new Error("Error en el formato o no hay mangas registrados.")
        }
        if (!Array.isArray(novels) || novels.length === 0) {
            throw new Error("Error en el formato o no hay novelas registradas.")
        }

        console.log(animes);
        console.log(mangas);
        console.log(novels);

        animes.forEach(anime => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "card";


            tarjeta.innerHTML =
                `<img src="${anime.imgSrc}" alt="${anime.title}">
        <div class="overlay"></div>
        <div class="card-content">
            <h3>${anime.title}</h3>
            <p>${anime.subTitle}</p>
        </div>`;
            animeGrid.appendChild(tarjeta);
        })

    }catch (error) {
        console.log("Error " + error)
    } 
}

window.addEventListener("DOMContentLoaded",loadData);