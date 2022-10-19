const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'

async function buscar() {
    let nombre = document.getElementById('nombre').value
    nombre=nombre.toLowerCase()
    const response = await fetch(`${pokeAPI}${nombre}`)
    document.getElementById('nombre').value=''
    if (response.status === 404) {
        document.querySelector('.error').textContent = 'No encontrado'
    } else {
        const json = await response.json()

        const img = document.querySelector('.fotos')
        img.innerHTML =`<img class=foto src=${json.sprites.front_default}>` 
        
        const datos = document.querySelector('.stats')
        datos.innerHTML += `<h3>Estadísticas</h3>`
        for (data of json.stats) {
            datos.innerHTML += `<p>${data.stat.name}: ${data.base_stat} </p>`
        }
        datos.innerHTML += `<h3>Habilidades</h3>`
        for (data of json.abilities) {

            datos.innerHTML += `<p>${data.ability.name} </p>`
        }

    }
}


document.getElementById('iniciar').addEventListener('click', () => {
    document.querySelector('#iniciar').disabled = true
    if(document.getElementById('nombre').value===''){
        document.querySelector('.stats').innerHTML = `<h3>No digitaste un nombre<h3>`
        setTimeout(limpiar,2000)
    }
    buscar()
})


document.getElementById('nuevo').addEventListener('click', limpiar)
function limpiar() {
    document.querySelector('#iniciar').disabled = false
    document.querySelector('.foto').src = ''
    document.querySelector('#nombre').value = ''
    document.querySelector('.error').textContent = ''
    const datos = document.querySelector('.stats').innerHTML = ''
}