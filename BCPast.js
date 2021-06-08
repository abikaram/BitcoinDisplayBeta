//set max of date input to day before
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

let dd = yesterday.getDate();
let mm = yesterday.getMonth() + 1;
let yyyy = yesterday.getFullYear();

if(dd < 10){
    dd = '0'+dd;
}
if(mm < 10){
    mm = '0'+mm;
}
yesterday = yyyy+'-'+mm+'-'+dd;
document.getElementById("dateEnter").setAttribute("max", yesterday);

//fetch GET
function fetchPast(dateEntered){
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${dateEntered}&end=${dateEntered}`).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        document.getElementById('amount').innerHTML = `$${jsonResponse.bpi[dateEntered]}`;
})};