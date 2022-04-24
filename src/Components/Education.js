import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Education = (props) => {
	const number = 2;
	return(
		props.inputFields.map( (inputField, index) => (
		 <div key={index}>
			 <TextField
		        name='degree'
		        label='Degree'
		        value={inputField.degree}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>
		      <TextField
		        name='title'
		        label='Title'
		        value={inputField.title}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>
		      <TextField
		        name='description'
		        label='Description'
		        value={inputField.description}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>

	  
			 <IconButton onClick={() => props.handleAddFields(number)}> <AddIcon /> </IconButton>
	         <IconButton onClick={() => props.handleRemoveFields(index)}> <RemoveIcon /> </IconButton>

	     </div>
	   ))
	)
}

export default Education