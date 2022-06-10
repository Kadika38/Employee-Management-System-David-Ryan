const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'DarmanIsKadikasDad1138()',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

//app.gets

app.get('/api/movies', (req, res) => {
    let rslts;
    db.query('SELECT movie_name FROM movies', (err, results) => {
        if (err) {
            console.log(err);
        }
        rslts = results;
        console.log(results);
    });
    res.json(`Movies: ${rslts}`)
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
