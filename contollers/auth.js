exports.greetings =async(req,res)=>{
    res.send('<h1>Hollow Express JS</h1>')
}

exports.info = async(req,res)=>{
    res.json({status:"Success",massage:"Hollow Express js JSON"})
}