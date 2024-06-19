require(`dotenv`).config();
// The above is the equivalent of the next two lines:
// const dotenv = require(`dotenv`);
// dotenv.config();
const pokemonPrinterFile = require("./pokemonPrinter");


// import blahblah from `dotenv`;

console.log(process.env.ENVIRONMENT_MESSAGE);



console.log("Terminal app is ruinning!")



pokemonPrinterFile.pokemonPrinter();

console.log("Bye bye, terminal app is finished!")