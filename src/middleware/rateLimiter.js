import { TokenBucket } from "../utils/tokenBucket.js";
import { TOKENS, REFILL_TIME } from "../config.js";
const userBuckets = new Map();

function rateLimit(req, res, next){

    const userIP = req.ip;

    let userBucket = userBuckets.get(userIP);

    if(!userBucket){
       userBucket = new TokenBucket(TOKENS, REFILL_TIME);
       userBuckets.set(userIP, userBucket); 
    }

    if(userBucket.removeToken()){
        next();
    }else{
        res.status(429).json({
            success: false,
            message: "Too Many Request. Please try again!",
            data: ""
        });
    }

}

export default rateLimit;