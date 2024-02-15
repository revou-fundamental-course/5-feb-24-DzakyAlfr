let celciusInput = document.getElementsByClassName
("input-field")[0]
let fahrenheitInput = document.getElementsByClassName
("input-field1")[0]
var btnHasil = document.getElementById("hasilButton");
var btnRumus = document.getElementById("konversi");
var hasil = document.getElementById("textHasil")

// Kalkulasi dari celcius ke fahrenheit
celciusInput.addEventListener('input',function(){
    let celciusValue = (parseFloat(celciusInput.value) * 9/5)
    + 32;
    fahrenheitInput.value = parseFloat(celciusValue.toFixed(2));
    fahrenheitInput.innerText = celciusValue
})

// Kalkulasi dari fahrenheit ke celcius
fahrenheitInput.addEventListener('input',function(){
    let fahrenheitValue = (parseFloat(fahrenheitInput.value)
    - 32)* 5/9;
    celciusInput.value = parseFloat(fahrenheitValue.toFixed(2));
    celciusInput.innerText = fahrenheitValue

})

// button untuk mereset semua perubahan
btnHasil.addEventListener('click',function(){
    celciusInput.value = ""
    fahrenheitInput.value = ""
    hasil.textContent = ""
})

// button untuk menampilkan cara penyelesaian
btnRumus.addEventListener('click',function(){
    
    var hasilAkhir = "(" + celciusInput.value + "°C x 9/5) + 32 = "
    + fahrenheitInput.value + "°F";
    hasil.textContent = hasilAkhir;
})