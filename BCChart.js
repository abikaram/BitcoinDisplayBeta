google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(makeChart);

function makeChart() {
    fetch(`https://api.coindesk.com/v1/bpi/historical/close`).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        let data = new google.visualization.DataTable();
        data.addColumn('string', 'X');
        data.addColumn('number', 'BTC Rate');

        let dates = jsonResponse.bpi;
        let inData = [];
        for (const entry in dates){
            inData.push([entry, dates[entry]]);
        }

        console.log(inData);

        data.addRows(inData);

        let options = {
            chart: {
            title: 'Bitcoin Rate previous 30 Days'
            },
            hAxis: {
            title: 'Date'
            },
            vAxis: {
            title: 'USD'
            }
        };

        let chart = new google.visualization.LineChart(document.getElementById('lineChart'));
        chart.draw(data, options);
})};