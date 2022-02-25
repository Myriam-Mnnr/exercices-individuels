//ENCODE

//Retourne un tableau contenant chaque caractère
function getLatinCharacterList(string){
   return string.split(""); 
   //ou return Array.from(string)
}

//Dictionnaire
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

//Prend un caractère et retourne sa correspondance en Morse 
function translateLatinCharacter(x){
   let morse = latinToMorse[x];
   //Un espace devient un slash en Morse 
   if(x==" "){
	   morse = "/"; 
   }
   return morse; 
}


//Encode 
function encode(text){
	document.getElementById("result").innerHTML = " ";
	getLatinCharacterList(text.toUpperCase()).forEach(element => {
    document.getElementById("result").innerHTML += translateLatinCharacter(element) + " "; 
}); 
}


//DECODE 
const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  }


function getMorseCharacterList(morse){
	return morse.split(' ');
}


function translateMorseCharacter(y){
	let latin = morseToLatin[y];
	//Le slash sépare les mots en Morse 
	if(y=="/"){
		latin = " "; 
	}
	return latin; 
}

function decode(text){ 
	document.getElementById("result").innerHTML = " ";
	getMorseCharacterList(text).forEach(element => {
		document.getElementById("result").innerHTML += translateMorseCharacter(element); 
	}); 
	}



