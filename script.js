function mostrar() {
    let date = new Date()
    let ano_atual = date.getFullYear()
    let ano_nascimento = document.getElementById('ano').value
    let resultado = document.getElementById('resultado')
    let idade = Number(ano_atual - ano_nascimento)
    if (ano_nascimento.length == 0 || ano_nascimento > ano_atual) {
        window.alert('Digite uma data válida')
    } else {
        var radio_sex = document.getElementsByName('sexo')
        var res = document.getElementById('resultado')
        var img = document.createElement('img')
        var sexo = ''
        img.setAttribute('id', 'img')
        if (radio_sex[0].checked) {
            sexo = 'homem'
            if (idade > 0 && idade < 15) {
                img.setAttribute('src', 'ibagens/crianca-m.jpg')
            } else if (idade >= 15 && idade <= 50) {
                img.setAttribute('src', 'ibagens/adulto-m.jpg')
            } else if (idade > 50) {
                img.setAttribute('src', 'ibagens/idoso-m.jpg')
            }
        } else if (radio_sex[1].checked) {
            sexo = 'mulher'
            if (idade > 0 && idade < 15) {
                img.setAttribute('src', 'ibagens/crianca-f.jpg')
            } else if (idade >= 15 && idade <= 50) {
                img.setAttribute('src', 'ibagens/adulto-f.jpg')
                img.style.height = '100px'
            } else if (idade > 50) {
                img.setAttribute('src', 'ibagens/idoso-f.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
    }
}
