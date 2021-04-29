function ouvrir_box(id, titre, text1) {
	  var divelement = document.getElementById(id);
	  document.getElementById('titre-box').innerHTML = titre;
	  document.getElementById('texte1-box').innerHTML = text1;
	  divelement.style.display = 'block';
	}
