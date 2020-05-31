var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "fd9e96e6dfmsh8736910f325c851p140c79jsn00828546f281"
	}
}

$.ajax(settings).done(function (response) {
	$('#total-casos').html(JSON.parse(response).total_cases);
	$('#total-muertes').html(JSON.parse(response).total_deaths);
	$('#total-recuperados').html(JSON.parse(response).total_recovered);	
});