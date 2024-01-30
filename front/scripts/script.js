function getPokemonInfo(){
    //capturo por ID elementos desde el html el nombre dentro de parentesis corresponde con el id de
    // linea 12 de index.html
    const pokemonNameInput=document.getElementById("pokemonName")
    //capturo por ID elementos desde el html el nombre dentro de parentesis corresponde con el id de 
    //linea 17 de index.html esta variable se reutiliza también en 
    //linea 7,26 y35 de este documento
    const pokemonInfo=document.getElementById("pokemonInfo")
    const pokemonName= pokemonNameInput.value.toLowerCase(); //Selecciono los elementos de la constante de linea 4 de script.js, el .value 
    //indica que estoy seleccionando lo que hay dentro del input 
    // paso los elementos a minusculas para evitar errores
const url=`http://localhost:3002/pokemon/${pokemonName}` //creo una url igual al servidor levantado en la carpeta back_2 tengo puesto el host:3002
//utilizo comillas francesas para integrar la variable pokemonName dentro del  string de mi url

//estoy pidiendo información con fetch de la url de mi propio servidor en la carpeta back_2
    fetch(url)
    //cuando responde transformo la información en un json
    .then(response=> response.json())
    //Transofrmada la información selecciono solo parte del contenido, utilizo menos recursos utilizando el destructuring, tengo que insertar un
    //objeto dentro del destructuring al tratarse de un documento .json
    .then (data => {
        const {name, sprites:{front_default},height,weight }=data
//selecciono la variable pokemonInfo de linea 7,26 y35 relacionada con el id del index y utilizando innerHTML y comillas francesas creo un template 
//para la aparición en la pantalla
        
        pokemonInfo.innerHTML=`
        <h2>Nombre:  ${name}
        <img src="${front_default}" alt="${name}">
        <p>Altura: ${height}</p>
        <p>Peso: ${weight}</p>
        `
    } )
    //capturo el error utilizando .catch , si hay un error imprimirá un error en la variable pokemonInfo, relacionada con la linea 7 y 26
    // utilizando innerHTML
    .catch (error=>pokemonInfo.innerHTML=`<p> Imposible acceder al pokemon</p>`)
}