// Function to find the maximum number of cuts.
function maximizeTheCuts(n, x, y, z) {
  // code here
  const dpArray = new Array(n + 1).fill(-1);
  return cutRodsTab(n, [x, y, z], dpArray);
}

// function cutRods(rod, x, y, z, cache) {
//   if (rod === 0) {
//     return 0;
//   }
//   if (rod < 0) {
//     return -Infinity;
//   }

//   if (cache[rod] !== -1) {
//     return cache[rod];
//   }

//   let maxCount = 0;

//   const resX = cutRods(rod - x, x, y, z, cache) + 1;
//   const resY = cutRods(rod - y, x, y, z, cache) + 1;
//   const resZ = cutRods(rod - z, x, y, z, cache) + 1;

//   maxCount = Math.max(resX, Math.max(resY, resZ));

//   console.log({ rod, maxCount });
//   cache[rod] = maxCount;

//   return maxCount;
// }
function cutRodsArr(rod, segments, cache) {
  if (rod === 0) {
    return 0;
  }
  if (rod < 0) {
    return -Infinity;
  }

  if (cache[rod] !== -1) {
    return cache[rod];
  }

  let maxCount = -Infinity;

  for (let i = 0; i < segments.length; i++) {
    const result = cutRodsArr(rod - segments[i], segments, cache) + 1;
    maxCount = Math.max(maxCount, result);
    cache[rod] = maxCount;
  }

  return maxCount;
}

function cutRodsTab(rod, segments) {
  const dpArr = new Array(rod + 1).fill(-1);
  dpArr[0] = 0;
  for (let i = 1; i < dpArr.length; i++) {
    let maxLen = 0;
    for (let len = 0; len < segments.length; len++) {
      const nextRodLength = i - segments[len];
      if (nextRodLength < 0) {
        continue;
      }
      if (dpArr[nextRodLength] !== -1) {
        maxLen = Math.max(maxLen, dpArr[nextRodLength] + 1);
      }
    }
    if (maxLen !== 0) {
      dpArr[i] = maxLen;
    }
  }
  console.log(dpArr);
  return dpArr[rod];
}

console.log(maximizeTheCuts(5, 5, 3, 2));
