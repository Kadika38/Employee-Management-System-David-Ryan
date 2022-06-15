const express = require('express');
const routes = require('./routes');
/* const mysql = require('mysql2'); */

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'DarmanIsKadikasDad1138()',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
); */

app.get('/kadtest', (req, res) => {
  res.send('Hello');
})

app.use(routes);

// Default response for unknown requests
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
