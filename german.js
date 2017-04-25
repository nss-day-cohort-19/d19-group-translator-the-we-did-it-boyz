var Translatorgerman = (function(){
	var germanwords = [["merry", "Frohe"], ["Chirstmas","Weihnachten"], ["and a", "und ein"], ["happy", "gutes"], ["new", "neues"], ["year", "Jahr"]];

	return {
		translateGerman: function(msg){
			var translatedMsg;
			for (x in msg){
				for (var i = 0; i < germanwords.length; i++) {
					if(germanwords[i][0] == x){
					 translatedMsg.push(germanwords[i](0));
					}
				}
			}
		}
	}
})();