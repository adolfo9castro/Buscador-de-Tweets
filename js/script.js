$(document).ready(
	function() 
	{
		OAuth.initialize('b10hXMwGRzff3suBAgtGVYlQe');
	}
);
			
	function buscarTweets() 
	{
		OAuth.popup(
			"twitter",
			function(error, result) 
			{
				console.dir(error);						
				//console.dir(result);

				if(result != null)
				{
					var buscador=document.getElementById('buscador').value;

					result.get("/1.1/search/tweets.json?q="+buscador).done(
						function(data) 
						{
							console.dir(data);									
							for(var i=0; i<data.statuses.length; i++) 
							{
								console.log(data.statuses[i]);
								var encontrado=data.statuses[i].text;

								var node=document.createElement("p");
								var shownode=document.createTextNode(encontrado);
								node.appendChild(shownode);
								document.getElementById('tweets').appendChild(node);
											
								var str = document.getElementById("tweets").innerHTML; 
			    				var res = str.replace(buscador, "<span>"+encontrado+"</span>");
			    				document.getElementById("tweets").innerHTML = res;
							}
						}
					);
								
				}
			}
		);
	}
