

const getUser = async (req,res) => {
    res.status(200).json({status:"ok",message:"success"});
    
}

const postUser = async (req,res) => {
    res.status(200).json({status:"ok",message:"success"});
}

const updateUser = async (req,res) => {
    res.status(200).json({status:"ok",message:"success"});
}

const delUser = async (req,res) => {
    res.status(200).json({status:"ok",message:"success"});
}


module.exports = {
    getUser,    
    postUser,
    updateUser,
    delUser
}