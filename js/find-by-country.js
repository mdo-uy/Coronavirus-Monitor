// Free API UNLIMITED
function findByCountry(country) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=" + country,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "fd9e96e6dfmsh8736910f325c851p140c79jsn00828546f281"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(JSON.parse(response).latest_stat_by_country[0].total_cases);

        $('#total-casos-pais').html(JSON.parse(response).latest_stat_by_country[0].total_cases);
        $('#total-muertes-pais').html(JSON.parse(response).latest_stat_by_country[0].total_deaths);
        $('#total-recuperados-pais').html(JSON.parse(response).latest_stat_by_country[0].total_recovered);	
    });
}