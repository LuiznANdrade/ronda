const agoraNow = new Date();
    
const diaNow = agoraNow.getDate().toString().padStart(2, '0');
const mesNow = (agoraNow.getMonth() + 1).toString().padStart(2, '0');
const anoNow = agoraNow.getFullYear().toString();

const horaNow = agoraNow.getHours().toString().padStart(2, '0');
const minutosNow = agoraNow.getMinutes().toString().padStart(2, '0');
const segundosNow = agoraNow.getSeconds().toString().padStart(2, '0');

document.querySelector('.dataToday').value = diaNow + '/' + mesNow + '/' + anoNow + ' - ' + horaNow + ':' + minutosNow;

function verificationForms(){
    var nomeRonda2 = document.querySelector('.name').value;
    var dataToday2 = document.querySelector('.dataToday').value;
    var localidadeInfo2 = document.querySelector('.localidadeInfo').value;
    var locationinfo2 = document.querySelector('.locationinfo').value;
    var rondatypeInfo2 = document.querySelector('.rondatypeInfo').value;
    var myinputRonda2 = document.querySelector('#myinputRonda').value;
    var myinput2 = document.querySelector('#myinput').value;
    var observacao2 = document.querySelector('.Observacao').value;
    
    if (nomeRonda2 !== "" && dataToday2 !== "" && localidadeInfo2 !== "" && locationinfo2 !== ""  && rondatypeInfo2 !== "" && observacao2 !== ""){
        if(myinputRonda2 !== "" || myinput2 !== "" ){
            enviarForms()
        }else{
            alert("CODIGO 2: Por favor, selecione alguma opção abaixo:")
        }
    }else{
        alert("CODIGO 1: Por Favor, insira todas as informações no campo abaixo:")
    }

}


function enviarForms(){
    const agora = new Date();
    
    var nomeRonda = document.querySelector('.name').value;
    var dataToday = document.querySelector('.dataToday').value;
    var localidadeInfo = document.querySelector('.localidadeInfo').value;
    var locationinfo = document.querySelector('.locationinfo').value;
    var rondatypeInfo = document.querySelector('.rondatypeInfo').value;
    var myinputRonda = document.querySelector('#myinputRonda').value;
    var myinput = document.querySelector('#myinput').value;
    var observacao = document.querySelector('.Observacao').value;
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    const ano = agora.getFullYear().toString();
    fetch('https://api.sheetmonkey.io/form/3CdweHBrsa13W5mWYFhAZE', {
  
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Nome: nomeRonda, Data: dataToday, Localidade: localidadeInfo, LocalEspecifico: locationinfo, RondaType: rondatypeInfo, RondaDiaria: myinputRonda, Vistoria: myinput, Observação: observacao})
  
    });

    setInterval(function(){
        location.href = "../sucesso.html";
    }, 1200)
  }
  