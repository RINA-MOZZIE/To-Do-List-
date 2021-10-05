//tanımlama
var wi = document.getElementById('wordinput');
var butto = document.getElementById('add');
var list = document.getElementById('liste');
var element = document.getElementsByTagName('li');
//butona bir tıklanma fonksiyonu atıyoruz
butto.addEventListener('click', () => {
 //eğer bir şey yazılmamışsa uyarı vermesini sağlıyoruz
let word = wi.value;
if(!word.length) return alert('Type anything in the text box!');
let li = document.createElement('li');
li.innerText = word;
list.insertBefore(li, list.childNodes[0]);
wi.value = "";
});
//Li'deki bir yazıya tıklandığında renginin değişmesini ve üzerine çizik atılmasını sağlıyoruz
list.addEventListener('click', (e) => {
 if(e.target.tagName === 'LI'){
     e.target.classList.toggle('complated');
 }
});
