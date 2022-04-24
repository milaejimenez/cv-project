import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';



const Form = (props) => {
	return(
		props.inputFields.map( (inputObject, index) => (
		 <div key={index}>
			 <TextField
		        name={Object.keys(inputObject)[0]}
		        label={Object.keys(inputObject)[0]}
		        value={Object.values(inputObject)[0]}
		        onChange={event => {props.handleChangeInput(index[0], event)}}/>

		     <TextField
		        name={Object.keys(inputObject)[1]}
		        label={Object.keys(inputObject)[1]}
		        value={Object.values(inputObject)[1]}
		        onChange={event => {props.handleChangeInput(index[1], event)}}/>
	  
	  		<TextField
		        name={Object.keys(inputObject)[2]}
		        label={Object.keys(inputObject)[2]}
		        value={Object.keys(inputObject)[2]}
		        onChange={event => {props.handleChangeInput(index[2], event)}}/>
	  
	  		<TextField
		        name={Object.keys(inputObject)[3]}
		        label={Object.keys(inputObject)[3]}
		        value={Object.values(inputObject)[3]}
		        onChange={event => {props.handleChangeInput(index[3], event)}}/>
		    <TextField
		        name={Object.keys(inputObject)[4]}
		        label={Object.keys(inputObject)[4]}
		        value={Object.values(inputObject)[4]}
		        onChange={event => {props.handleChangeInput(index[4], event)}}/>
	  
	  
			 <IconButton onClick={() => props.handleAddFields()}> <AddIcon /> </IconButton>
	         <IconButton onClick={() => props.handleRemoveFields(index)}> <RemoveIcon /> </IconButton>
	     </div>
	   ))
	)
}


export default Form;