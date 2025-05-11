fetch('korea_latnivalok.json')
  .then(response => response.json())
  .then(y => adatkiir(y));

function adatkiir(y) {
  tomb = y;
  let sz = "";
  sz += "<div><div class='row'>";
  let sorszam = 0;

  for (const elem of tomb) { 
    console.log(elem);
    sz += `
      <div id="hatar" class="col-lg-3">
        <div class="szegely" data-bs-toggle="modal" data-bs-target="#myModal" onclick='reszletkiir(${sorszam})'>
          <p>${elem.nev}</p>
          <p>${elem.helyszin}</p>
          <p>${elem.rovid}</p>
        </div>
      </div>
    `;
    sorszam++;
  }

  sz += "</div></div>";
  document.getElementById("erdekessegei").innerHTML = sz; 
}

function reszletkiir(sorszam) {
  const elem = tomb[sorszam];
  document.getElementById("modalfej").innerHTML = elem.nev;
  let sz = `
    <p><strong>Helyszín:</strong> ${elem.helyszin}</p>
    <p>${elem.reszletes}</p>
  `;
  document.getElementById("modaltorzs").innerHTML = sz; 
}









