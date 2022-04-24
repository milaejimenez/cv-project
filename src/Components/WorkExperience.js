import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';



const WorkExperience = (props) => {
	const number = 1;
	return(
		props.inputFields.map( (inputField, index) => (
		 <div key={index}>
			 <TextField
		        name='from'
		        label='From'
		        value={inputField.from}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>
		      <TextField
		        name='to'
		        label='To'
		        value={inputField.to}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>
		      <TextField
		        name='title'
		        label='Title'
		        value={inputField.title}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>
		       <TextField
		        name='company'
		        label='Company'
		        value={inputField.company}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>
		        <TextField
		        name='description'
		        label='Description'
		        value={inputField.description}
		        onChange={event => {props.handleChangeInput(number, index, event)}}/>


	  
			 <IconButton onClick={() => props.handleAddFields(number)}> <AddIcon /> </IconButton>
	         <IconButton onClick={() => props.handleRemoveFields(number, index)}> <RemoveIcon /> </IconButton>

	     </div>
	   ))
	)
}


export default WorkExperience;