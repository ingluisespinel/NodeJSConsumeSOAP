const {print} =require('./config/logger_config');
const app=require('./app');

app.listen(9090,()=>{
    print('Server up.');
});