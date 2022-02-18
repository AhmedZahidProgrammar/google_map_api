const axios = require('axios');
const { append } = require('express/lib/response');
const router=require("express").Router();
router.post('/getDistanceMatrixApi',async(req,res)=>{
    try {
            if(req.body.destinationsLat &&
                req.body.destinationsLong &&
                req.body.originsLat &&
                req.body.originsLong &&
                req.body.key){
                        var googleMapApi=`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${req.body.destinationsLat},${req.body.destinationsLong}&origins=${req.body.originsLat},${req.body.originsLong}&key=${req.body.key}`;
                const response = await axios.get(
                        // 'https://maps.googleapis.com/maps/api/distancematrix/json?destinations=29.962727,31.283762&origins=33.653882,73.0823858&key=AIzaSyA0XctDvgS5sjZ4hvSKrjXWi8cKwz7jCkM'
                        googleMapApi
                        );
                if(response.status==200){
                res.json((response.data));
                }else{
                        res.status(400).json({Error:"Not Allowed"});     
                }
                // res.json(googleMapApi);

            }else{
                res.status(400).json({Error:"Please provide all the required parameters"});
            }
        

} catch (error) {
        console.error(error);
}
    // res.json({"Response":"pong"});
});
router.get('/check',(req,res)=>{
res.json({"check":"sdsdgsdgsd"});
});
module.exports=router;