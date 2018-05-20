var caja = document.getElementById("caja");
var cmdEnviar= document.getElementById("enviar").onclick=function(){fnEnviar()};
var textBox= document.getElementById("texto");
function fnEnviar(){
    if(textBox.value!="")
    {
        var contenedor=document.createElement("DIV");
        var texto=document.createTextNode(textBox.value);
        contenedor.className="contenedorMensaje";
        contenedor.appendChild(texto);
        caja.appendChild(contenedor);
        textBox.value="";
        caja.scrollTop=caja.scrollTop+contenedor.offsetHeight+20;
    }
}
