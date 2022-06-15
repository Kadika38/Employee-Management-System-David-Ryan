const router = require('express').Router();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'DarmanIsKadikasDad1138()',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM company_db.department;';

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

module.exports = router;