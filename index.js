const pokeAPI='https://pokeapi.co/api/v2/pokemon/'

function buscar(){
let nombre=document.getElementById('nombre').value

fetch(`${pokeAPI}${nombre}`)
.then(response=>{
    if(response.status===404){
        document.querySelector('.error').textContent='No encontrado'
        // document.getElementById('iniciar').disabled=false
    } else{
        return response.json()
    }
    })

.then(data=>{
    const img=document.querySelector('#foto')
    img.src=data.sprites.front_default
    const datos=document.querySelector('.stats').innerHTML=`
    <p class="hp">Hp: ${data.stats[0].base_stat}</p>
    <p class="attack">Attack: ${data.stats[1].base_stat}</p>
    <p class="defense">Defense: ${data.stats[2].base_stat}</p>
    <p class="specialAttack">Special Attack: ${data.stats[3].base_stat}</p>
    <p class="specialDefense">Special Defense: ${data.stats[4].base_stat}</p>
    <p class="speed">Speed ${data.stats[5].base_stat}</p>`
    
    
})
}


document.getElementById('iniciar').addEventListener('click',()=>{
    document.querySelector('#iniciar').disabled=true
    buscar()
})


document.getElementById('nuevo').addEventListener('click',()=>{
    document.querySelector('#iniciar').disabled=false
    document.querySelector('#foto').src=''
    document.querySelector('#nombre').value=''
    document.querySelector('.error').textContent=''
    const datos=document.querySelector('.stats').innerHTML=''
})