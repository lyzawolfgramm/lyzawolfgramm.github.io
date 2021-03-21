//JSON
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
                
                let card = document.createElement('section');
                let divText = document.createElement('div');
                let divImg = document.createElement('div');
                let h2 = document.createElement('h2');
                


                let motto = document.createElement('p');
                let yearFounded = document.createElement('p');
                let pop = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let image = document.createElement('img');
                
                h2.textContent = towns[i].name;
                motto.className = 'motto';
                motto.textContent = towns[i].motto;
                yearFounded.textContent = `Founded: ${towns[i].yearFounded}`;
                pop.textContent = `Population: ${towns[i].currentPopulation}`;
                averageRainfall.textContent = `Average Rain Fall: ${towns[i].averageRainfall}`;

                image.setAttribute('src', 'images/' + towns[i].photo);
                card.append(h2);
                card.append(motto);
                card.append(yearFounded);
                card.append(pop);
                card.append(averageRainfall);

                divImg.appendChild(image);
                card.appendChild(divImg);
                
                document.querySelector('div.cards').appendChild(card);
            }

        }
    })