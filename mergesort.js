let arr = [10, 20, 5, 4, 1, 8, 9, 12, 11, 10, 18, 15];

function divide(arr) {
    if (arr.length <= 1)
    {
        return arr;
    }
    else
    {
        let midside = Math.round(arr.length/2);
        let left = arr.slice(0, midside);
        let right = arr.slice(midside);
        
        return merge(divide(left), divide(right));
    }
}

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] > right[0])
        {
            arr.push(right.shift());
        }
        else {
            arr.push(left.shift());
        }
    }

    return arr.concat(left, right);
}

let finalArray = divide(arr);
for (let i = 0; i < finalArray.length; i++)
{
    console.log(finalArray[i]);
}