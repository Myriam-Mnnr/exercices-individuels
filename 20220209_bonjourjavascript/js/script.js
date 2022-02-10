// Demander le nom et l'afficher dans un h2
function askName() {
    let nom = prompt ("Quel est votre nom ?");
    let nameofuser = "\ud83d\udc4b Bonjour " + nom; 
    document.body.innerHTML += "<h2>" + nameofuser + "</h2>"; 
}

//Demander l'année de naissance, le mois et le jour, calculer l'age et l'afficher dans un h3
function askBirthYear() {
    let birthyear = prompt ("Quel est votre année de naissance ?");
    let birthmonth = prompt ("Quel est votre mois de naissance ?");
    let birthday = prompt("Quel est votre jour de naissance ?"); 
    let today = new Date(); 
    let birth = new Date(birthyear, birthmonth - 1, birthday); 
    let age = today - birth; 
    let agemonth = Math.round(age/1000/60/60/24/365.25); 

    document.body.innerHTML += "<h3> Vous avez " + agemonth + " ans. </h3>"; 
}

askName(); 
askBirthYear(); 