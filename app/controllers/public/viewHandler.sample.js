/*
*   app/controllers/api/sampleAPI.js - A sample API file to show use of controllers
*/
function ViewHandler () {
    
    /*  
    *   Potential use: 
    *       Once you retirve an object from db based on param,
    *       determine which template to render keeping all logic here.
    *       Keeping all logic out of the routing files.
    */
    this.showDefault = (req, res) => {
        const paramFromURL = req.params.param;
        const title = 'default page on /'+paramFromURL;
        res.render('sample/default', {title:title});
    };
    
}

module.exports = ViewHandler;