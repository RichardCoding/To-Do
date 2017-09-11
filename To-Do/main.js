var testo;
var array = [];

function tastoPremuto() {
  testo = document.getElementById('oggetto').value // testo corrisponde a ciò che è nell'input
  if (testo != "") { // Se c'è del testo nel campo di input
  // Variabili necessarie per eseguire il resto del codice
  var ul = document.getElementById('lista');
  var li = document.createElement('li');
  var lis = document.getElementsByTagName('li');
  if (array.length >= 1) {
    // tastoElimina();
    for (var j = 0; j < array.length; j++) {
      if (lis.length > 1) {
        ul.removeChild(ul.childNodes[j]);
      }
    }
  }

  // Aggiungo l'elemento nell'array
  array.unshift(testo);
  console.log(array);
  if (array.length > 0) {
    for (var i = 0; i < array.length; i++)
    ul.appendChild(li);
    li.appendChild(document.createTextNode(array[i]));
    li.setAttribute('id','elementi');
  }
}


document.getElementById('oggetto').value = ""; // Rende vuoto il campo imput
}
//}

// function tastoElimina() {
//   var ul = document.getElementById('lista');
//   var li = document.getElementById('elementi');
//   var lis = document.getElementsByTagName('li');
//   for (var j = 0; j < array.length; j++) {
//     if (lis.length > 1) {
//       ul.removeChild(ul.childNodes[j]);
//     }
//   }
// }
// ul.removeChild(li);
