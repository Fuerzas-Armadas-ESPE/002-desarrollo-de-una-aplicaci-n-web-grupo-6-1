const petData = {
    adultos: [
        { src: "img/A-Brownie.png", alt: "Brownie", age: "10 Años", name: "Brownie", gender: "Hembra", size: "Pequeña" },
        { src: "img/A-Bruno.png", alt: "Bruno", age: "8 Años", name: "Bruno", gender: "Macho", size: "Grande" },
        { src: "img/A-Dobby.png", alt: "Dobby", age: "9 Años", name: "Dobby", gender: "Macho", size: "Grande" },
        { src: "img/A-Leo.png", alt: "Leo", age: "12 Años", name: "Leo", gender: "Macho", size: "Grande" }
    ],
    jovenes: [
        
        { src: "img/J-Ben.png", alt: "Ben", age: "3 Años", name: "Ben", gender: "Macho", size: "Grande" },
        { src: "img/J-Cookie.png", alt: "Cookie", age: "3 Años", name: "Cookie", gender: "Macho", size: "Mediano" },
        { src: "img/J-Elvys.png", alt: "Elvys", age: "2 Años", name: "Elvys", gender: "Macho", size: "Grande" },
        { src: "img/J-Luna.png", alt: "Luna", age: "4 Años", name: "Luna", gender: "Hembra", size: "Grande" },
        { src: "img/J-Princess.png", alt: "Princess", age: "2 Años", name: "Princess", gender: "Hembra", size: "Pequeña" },
        { src: "img/J-Rex.png", alt: "Rex", age: "3 Años", name: "Rex", gender: "Macho", size: "Mediano" },
        { src: "img/J-Teo.png", alt: "Teo", age: "2 Años", name: "Teo", gender: "Macho", size: "Mediano" }
    ],
    cachorros: [
       
        { src: "img/C-Axel.png", alt: "Axel", age: "5 Meses", name: "Axel", gender: "Macho", size: "Mediano" },
        { src: "img/C-Betty.png", alt: "Betty", age: "6 Meses", name: "Betty", gender: "Hembra", size: "Mediana" },
        { src: "img/C-Colin.png", alt: "Colin", age: "4 Meses", name: "Colin", gender: "Macho", size: "Mediana" },
        { src: "img/C-Honguito.png", alt: "Honguito", age: "3 Meses", name: "Honguito", gender: "Macho", size: "Mediano" },
        { src: "img/C-Kiko.png", alt: "Kiko", age: "5 Meses", name: "Kiko", gender: "Macho", size: "Mediano" },
        { src: "img/C-Lexi.png", alt: "Lexi", age: "10 Meses", name: "Lexi", gender: "Hembra", size: "Mediano" },
        { src: "img/C-Piper.png", alt: "Piper", age: "4 Meses", name: "Piper", gender: "Hembra", size: "Mediano" }
    ]
};

const containerPets = document.getElementById('container-pets');
const options = document.querySelectorAll('.container-options span');

function loadPets(category) {
    containerPets.innerHTML = ''; // Clear current pets
    petData[category].forEach(pet => {
        const petCard = `
            <div class="card-pet">
                <div class="container-img">
                    <img src="${pet.src}" alt="${pet.alt}" />
                    <span class="age-tag">${pet.age}</span>
                </div>
                <div class="content-card-pet">
                    <div class="hearts">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <h3>${pet.name}</h3>
                    <span class="adopt-button">
                        <i class="fa-solid fa-heart"></i>
                    </span>
                    <p class="details">${pet.gender}<span>${pet.size}</span></p>
                </div>
            </div>
        `;
        containerPets.innerHTML += petCard;
    });
}

options.forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector('.container-options .active').classList.remove('active');
        option.classList.add('active');
        loadPets(option.id);
    });
});

// Load default category (adultos) on page load
loadPets('adultos');

//Buscador de contenido
//Declarando variables
search_form = document.getElementById('search-form');
search = document.getElementById('search');
box_search = document.getElementById('box-search');

//Función para mostrar el buscador
function show_search(){
    box_search.style.display = 'block';
    search_form.style.display = 'none';
    search.focus();

}

//Función para ocultar el buscador
function hide_search(){
    box_search.style.display = 'none';
    search_form.style.display = 'block';
    search.value = '';

}


//creando filtro de busqueda
document.getElementById('search').addEventListener('keyup', buscador_interno);
function buscador_interno(){
    filter = search.value.toUpperCase();
    li = box_search.getElementsByTagName('li');

    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
            box_search.style.display = 'block';
            if(search.value === ''){
                box_search.style.display = 'none';
            }
        }else{
            li[i].style.display = 'none';
        }
    }
}



const adoptButton = document.querySelectorAll('.adopt-button');
adoptButton.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

