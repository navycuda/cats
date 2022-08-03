// Required
const fs = require(`fs`);

const breedDetailsFromFile = function(breed) {
  console.log(`breddDetailsFromFile: Calling readFile...`);
  fs.readFile(`./data/${breed}.txt`, `utf8`, (error, data) => {
    console.log(`In readFile's Callback: it has the data.`);
    if (!error) return data;
  });
};

// lets get the value (won't work, async no return value)
const bombay = breedDetailsFromFile(`Bombay`);
console.log(`Return Value: `, bombay);