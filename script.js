function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('[ERRO]Faltam dados')
    }else{
        res.innerHTML = 'Contando: ' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            //Contagem crescente 
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML +=` ${c} \u{1F449}`
            }
        }
       
        res.innerHTML += `\u{1F3C1}`
    }
    
}