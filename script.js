var form = {
  txtname: document.querySelector(".name"),
  txtpesoAtual: document.querySelector(".pesoAtual"),
  txtaltura: document.querySelector(".altura"),
  txtpesoDesejado: document.querySelector(".pesoDesejado"),
  txtnivelAtividade: document.querySelector(".nivelAtividade"),
  btncalcular: document.querySelector(".calcular")
};
var result = {
  txtobjetivo: document.getElementById("objetivo"),
  txttempoObjetivo: document.getElementById("tempoObjetivo"),
  txtobjetivoConsumo: document.getElementById("objetivoConsumo"),
  txtcaloriasKg: document.getElementById("caloriasKg"),
  txtmacrosDia: document.getElementById("macrosDia"),
  txtconsumoLimite: document.getElementById("consumoLimite")
}

function calcularObjetivos() {
  if(vericarCamposPreenchidos()){
    let textoResultado;
    if(parseFloat(form.txtpesoAtual.value) > parseFloat(form.txtpesoDesejado.value)){
    textoResultado = form.txtpesoAtual.value - form.txtpesoDesejado.value;
    result.txtobjetivo.textContent = "Perder " + textoResultado + " Kg";
    }else{
    textoResultado = form.txtpesoDesejado.value - form.txtpesoAtual.value;
    result.txtobjetivo.textContent = "Ganhar " + textoResultado + " Kg";

  }
  }
}
function vericarCamposPreenchidos() {
  if (form.txtname.value && form.txtpesoAtual.value && form.txtaltura.value && form.txtpesoDesejado.value && form.txtnivelAtividade.value){
    return true;
  }else{
    return false;
  }
}

form.btncalcular.addEventListener("click",()=>{
calcularObjetivos()
});