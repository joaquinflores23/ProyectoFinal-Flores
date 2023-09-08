// Funcion Agregar al Carrito

const addToFavorites = (id) => {
    const item = paises.find((pais) => pais.id === id)
    favoritos.push(item)
    console.log(favoritos)
    localStorage.setItem("FAVORITOS", JSON.stringify(carrito))
    
}

// Seleccionar Contenedor

const containerPokemon = document.querySelector('#pokemon-container')


// Funcion Fetch Personaje

const fetchPokemon = (id) => {
    fetch( `https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then (data => console.log(data))
}

// Funcion para renderizar productos

const generarTarjetas = array => {
    const data =  array.reduce(( acc, element ) => {
    //Operador si descriccion es null 
    const replaceNullDescription = element.descripcion || "No hay descriccion";
    // Operador si imamgen es null
    const ifImgNotFound = element.imagen || "../assets/img/icon-image-not-found.jpeg";   
    return acc + `
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src=${ifImgNotFound} alt="Imagen ${element.producto}" />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h3 class="fw-bolder">${element.producto} ${element.marca}</h3>

                    <h5>Marca</h5>
                    <p>${element.marca}</p>

                    <h5>Categoria</h5>
                    <p>${element.categoria}</p>

                    <h5>Descripcion</h5>
                    <p>${replaceNullDescription}</p>

                    <!-- Product price-->
                    <p class="fw-bold">$ ${element.precio}</p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button class="btn btn-outline-dark mt-auto" id="add-favs-${element.id}" onclick="addToFavorites(${element.id})" href="#">Agregar a Favoritos</button>
                </div>
            </div>
        </div>
    </div>

`
},'')

containerPaises.innerHTML = data
}

// Llamo funcion con array de productos como argumento

generarTarjetas(pokemons)

// Crear arrey vacio de Carrito

let favoritos = [];


