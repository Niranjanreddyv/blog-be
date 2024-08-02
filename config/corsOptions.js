const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin ,callback) => {

        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CROS'));
        }

    },
    credentials:true,//cookies , http auth with cross origin request
    optionsSuccessStatus:200 // (CORS preflight checks)
};

module.exports = corsOptions;