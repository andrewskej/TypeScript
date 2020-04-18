console.log('hello typescript!!!')

const givenS : string = 'ADOBECODEBANC'
const givenT : string = "ABC"

function shortSubStr(Sentence:string, Word:string){
    let fast:number = 0, slow:number = 0;
    let result = [0, Infinity];
    let missing = Word.length;
    let counter = {};

    for(let i = 0; i<Word.length; i++){
        counter[Word[i]] = 0;
    }

    for(fast = 0; fast<Sentence.length; fast++){
        if(Sentence[fast] in counter){
            if(counter[Sentence[fast]]===0){
                missing -= 1;
            }
            counter[Sentence[fast]] += 1;
        }
    }

    while(missing === 0){
        if((fast - slow) < (result[1]- result[0])){
            result = [slow, fast]
        }
        if(Sentence[slow] in counter){
            counter[Sentence[slow]] -= 1;
            if(counter[Sentence[slow]] === 0){
                missing += 1;
            }
        }
        

        slow += 1;
    }
    return result;
}

console.log(shortSubStr(givenS, givenT))