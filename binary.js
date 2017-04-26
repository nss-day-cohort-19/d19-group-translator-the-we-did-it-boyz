console.log('binary loaded');
var Binary= (function(Translator){
	var binObj= {"merry":"0100110101100101011100100111001001111001","christmas":"01100011011010000111001001101001 0111001101110100011011010110000101110011","and":"011000010110111001100100","happy":"010010000110000101110000 0111000001111001 ", "new":"011011100110010101110111","year":"01111001011001010110000101110010"};
		Translator.translateBinary= function(event){
			var message=[];
				for(word in event) {
					var translate = false;
					for(var key in binObj){
					if(key == event[word]) {
						message.push(binObj[key]);
						translate= true;
						break;
					}
				}
				if(!translate){
					message.push(event[word]);
				}
			}
			var message2 = message.reduce(function(a, b) {
				return a + " " + b;
			});
			return message2;
		}
})(Translator);