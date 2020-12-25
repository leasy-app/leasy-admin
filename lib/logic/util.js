export async function asyncForeach(x, cb) {
    for(let i = 0; i < x.length; i++){
        await cb(x[i]);
    }
}