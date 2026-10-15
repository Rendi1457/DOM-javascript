// DOM selection
// document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul')
judul.style.color = 'red';
judul.style.backgroundColor = 'skyblue';
judul.innerHTML = 'eko';

// document.getElementsTagName -> HTMLCollection
const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//    p[i].style.backgroundColor = 'red';
// }
p[2].style.backgroundColor = 'red';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini di ubah dari javascript'; // mengubah teks paragaraf 1