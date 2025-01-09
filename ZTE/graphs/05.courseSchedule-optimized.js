// 207. Course Schedule

function canFinish(numCourses, prerequisites) {
  const ingressNodes = Array(numCourses).fill(0);
  const outgressNodes = ingressNodes.map(() => []);

  prerequisites.forEach((cPair) => {
    ingressNodes[cPair[0]] += 1;
    outgressNodes[cPair[1]].push(cPair[0]);
  });

  let totalCount = 0;

  const stack = [];

  for (let course = 0; course < numCourses; course++) {
    if (ingressNodes[course] === 0) {
      stack.push(course);
    }
  }

  while (stack.length) {
    const poppedCourse = stack.pop();
    totalCount += 1;

    const depenteeCourse = outgressNodes[poppedCourse];
    while (depenteeCourse.length) {
      const nextdCourse = depenteeCourse.pop();
      ingressNodes[nextdCourse] -= 1;
      if (ingressNodes[nextdCourse] === 0) {
        stack.push(nextdCourse);
      }
    }
  }

  return totalCount === numCourses;
}
