function calculateGPAStepOne(grade, credit){
  
  switch(grade) {
    case "A":
      return 4*credit;
    
    case "A-":
      return 3.7*credit;
    
    case "B+":
      return 3.3*credit;
    
    case "B":
      return 3.0*credit;
    
    case "B-":
      return 2.7*credit;
    
    case "C+":
      return 2.3*credit;
    
    case "C":
      return 2.0*credit;
    
    case "C-":
      return 1.7*credit;
    
    case "D+":
      return 1.3*credit;
    
    case "D":
      return 1*credit;
    
    case "D-":
      return 0.7*credit;
    
    case "F":
      return 0*credit;
    
    default:
      console.log("sorry! please try inputting your info again");
  }
}

export default calculateGPAStepOne;