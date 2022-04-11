let jewels = prompt("Enter Jewels");
let stones = prompt("Enter Stones");

var numJewelsInStones = function(jewels, stones) {
    const jewelsArray = jewels.split("");
    let count = 0;

    for (let i=0; i< stones.length; i++) {
        let checkStone = stones[i];
        
        if (jewelsArray.includes(checkStone)) count++;
    }
    return count;
};

console.log(numJewelsInStones(jewels, stones));