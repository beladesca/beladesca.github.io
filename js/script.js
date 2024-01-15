const sisi1 = document.getElementById('sisi1')
const sisi2 = document.getElementById('sisi2')
const reset1 = document.getElementById('reset luas')
const reset2 = document.getElementById('reset kll')

//menghitung luas
        const hitungluas = document.getElementById('hitung luas')
        const outputluas = document.getElementById('output luas')
        hitungluas.addEventListener('click', function()
        {
            let s = sisi1.value
            let l = s*s
            outputluas.innerHTML = `L = S x S <br> L = ${s} x ${s} <br> L = ${l} cm^2`
        })
//menghitung keliling
        const hitungkll = document.getElementById('hitung kll')
        const outputkll = document.getElementById('output kll')
        hitungkll.addEventListener('click', function()
        {
            let s = sisi2.value 
            let kll = 4*s
            outputkll.innerHTML = `K = 4 x S <br> K = 4 x ${s} <br> K = ${kll} cm`
        })
// Reset hasil perhitungan
        reset1.addEventListener('click', function () {
            sisi1.value = ''
            outputluas.innerHTML = ''
        })
        reset2.addEventListener('click', function () {
            sisi2.value = ''
            outputkll.innerHTML = ''
        })






































































//bela