//Blok try-catch służy do wyłapywania błędów.
//Wywołujemy nieistniejącą funkcję w bloku try-catch:
function foo(){
    try {
        func()
    }
    catch (e){
        //Teraz możemy wyświetlić błąd jaki wystąpił:
        alert(e)
    }
}
//Błąd dalej istnieje, ale poprzez użycie catch wyłapaliśmy go.