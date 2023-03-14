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

app.get('/:number', (req, res) => {
    let number_of_bottles = req.params.number;

    if (number_of_bottles > 0) {
        res.send(`
        <h1>${number_of_bottles} Bottles of beer on the wall</h1>
            <p>
                <h2>
                    <a href = '/${number_of_bottles - 1}'>
                        Take one down, pass it around
                    </a>
                </h2>
            </p>    
        `);
    }
})

app.listen(PORT, () => {
    console.log('Listening on ${PORT}')
})