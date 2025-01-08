// 1376. Time Needed to Inform All Employees

const n = 6;
const headID = 2;
const manager = [2, 2, -1, 2, 2, 2];
const informTime = [0, 0, 1, 0, 0, 0];

function numOfMinutes(n, headID, manager, informTime) {
  const hList = Array(n).fill([]);

  manager.forEach((mgrId, empId) => {
    if (mgrId !== -1) {
      hList[mgrId] = [...hList[mgrId], empId];
    }
  });

  const totalTime = getTimeToInform(headID, hList, informTime);

  console.log(totalTime);
  return totalTime;
}

function getTimeToInform(currentId, hList, informTime) {
  if (hList[currentId].length === 0) {
    return 0;
  }

  let max = 0;
  hList[currentId].forEach((empId) => {
    max = Math.max(max, getTimeToInform(empId, hList, informTime));
  });

  return max + informTime[currentId];
}

numOfMinutes(n, headID, manager, informTime);
