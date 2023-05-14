//Zmieni kolor tła pierwszego elementu o tagu h1:
function selectHeader(){
    document.querySelector('h1').style.backgroundColor='red';
}
//Zmieni kolor tła elementu o id main:
function selectMain(){
    document.getElementById('main').style.backgroundColor='green';
}
//Zmieni kolor tła pierwszego elementu o klasie paragraph:
function selectParagraph(){
    document.getElementsByClassName('paragraph').item(0).style.backgroundColor='blue';
}