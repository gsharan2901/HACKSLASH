			function weather()
			{
				var api ='http://api.openweathermap.org/data/2.5/weather?q=';
				var city='';
				var apikey ='&APPID=aef920489b49115fef07977a96c334d4';
				var units ='&units=metric';
				city=document.getElementById("city");
				var url=api+city.value+apikey+units;
				$.getJSON(url, function(data){
					while(1)
					{
						if(data)
						{
							var temp=data.main.temp;
							document.write("<span style=\"color:red;\">Weather conditions of " +city.value + " :<div><div> <\/span>");
							document.write("<br>Temperature = "+temp+"C.<br>");
							break;
						}
					}
				});
			}