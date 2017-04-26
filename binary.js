console.log('binary loaded');
var Binary= (function(Translator){
	var englishtoBi= {"merry":"01001101011001010111001001110010 01111001","christmas":"01100011011010000111001001101001 0111001101110100011011010110000101110011","and":"011000010110111001100100","happy":"010010000110000101110000 0111000001111001 ", "new":"011011100110010101110111","year":"01111001011001010110000101110010"};
	var binaryArray= Object.keys(englishtoBi).map(function(x){
		return [String(x), englishtoBi[x]];
	});
	console.log(binaryArray);
		Translator.translateBinary= function(event){
			var message=[];
				for(word in event) {
				for (var i = 0; i < binaryArray.length; i++) {
					if(binaryArray[i][0] == event[word]) {
						message.push(binaryArray[i][1]);
						break;
					}
				}
			}
			var message2 = message.reduce(function(a, b) {
				return a + " " + b;
			});
			return message2;
		}
})(Translator);