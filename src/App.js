import React from 'react';
import { useState } from 'react';

import { 
  Box,  
  Grommet, 
  TextInput, 
  Button,
  Text,
  Heading 
} from 'grommet';

import calculateGPAStepOne from '../src/helperFunctions/calculateGPAStepOne';
import calculateTotalGPA from '../src/helperFunctions/calculateTotalGPA';


function App() {
  const initialArray = new Array(5).fill(5);
 
  const [rows, setRows] = useState(initialArray);
  const [userInput, setUserInput] = useState([{"row": "0", "course": "", "credits": "", "grade": ""}]);
 

  const addRow = () => {
    let updatedRows = [...rows];
    let newRows = [...updatedRows, 4];
    setRows(newRows);
  }

  const removeRow = (rowIndex) => {
    let updatedRows = [...rows];
    updatedRows.splice(rowIndex, 1);
    setRows(updatedRows);
  }

  

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    const index = name.split('-')[1];
    const type = name.split('-')[0];

    let copyUserInput = [...userInput];

    let match = false;

    copyUserInput.forEach((input) => {
      if(input.row === index){
        match = true;
      }
    });

    if(match) {
      copyUserInput.forEach((input) => {
        if(input.row === index){
          input[type] = value;
        }
      });
    }

    if(!match){
      let newRowData = {"row": index, "course": "", "credits": "", "grade": "g"};
      newRowData[type] = value;
      copyUserInput.push(newRowData);
    }

    setUserInput(copyUserInput);

  }



  const gradeOptions = [ "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F" ];

  return (
    <Grommet plain>
      <Box pad="med" align="center">
        <Heading level="1">GPA Calculator</Heading>
          
        <Box  direction="row">   
          <Box width="xxsmall" height="xxsmall" background={{color: "#FFCA58"}} border>
            <Text></Text>
          </Box> 
          <Box width="medium" height="xxsmall" background={{color: "#FFCA58"}} border>
            <Text>Course</Text>
          </Box> 
          <Box width="small" height="xxsmall" background={{color: "#FFCA58"}} border>
            <Text>Credits</Text>
          </Box> 
          <Box width="small" height="xxsmall" background={{color: "#FFCA58"}} border>
            <Text>Grade</Text>
          </Box> 
          <Box width="xxsmall" height="xxsmall" >
            <Text></Text>
          </Box> 
        </Box>
        {rows.map((row, i) => (
          <Box direction="row">
            <Box width="xxsmall" background={{color: "#FFCA58"}} border justify="center" align="center">
              <Text>{i+1}</Text>
            </Box>
            <Box width="medium" border>
              <TextInput name={`course-${i}`} onChange={(e) => {handleChange(e)}}/>
            </Box>
            <Box width="small" border>
              <TextInput name={`credits-${i}`} onChange={(e) => {handleChange(e)}}/>
            </Box>
            <Box width="small" border>
              <select
                name={`grade-${i}`}
                onChange={(e) => { handleChange(e)}}
              >
                <option disabled selected hidden></option>
                {gradeOptions.map(grade => (
                  <option>{grade}</option>
                ))}
              </select>
            </Box>
            <Box width="xxsmall">
              <Button 
                primary 
                size="small" 
                label="X" 
                onClick={() => {
                  removeRow(i);
                }}
              />
            </Box>
          </Box>
        ))}
        
        <Box direction="row" pad="large">
          <Box>
            <Button primary size="small" label="ADD" onClick={addRow} />
          </Box>
        </Box>
      </Box>

      <hr />
      <Box pad="large" direction="row" justify="center" gap="medium">
        <Box>
          <Button primary size="large" label="Calculate" />
        </Box>
        <Box>
          <Text size='xxlarge'>GPA</Text>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
