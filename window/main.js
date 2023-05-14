//Wyświetlenie obiektu window w konsoli może być różne w zależności od tego jakie API używa przeglądarka
console.log(window)
//Do obiektu window należy wiele funkcji, niektóre z nich to alert, confirm, prompt, setTimeout, setInterval
function showAlert(){
    window.alert('alert')
}
//Przykladowe użycie confirma
function showConfirm(){
    const confirm = window.confirm('confirm')
    if(confirm===true){
        window.alert('potwierdzono')
    }else{
        window.alert('nie potwierdzono')
    }
}
//Przykładowe użycie prompta
function showPrompt(){
    window.prompt('prompt')
}
//Przykładowe użycie setInterval i setTimeout
function showIandT(){
    const interval = window.setInterval(()=>{console.log('interval')},1)
    window.setTimeout(()=>{window.clearInterval(interval)},10000)
    window.alert('w konsoli przez 10s bedzie powtarzana wiadomosc')
}