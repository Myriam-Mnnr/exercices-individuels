
//Exo sapin - étape 1
function nbEspace(n){
    for(let espace=0; espace<n; espace++){
        document.body.innerHTML += "&nbsp"; 
    }
}

function nbEtoile(n) {
    for(let etoile=0; etoile<n; etoile++){
        document.body.innerHTML += "*"
    }
}

function sapin(n) {
    nbEspace(n+1); 
    document.body.innerHTML += "+" + "<br>"; 
    for (let ligne = 0; ligne < n + 1; ligne++) {
       if(ligne==0){
           nbEspace(n); 
           document.body.innerHTML += "&#47";
           nbEtoile(1); 
           document.body.innerHTML += "&#92" + "<br>";
       } 
       else {
           nbEspace(n-ligne); 
           document.body.innerHTML += "&#47";
           nbEtoile(ligne*2+1); 
           document.body.innerHTML += "&#92" + "<br>"
       }
    }
}

sapin(1); 
