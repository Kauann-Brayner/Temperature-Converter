const cF = document.getElementById("cF");
const cK = document.getElementById("cK");
const kC = document.getElementById("kC");
const kF = document.getElementById("kF");
const fC = document.getElementById("fC");
const fK = document.getElementById("fK");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
    const myTemp = parseInt(document.getElementById("myTemp").value);
    const result = document.getElementById("result");
    switch (true) {
        case cF.checked:
            result.textContent = `${myTemp}°C is equal to  ${(((9 / 5) * myTemp) + 32).toFixed(2)}°F`;
            break
    }
    switch (true) {
        case cK.checked:
            result.textContent = `${myTemp}°C is equal to  ${(myTemp + 273.15).toFixed(2)}K`;
            break
    }
    switch (true) {
        case kC.checked:
            result.textContent = `${myTemp}K is equal to  ${(myTemp - 273.15).toFixed(2)}°C`;
            break
    }
    switch (true) {
        case kF.checked:
            result.textContent = `${myTemp}K is equal to  ${(1.8 * (myTemp - 273.15) + 32).toFixed(2)}°F`;
            break
    }
    switch (true) {
        case fC.checked:
            result.textContent = `${myTemp}°F is equal to  ${(5 / 9 * (myTemp - 32)).toFixed(2)}°C`;
            break;
    }
    switch (true) {
        case fK.checked:
            result.textContent = `${myTemp}°F is equal to  ${((myTemp + 459.67) * 5 / 9).toFixed(2)}K`
            break
    }
}
