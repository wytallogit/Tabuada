let n = document.getElementById('n')
let r = document.getElementById('res')


function calcular() {
    let n1 = Number(n.value)
    if (n.value.length == 0) {
        alert('Digite um número')
    } else {
        for (var c = 0; c <= 10; c += 1) {
            r.innerHTML += `${n1} x ${c} = ${n1*c} <br>`
        }
    }

}

