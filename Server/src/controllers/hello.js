function getHello(req, res){
    res.status(200).send({
        msg:"Controller!",
    });
}
module.exports = {
    getHello,
}