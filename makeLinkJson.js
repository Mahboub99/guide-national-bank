// Read input.csv
// Write output.json

var fs = require('fs');
var csv = require('csv');

var input = fs.readFileSync('input.csv', 'utf8');
var output = {};

const makeId = (name, group, sector, degree, pillar) => {
    name = name.trim().replace(/(\r\n|\n|\r|\t|)/gm, "")
    group = group.trim().replace(/(\r\n|\n|\r|\t|)/gm, "")
    sector = sector.trim().replace(/(\r\n|\n|\r|\t|)/gm, "")
    degree = degree.trim().replace(/(\r\n|\n|\r|\t|)/gm, "")
    pillar = pillar.trim().replace(/(\r\n|\n|\r|\t|)/gm, "")
    const id = `${name}-${group}-${sector}-${degree}-${pillar}`;
    console.log(`Course link: ${id}`);
    return `${name}-${group}-${sector}-${degree}-${pillar}`;
}

csv.parse(input, function(err, data) {
  // remove header
  data.shift();

  for (const course of data) {
    const id = makeId(course[0], course[1], course[2], course[3], course[4]);
    output[id] = course[5];
  }


  // write output
  fs.writeFileSync('output.json', JSON.stringify(output));
});
