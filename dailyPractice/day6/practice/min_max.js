function minOf2(x, y){
  return x < y ? x : y;
}

function minOf3(x, y, z){
  return minOf2(minOf2(x, y), z);
}

function maxOf2(x, y){
  return x > y ? x : y;
}

function maxOf3(x, y, z){
  return maxOf2(maxOf2(x, y), z);
}

const x = 10;
const y = 20;
const z = 30;
console.log("Minimum of ", y, "and", z, "is", minOf2(y, z));
console.log("Minimum of ", x, y, "and", z, "is", minOf3(x, y, z));
console.log("Maxmimum of ", y, "and", z, "is", maxOf2(y, z));
console.log("Maxmimum of ", x, y, "and", z, "is", maxOf3(x, y, z));
