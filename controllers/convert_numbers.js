const soapClient=require('../components/soap_client');
const {logger}=require('../config/logger_config');

module.exports.convertNumber=(req,res)=>{
    logger.info('Process new request with value '+req.query.number);
    soapClient.callSopaConvertNumber(req.query.number).then(resolve=>{
        logger.info('Response ok, '+resolve);
        res.status(200).send({message:resolve});
    }).catch(error=>{
        logger.info('Error, '+error);
        res.status(500).send({message:error});
    });
}