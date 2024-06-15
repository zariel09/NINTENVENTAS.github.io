 /**Cambio de tema e iconos del switch */
 modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Modo Claro"
    }else{
        modeText.innerText = "Modo oscuro"
    }
});
document.getElementById('search-bar').addEventListener('input', function(e) {
    var busqueda = e.target.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'search.php?q=' + busqueda, true);
    xhr.onload = function() {
        if (this.status == 200) {
            document.getElementById('search-results').innerHTML = this.responseText;
        }
    }
    xhr.send();
});
