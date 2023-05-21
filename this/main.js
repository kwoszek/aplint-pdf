// Globalny kontekst
var globalVariable = 'To jest zmienna globalna';

// Funkcja zwykła
function regularFunction() {
    console.log('To jest funkcja zwykła');
    console.log('this w funkcji zwykłej:', this);
}

// Funkcja strzałkowa
const arrowFunction = () => {
    console.log('To jest funkcja strzałkowa');
    console.log('this w funkcji strzałkowej:', this);
}

// Obiekt z metodami
var obj = {
    variable: 'To jest zmienna obiektu',
    regularMethod: function() {
        console.log('To jest metoda obiektu');
        console.log('this w metodzie obiektu:', this);
    },
    arrowMethod: () => {
        console.log('To jest strzałkowa metoda obiektu');
        console.log('this w strzałkowej metodzie obiektu:', this);
    },
    arrowMethodWithBind: function() {
        console.log('To jest strzałkowa metoda obiektu z bind()');
        console.log('this w strzałkowej metodzie obiektu z bind():', this);
    }.bind(this),
};
var differentObj = {
    variable: 'Inna zmienna obiektu'
};