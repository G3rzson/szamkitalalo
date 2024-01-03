
var newRandomNumber;
var randomNumber = Math.floor(Math.random() * 100) + 1;
var bekuldSzam;
var tartalomMegjelent = false;
var clickCount = 0;
var hozzaadas;

document.getElementById('randomNumber').textContent = randomNumber;

function start() {
    if (!tartalomMegjelent) {
        // Szekció létrehozása
        var szekcio = document.createElement('section');
        szekcio.id = 'mezo';
        szekcio.className = 'input-number';

        // Űrlap létrehozása
        var form = document.createElement('form');
        form.id = 'form';
        form.className = 'form';
        form.textContent = 'Add meg a tipped:';

        // Input mező létrehozása
        var inputMezo = document.createElement('input');
        inputMezo.id = 'mezo_1';
        inputMezo.className = 'input-mezo';
        inputMezo.type = 'number';
        inputMezo.placeholder = 'Tipped:';

        // Input mezőt hozzáadása az űrlaphoz
        form.appendChild(inputMezo);

        // Űrlap hozzáadása a szekcióhoz
        szekcio.appendChild(form);

        // Gomb létrehozása
        var gomb1 = document.createElement('button');
        gomb1.id = 'tippbekuldes';
        gomb1.className = 'start-gomb';
        gomb1.textContent = 'Tipp beküldése';
        gomb1.onclick = function() {
            tippBekuldes();
        };

        // Eredmények div létrehozása
        var eredmenyDiv = document.createElement('div');
        eredmenyDiv.className = 'eredmeny';

        // Eredmények tartalma
        var eredmenyP = document.createElement('p');
        eredmenyP.id = 'eredmeny-p';
        eredmenyP.className = 'eredmeny-p';
        eredmenyP.textContent = 'A szám amit megadtál:';

        var vegeredmenyP = document.createElement('p');
        vegeredmenyP.id = 'vegeredmeny';
        vegeredmenyP.className = 'vegeredmeny';

        hozzaadas = document.createElement('p');
        hozzaadas.id = 'probalkozasok';
        hozzaadas.className = 'probalkozasok';
        hozzaadas.textContent = 'Próbálkozások száma: ';

        // Gomb létrehozása
        var gomb2 = document.createElement('button');
        gomb2.className = 'start-gomb';
        gomb2.textContent = 'Újra';
        gomb2.onclick = function() {
            reset();
        };

        // Eredmények tartalmának hozzáadása a div-hez
        eredmenyDiv.appendChild(eredmenyP);
        eredmenyDiv.appendChild(vegeredmenyP);

        // Elemek hozzáadása a body-hoz
        document.body.appendChild(szekcio);
        document.body.appendChild(gomb1);
        document.body.appendChild(eredmenyDiv);
        document.body.appendChild(hozzaadas);
        document.body.appendChild(gomb2);

        tartalomMegjelent = true;
    }
}

function tippBekuldes() {
    // Kattintás esetén növeljük a számlálót
    clickCount++;
    hozzaadas.innerHTML = 'Próbálkozások száma: ';
    hozzaadas.innerHTML += `${clickCount}`;
    //console.log(clickCount);

    var input = document.getElementById('mezo_1');

    var inputValue = input.value;
    //console.log(inputValue);

    // Az értéket átalakítjuk és kiírjuk
    bekuldSzam = parseInt(inputValue, 10);
    //console.log(bekuldSzam);

    if (randomNumber == bekuldSzam) {
        //console.log('Telitalálat');
        document.getElementById('vegeredmeny').textContent = `Telitalálat`;
        document.getElementById('randomNumber').style.visibility = 'visible';
        document.getElementById('vegeredmeny').style.color = 'lightgreen';

        // Függvény a pulzáló animáció hozzáadásához
        function enablePulsating() {
            var paragraph = document.getElementById('vegeredmeny');
            paragraph.classList.add('pulzal');
        }

        // Függvény a pulzáló animáció eltávolításához
        function disablePulsating() {
            var paragraph = document.getElementById('vegeredmeny');
            paragraph.classList.remove('pulzal');
        }

        // hozzáadja a pulzáló animációt
        setTimeout(enablePulsating);

        // 5 másodperc után eltávolítja a pulzáló animációt
        setTimeout(disablePulsating, 5000);
    } else if (randomNumber > bekuldSzam) {
        //console.log('Kissebb');
        document.getElementById('vegeredmeny').textContent = `Kisebb`;
        document.getElementById('vegeredmeny').style.color = 'lightsalmon';
    } else if (randomNumber < bekuldSzam) {
        //console.log('Nagyobb');
        document.getElementById('vegeredmeny').textContent = `Nagyobb`;
        document.getElementById('vegeredmeny').style.color = 'lightsalmon';
    }
}

function reset() {
    document.getElementById('randomNumber').style.visibility = 'hidden';
    document.getElementById('vegeredmeny').textContent = ``;

    if (randomNumber !== bekuldSzam) {
        const form = document.getElementById('form');
        form.reset();
    } else {
        const form = document.getElementById('form');
        form.reset();

        newRandomNumber = Math.floor(Math.random() * 100) + 1;
        // Addig generál új számot, amíg az nem lesz különböző az előzőtől
        while (newRandomNumber === randomNumber) {
            newRandomNumber = Math.floor(Math.random() * 100) + 1;
        }
        document.getElementById('randomNumber').textContent = newRandomNumber;
        randomNumber = newRandomNumber;

        hozzaadas.innerHTML = 'Próbálkozások száma: ';
        clickCount = 0
    }
    //console.log(randomNumber);
}
