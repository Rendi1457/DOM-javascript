const tombol = document.getElementById('tombol');
tombol.onclick = function () {
    // document.body.style.backgroundColor = 'skyblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random () * 255 + 1);
    const g = Math.round(Math.random () * 255 + 1);
    const b = Math.round(Math.random () * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',100,100)';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb(' + r + ','+ g +',100)';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ','+ g +','+ b +')';
});





document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});