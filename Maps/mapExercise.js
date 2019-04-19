//Given a list of students' names and grades, find the highest average score of all students.

//Example Input: [["Kevin", 90], ["Ben", 98], ["Todd", 84], ["Todd", 88], ["Kevin", 46], ["Sally", 65], ["Ben", 80]]
//Expected Output: ben --> 89 - because the average of ben's scores equals 89 which is higher than the other students combined scores.

const findHighestAverage = testScores => {
  //create a new Map instance
  let highestTestAvg = new Map();
  //create a new object to hold the counts for each person
  let count = {};
  let highestAvg = 0;
  //iterate through the array full of testScores.
  testScores.map((studentScore, index) => {
    let testScore = studentScore[1];
    let student = studentScore[0];
    //if there is a key in this object, add one to the count. Otherwise, add it to the object and assign it to 1.
    if (count[student] != undefined) {
      count[student] += 1;
    } else {
      count[student] = 1;
    }
    //if map instance has a student already inside...
    //add the new score to the total testScore
    //re-set the value onto the student key
    if (highestTestAvg.has(student)) {
      testScore += highestTestAvg.get(student);
      highestTestAvg.set(student, testScore);
    } else {
      //create a new student key in the map
      highestTestAvg.set(student, testScore);
    }
    //at the end of the loop...
    if (index == testScores.length - 1) {
      //go through each key and divide it by the count
      highestTestAvg.forEach((value, key) => {
        value = value / count[key];
        highestTestAvg.set(key, value);
        if (value > highestAvg) {
          highestAvg = value;
        }
      });
      console.log(highestAvg);
      return highestAvg;
    }
  });
};

findHighestAverage([
  ["Kevin", 90],
  ["Ben", 98],
  ["Todd", 84],
  ["Todd", 88],
  ["Kevin", 46],
  ["Sally", 65],
  ["Ben", 80]
]);

// findHighestAverage([["Jerry", 65], ["Bob", 91], ["Jerry", 23], ["Eric", 83]]);
// findHighestAverage([["Tom", 65], ["Steve", 91], ["Adam", 23], ["Eric", 83]]);
