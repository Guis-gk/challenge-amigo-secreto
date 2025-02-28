let amigo= [];
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value= "";
    inputAmigo.focus();
    renderizarAmigos();
}
