var testo; // Valore input
var array = []; // Array todo

function tastoPremuto() {
  // Variabili necessarie per eseguire il resto del codice
  testo = document.getElementById('oggetto').value // testo corrisponde a ciò che è nell'input
  var ul = document.getElementById('lista'); //  La lista
  var lis = ul.getElementsByTagName('li').length; // Numero elementi presenti

  if (testo != "") { // Se c'è del testo nel campo di input

  array.unshift(testo);
  if (lis > 0) { // Se ci sono attivita le rimuove
    ul.innerHTML = "";
  }
  for (var i = 0; i < array.length; i++) {
    // Nuovo elemento
    var li = document.createElement('li');

    // Setta gli attributi
    li.setAttribute('id','elementi');

    // Setta il valore
    li.appendChild(document.createTextNode(array[i]));

    // Lo aggiunge alla lista
    ul.appendChild(li);

    // Pulisce l'input
    document.getElementById('oggetto').value = "";
  }
}
}
