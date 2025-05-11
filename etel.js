//function meghívása és adatok js tömböl való kiiratása amely külön js fájlban van
function etelkiir() {
        let sz = `<div class="row">`;
        for (const elem of eteltomb) {  
          sz += `
            <div id="grid" class="col-sm-4">
              <img class="img-fluid rounded" src="${elem.kep}" alt="Etel ${elem.neve}" style="width:100%">
              <p>${elem.neve}</p>
              <h3>${elem.leiras}</h3>
              <h4>${elem.tipusa}</h4>
            </div>
          `;
        }
        sz += `</div>`;
        document.getElementById("etel").innerHTML = sz;
      }
// function meghívása
etelkiir();
      