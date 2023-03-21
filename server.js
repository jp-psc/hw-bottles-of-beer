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

app.get('/:bottles', (req, res) => {
  const bottles = parseInt(req.params.bottles);
  if (bottles > 0) {
    res.send(`
      <h1>${bottles} Bottles of beer on the wall</h1>
      <h2><a href="/${bottles-1}">Take one down, pass it around</a></h2>
    `);
  } else {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <h2><a href="/">Start Over</a></h2>
    `);
  }
});



app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})