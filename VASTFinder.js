var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var count;
var text;
var doubleclickcount;

const options ={
	url:'https://www.youtube.com/watch?v=tMGLMOyu6Ow',
	method:'GET',
}

request(options, function(error, res, body){
  if(error){
  console.log("Error: " + error);
  }

	text = body;
	for(x = 0; x<20; x++){
		count = text.search(new RegExp("vast", "i"));
		if(count !== -1 && text.length>0){
			if(text.charAt(count-1)==='/' || text.charAt(count-1)==='_' || text.charAt(count-1)===' ' || text.charAt(count-1)===':' || text.charAt(count-1)==='c' || text.charAt(count-1)==='\\' || text.charAt(count-1)==='-' || text.charAt(count-1)==='='|| text.charAt(count-1)==='"'){
					console.log(text.substring(count-5, count+10) +  "    " + count);
			}
			text = text.substring(count+4, text.length);
		}

		

	}

});





