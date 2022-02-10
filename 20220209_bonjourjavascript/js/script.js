// Demander le nom et l'afficher dans un h2
function askName() {
    let nom = prompt ("Quel est votre nom ?");
    let nameofuser = "\ud83d\udc4b Bonjour " + nom; 
    document.body.innerHTML += "<h2>" + nameofuser + "</h2>"; 
}

//Demander l'année de naissance, calculer l'age et l'afficher dans un h3
function askBirthYear() {
    let birthyear = prompt ("Quel est votre année de naissance ?");
    //let birthmonth = prompt ("Quel est votre mois de naissance ?");
    //let date = new Date().getFullYear
    let age = 2022 - birthyear; 
    document.body.innerHTML += "<h3> Vous avez " + age + " ans. </h3>"; 
}

askName(); 
askBirthYear(); 