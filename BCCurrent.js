const displayTop = document.getElementById('displayTop');
const rate = document.getElementById('rate');
const time = document.getElementById('time');

//fetch GET
function fetchPresent(CC) {
    const urlAPI = 'https://api.coindesk.com/v1/bpi/currentprice/'+CC+'.json';
    fetch(urlAPI).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        displayTop.innerHTML = `Current Rate (${jsonResponse.bpi[CC].code})`;
        rate.innerHTML = `${jsonResponse.bpi[CC].rate}`;
        time.innerHTML = `Updated: ${jsonResponse.time.updated}`;
    })};

fetchPresent('USD');
let interval = setInterval(fetchPresent, 60000, 'USD');
function updateDisplay(currencyCode) {
    clearInterval(interval);
    const CC = currencyCode.value;
    fetchPresent(CC);
    interval = setInterval(fetchPresent, 60000, CC);
}