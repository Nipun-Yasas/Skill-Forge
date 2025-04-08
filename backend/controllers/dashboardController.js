const {isValidObjectId,Types} = require('mongoose');


const getDashboardData = async (req, res) => {
    try{
        
    }
    catch(error){
        res.status(500).json({message:"Server Error",error})
    }
}

module.exports = { getDashboardData };