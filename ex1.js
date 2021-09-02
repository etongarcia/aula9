// Everton Garcia

function menu (prato, tempoInserido){
    let tempoPadrao;

    switch(prato){
        case 'pipoca':
            tempoPadrao = 10;
            resposta (tempoPadrao, tempoInserido); // callback
        break;

        case 'macarrao':
        case 'brigadeiro':
            tempoPadrao = 8;
            resposta (tempoPadrao, tempoInserido); // callback
        break;

        case 'carne':
            tempoPadrao = 15;
            resposta (tempoPadrao, tempoInserido); // callback
        break;

        case 'feijao':
            tempoPadrao = 12;
            resposta (tempoPadrao, tempoInserido); // callback
        break;

        default:
            console.log('Prato inexistente')
    }
    

    function resposta(tempoPadrao, tempoInserido){
        if (tempoInserido<tempoPadrao){
            console.log ('tempo insuficiente');
        }else if (tempoInserido>= tempoPadrao*2 && tempoInserido<tempoPadrao*3){
            console.log ('A comida queimou');
        }else if (tempoInserido>= tempoPadrao*3){
            console.log ("Kabumm");
        }else{
            console.log ('Prato pronto. Bom apetite')
        }
        
    }


}

menu ('lasanha', 45)