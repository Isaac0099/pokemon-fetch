/// pokemon api use for leanring json parsing


async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value;

        const urlString = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

        const response = await fetch(urlString);

        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const type = `type: ${data.types[0].type.name}`;
        const abilities = `ability: ${data.abilities[0].ability.name}`;
        const height = `height: ${data.height}`;
        const weight = `weight: ${data.weight}`;
        const baseXP = `baseXP: ${data.base_experience}`;

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const p1 = document.getElementById("type");
        p1.textContent = type;
        p1.style.display = "block";
        const p2 = document.getElementById("abilities");
        p2.textContent = abilities;
        p2.style.display = "block";
        const p3 = document.getElementById("height");
        p3.textContent = height;
        p3.style.display = "block";

        const p4 = document.getElementById("weight");
        p4.textContent = weight;
        p4.style.display = "block";

        const p5 = document.getElementById("baseXP");
        p5.textContent = baseXP;
        p5.style.display = "block";

        const p6 = document.getElementById("type");
        p6.textContent = type;
        p6.style.display = "block";

        console.log(data);

    }
    catch(error){
        console.error(error);
    }
}
    
