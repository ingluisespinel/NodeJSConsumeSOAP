const winston=require('winston');

module.exports.logger = winston.createLogger({
    defaultMeta: { service_name: 'my-service' },
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'all_logs.log' })
    ]
});

module.exports.print=(value)=>{
    console.log(value);
}