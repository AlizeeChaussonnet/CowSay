const etudiantInfo = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${etudiantInfo.name} from ${etudiantInfo.campus}`,
    e : "oO",
    T : "U "
}));
