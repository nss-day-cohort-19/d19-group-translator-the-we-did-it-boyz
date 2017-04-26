var german = (function(Translator){
	var germanwords = [["merry", "Frohe"], ["christmas","Weihnachten"], ["and a", "und ein"], ["happy", "gutes"], ["new", "neues"], ["year", "Jahr"]];

		Translator.translateGerman = function(msg){
			var translatedMsg = [""];
			for (x in msg){
				for (var i = 0; i < germanwords.length; i++) {
					console.log(x, germanwords[i]);
					if(germanwords[i][0] == msg[x]){
					 	translatedMsg.push(germanwords[i][1]);
						break;
					}
				}
			}
			  var germanTranslation = translatedMsg.reduce(function(a, b){
			  	return a + " " + b;
			  })
			  	return germanTranslation;
		}
})(Translator);