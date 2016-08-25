
$(function(){

	var apiKey = '5416fef8ada2d0d6bef01f75135e956c';

//    $("#btn").click(function(event){
      	
        $.ajax({
        	
        	url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json',
        	dataType: 'jsonp',
        	jsonpCallback: 'jsonFlickrApi',
        	data: {"tags":"lighthouses", api_key: apiKey},
        	success: function(data){
        		
				$.each(data.photos.photo, function(i, item){
          			$("#flickrImage").removeAttr("src");         		
          			src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
          			$("#slideshow").append("<div><img width='300px' height='200px' src= " + src + " /><h5>" + item.title + "</h5></div>")

          		});

				$("#slideshow > div:gt(0)").hide();
				setInterval(function() { 
				  $('#slideshow > div:first')
				    .fadeOut(1000)
				    .next()
				    .fadeIn(1000)
				    .end()
				    .appendTo('#slideshow');
				},  3000);


          	},
          	error: function(jqXHR, textStatus, errorThrown){
				console.log("error!");
				console.log(textStatus);
				console.log(errorThrown);
          	}     
        });
      //});
   });

 
