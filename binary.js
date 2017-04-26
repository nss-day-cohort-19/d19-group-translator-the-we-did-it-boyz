console.log('binary loaded');
var Translator= (function(){
	var englishtoBi= {"merry":"01001101 01100101 01110010 01110010 01111001","christmas":"01100011 01101000 01110010 01101001 01110011 01110100 01101101 01100001 01110011","and":"01100001 01101110 01100100","happy":"01001000 01100001 01110000 01110000 01111001 ", "new":"01101110 01100101 01110111","year":"01111001 01100101 01100001 01110010"};
	var binaryArray= Object.keys(englishtoBi).map(function(x){
		return [Number(x), englishtoBi[x]];
	});
	console.log(binaryArray);
	return {
		translateBinary: function(event){
			var message=[""];
				for(word in event) {
				for (var i = 0; i < binaryArray.length; i++) {
					console.log(word, binaryArray[i]);
					if(binaryArray[i][0] == word) {
						message.push(word[i][1]);
						console.log(word);
						break;
					}
				}
			}
			console.log(message);
			var message2 = message.reduce(function(a, b) {

				return a + " " + b;
			});
			return message2;
		}
	}
})();