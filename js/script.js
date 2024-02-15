let celciusInput = document.getElementsByClassName
("input-field")[0]
let fahrenheitInput = document.getElementsByClassName
("input-field1")[0]
var btnHasil = document.getElementById("hasilButton");
var btnRumus = document.getElementById("konversi");
var hasil = document.getElementById("textHasil")

celciusInput.addEventListener('input',function(){
    let celciusValue = (parseFloat(celciusInput.value) * 9/5)
    + 32;
    //const celciusValue = celciusInput.value
    fahrenheitInput.value = parseFloat(celciusValue.toFixed(2));
    fahrenheitInput.innerText = celciusValue
})

fahrenheitInput.addEventListener('input',function(){
    let fahrenheitValue = (parseFloat(fahrenheitInput.value)
    - 32)* 5/9;
    //const celciusValue = celciusInput.value
    celciusInput.value = parseFloat(fahrenheitValue.toFixed(2));
    celciusInput.innerText = fahrenheitValue

})

btnHasil.addEventListener('click',function(){
    celciusInput.value = ""
    fahrenheitInput.value = ""
    hasil.textContent = ""
})

btnRumus.addEventListener('click',function(){
    var hasilAkhir = ("(",celciusInput.value, "x 9/5 ) + 32 =", 
    fahrenheitInput.value)
    hasil.textContent = hasilAkhir;
})

// function celToFar(){
//     let output = (parseFloat(celciusInput.value) * 9/5) + 32;
//     fahrenheitInput.value = parseFloat(output.toFixed(2));
//     console.log(output);
// }

// function farToCel(){
//     let output = (parseFloat(fahrenheitInput.value) - 32) * 9/5;
//     celciusInput.value = parseFloat(output.toFixed(2));
//     console.log(output);
// }