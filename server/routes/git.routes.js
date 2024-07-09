const { getDetails, findData, deleteData, updateData, sortData } = require("../controller/git.controller");
const router = require("express").Router();

router.post('/get-details', getDetails);
router.get('/find-users', findData);
router.get('/sort-user', sortData);
router.put('/edit-user/:id', updateData);
router.delete('/delete-user/:username', deleteData);

module.exports = router;