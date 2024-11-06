const express = require("express");
const router = express.Router();

router.post('/pdata',(req,res)=> {

try {
    // console.log(global.GItems,global.GCategory )
    res.send([global.GItems,global.GCategory])
} catch (error) {
    console.error(error.message);
    res.send("Server Error")
}

}
)
module.exports = router;