// Required
const fs = require(`fs`);

const breedDetailsFromFile = function(breed, callback) {
  console.log(`breddDetailsFromFile: Calling readFile...`);
  fs.readFile(`./data/${breed}.txt`, `utf8`, (error, data) => {
    console.log(`In readFile's Callback: it has the data.`);
    if (!error) callback(data);
  });
};

// lets get the value (won't work, async no return value)
const bombay = function(data) {
  console.log(`callback data: `, data);
};

breedDetailsFromFile(`Bombay`, bombay);

console.log(`Return Value: `, bombay);