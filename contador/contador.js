function verificar() {
    var inicio = document.getElementById ('txti')
    var fim = document.getElementById ('txtf')
    var intevalo = document.getElementById ('txtint')
    var res = document.getElementById ('res')
    

    if (inicio.value.length == 0 || fim.value.length == 0 || intevalo.value.length == 0) {
        window.alert (`[ERRO]Digite os valores corretamente!`)
    } else {
        // Testando o sistema acima  -> alert ('Tudo ok!')
        res.innerHTML = `Contando:`
        //criando variaveis e convertendo em número
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(intevalo.value)
       //Verificando se o passo for = 0 irá receber o valor (1)
        if (p <= 0) {
            window.alert('Intervalo ira inciar em 1')
            p = 1
        }
        //iniciando o contador
        if (i < f) {
        //Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449}`
            }
        } else {
            //Contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}