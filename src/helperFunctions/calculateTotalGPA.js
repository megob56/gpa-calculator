
function calculateTotalGPA(grades, credits){
  
  let sumOfGradesArray = grades.reduce((a, b) => a + b);
  
  let sumOfCredits = credits.reduce((a, b) => a + b);

  let totalGPA = (sumOfGradesArray/sumOfCredits).toFixed(1);

  return totalGPA;
}

export default calculateTotalGPA;