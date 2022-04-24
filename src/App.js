import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Personal from './Components/Personal';
import WorkExperience from './Components/WorkExperience';
import Education from './Components/Education';

const useStyles = makeStyles( (theme) => ({
  root: {
    '& .MuiTextField-root': { 
      margin: theme.spacing(1) },
    },
  button: {
    margin: theme.spacing(1) },
}))

function App() {
  const classes = useStyles();
  const[inputFields, setInputFields] = useState([
    {firstName: '',
     lastName: '',
     phoneNumber: '',
     email: '',
    },

    [{
    from: '',
    to: '',
    title: '',
    company: '',
    description: ''
    },{
    from: '',
    to: '',
    title: '',
    company: '',
    description: ''
    }],

    [{
    degree: '',
    title: '',
    description: ''},{
    degree: '',
    title: '',
    description: ''}]

    ])

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values)
  };

  const handleChangeInputArrays = (number, index, event) => {
    const values = [...inputFields];
    values[number][index][event.target.name] = event.target.value;
    setInputFields(values)
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

  }

  const handleAddWorkFields = (number) => {
    const values = [...inputFields];
    values[number].push({
    from: '',
    to: '',
    title: '',
    company: '',
    description: ''});
    setInputFields(values);
  }

  const handleAddEducationFields = (number, index) => {
    const values = [...inputFields];
    values[number].push({
    degree: '',
    title: '',
    description: ''});
    setInputFields(values);
  }

  const handleRemoveFields = (number, index) => {
    const values = [...inputFields];
    values[number].splice(index, 1);
    setInputFields(values)
  }

  return (
    <div className="App">
      <Container>
        <h1>CV Creator</h1>


        <form className={classes.root} onSubmit={handleSubmit}>

        <Personal inputFields={inputFields[0]} handleChangeInput={handleChangeInput}/>

        <WorkExperience inputFields={inputFields[1]} handleChangeInput={handleChangeInputArrays} handleRemoveFields={handleRemoveFields} handleAddFields={handleAddWorkFields}/>
        <Education inputFields={inputFields[2]} handleChangeInput={handleChangeInputArrays} handleRemoveFields={handleRemoveFields} handleAddFields={handleAddEducationFields}/>

        <Button className={classes.button} variant="contained" color="primary" type="submit" onClick={handleSubmit}>Save</Button>
          
       </form>
      </Container>
    </div>
  );
}

export default App;
