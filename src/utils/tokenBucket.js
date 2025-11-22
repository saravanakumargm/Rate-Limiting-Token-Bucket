export class TokenBucket {
    constructor(capacity, refillPerSec){
        this.capacity = capacity;
        this.tokens = capacity;
        this.refillRate = refillPerSec;
        this.lastRefill = Date.now();
    }

    refill(){
        const now = Date.now();
        const elapesedTime = (now - this.lastRefill) / 1000;
        const tokensToRefill = elapesedTime * this.refillRate;
        this.tokens = Math.min(this.capacity, this.tokens + tokensToRefill);
        this.lastRefill = Date.now();
    }

    removeToken(){
        this.refill();
        if(this.tokens >= 1){
            this.tokens -= 1;
            return true;
        }
        return false;
    }
}

