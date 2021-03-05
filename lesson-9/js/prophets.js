const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 



    const prophets = jsonObject['prophets'];
for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    
    let h2 = document.createElement('h2');
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    card.appendChild(h2);

    let birthdate = document.createElement("birthdate");
    birthdate.textContent = "Date of Birth: " + prophets[i].birthdate;
    card.appendChild(birthdate);

    let birthplace = document.createElement("birthplace");
    birthplace.textContent = "Place of Birth: " + prophets[i].birthplace;
    card.appendChild(birthplace);

    let pimg = document.createElement("img");
    pimg.setAttribute("src", prophets[i].imageurl);
    card.appendChild(pimg);

        document.querySelector('div.cards').appendChild(card);

     
}


  });