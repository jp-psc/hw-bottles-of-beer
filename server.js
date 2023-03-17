const express = require('express')

const app = express()

const PORT = 8083

app.get('/', (req, res) => {
    res.send(
        `<h1>99 Bottles of beer on the wall</h1>
        <p>
            <h2>
                <a href="/98">Take one down, pass it around</a>
            </h2>
        </p>`
    );
})

app.get('/:numBottles', (req, res) => {
    const bottlesLeft = req.params.numBottles;
    let link = '';
  
    if (bottlesLeft > 0) {
      link = `<a href="/${bottlesLeft - 1}">Take one down, pass it around</a>`;
    }
  
    res.send(`
      <h1>${bottlesLeft} Bottles of beer on the wall</h1>
      ${link}</br></br>
      <a href="/">Start over</a>
    `);
  });




app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})