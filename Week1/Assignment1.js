import crypto from 'crypto'

/* What if I ask you the following question — 
Give me an input string that outputs a SHA-256 hash that starts with 00000.
How will you do it? */

function findNum(prefix){
    let input = 0;

    while(true){
        let mInput = input.toString();
        let hash = crypto.createHash('sha256').update(mInput).digest('hex');
        if(hash.startsWith(prefix)){
            return { hash: hash, mInput: mInput };
        }
        input++;
    }
}

const prefix = '00000';
const hash = findNum(prefix);
console.log(`Hash code with prefix ${prefix} can be generated using input as: ${hash.mInput} and that results in below hash code.\n${hash.hash}`)