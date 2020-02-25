

function get(valoreImmesso) {
   if(document.getElementById("espressioni").value.includes('=')){
     cancellaOperazioni();
     cancellaEspressioni();
   }
   document.getElementById("operazioni").value+=valoreImmesso;  
   console.log("qua arrivo");
}
function getOp(valore) {      
      if(document.getElementById("espressioni").value.includes('=')) { 
        let str = document.getElementById("operazioni").value;
        document.getElementById("espressioni").value = str+=valore; 
        cancellaOperazioni();
      }else{
      let str = document.getElementById("operazioni").value + valore;
      console.log(str);
      document.getElementById("espressioni").value+=str;
      //document.getElementById("espressioni").value+=(document.getElementById("operazioni")+valore);
      document.getElementById("operazioni").value="";
        }
      
}

function operazione() {
 let str = document.getElementById("operazioni").value; 
 let risultato = document.getElementById("espressioni").value += str;
 let risultatoConUguale = risultato + "=";
document.getElementById("operazioni").value = eval(risultato);
document.getElementById("espressioni").value = risultatoConUguale;
}
function cancellaOperazioni() { 
 document.getElementById("operazioni").value=""; 
}
function cancellaEspressioni() {
  document.getElementById("espressioni").value="";
}
  
  
 
