const router = require('express').Router();

const employees = require('./employees');
const departments = require('./departments');
const roles = require('./roles');

router.use('/employees', employees);
router.use('/departments', departments);
router.use('/roles', roles);

module.exports = router;