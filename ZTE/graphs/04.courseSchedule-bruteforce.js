function canFinish(numCourses, prerequisites) {
  const adjList = Array(numCourses)
    .fill(0)
    .map(() => []);

  prerequisites.forEach((cPair) => {
    adjList[cPair[1]].push(cPair[0]);
  });
  let result = true;
  for (let thisCourse = 0; thisCourse < numCourses; thisCourse++) {
    if (checkIfCycleExist(thisCourse, adjList)) {
      result = false;
      break;
    }
  }
  return result;
}

function checkIfCycleExist(thisCourse, adjList) {
  const queue = [];
  queue.push(...adjList[thisCourse]);
  const seenCourses = {
    thisCourse: true,
  };
  let result = false;
  while (queue.length) {
    const currCourse = queue.shift();
    if (currCourse === thisCourse) {
      result = true;
      break;
    }
    seenCourses[currCourse] = true;
    queue.push(...adjList[currCourse].filter((c) => !seenCourses[c]));
  }
  return result;
}

console.log(
  canFinish(4, [
    [2, 0],
    [1, 0],
    [3, 1],
    [3, 2],
    [1, 3],
  ])
);
