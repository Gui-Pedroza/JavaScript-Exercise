function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('resultado')

    if (inicio == "" || fim == "" || passo == "") {
        res.innerHTML = 'Impossível contar!'
        inicio.focus
    } else {
        res.innerHTML = 'Contando: <br>'
        if (passo == 0) {
            window.alert('Passo não pode ser igual a 0, considerando PASSO = 1')
            passo = 1
        }
        if (Number(inicio) < Number(fim)) {
            for (var i = Number(inicio); i <= Number(fim); i += Number(passo)) {
                res.innerHTML += `${i} 👉 `
            }           
        } else {
            for (var i = Number(inicio); i >= Number(fim); i -= Number(passo)) {
                res.innerHTML += `${i} 👉 `
            }            
        }
        res.innerHTML += `🏴`
    }

}