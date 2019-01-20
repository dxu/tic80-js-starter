var modConcat = require("module-concat");
var outputFile = "bundle.js";
modConcat("index.js", outputFile, function(err, stats) {
	if(err) throw err;
	console.log(stats.files.length + " were combined into " + outputFile);
});
