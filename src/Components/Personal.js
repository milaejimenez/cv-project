import React from 'react';
import TextField from '@material-ui/core/TextField';


const Personal = (props) => {
	const index=0;
	return(
	 <div key={index}>
		 <TextField
	        name='firstName'
	        label='First Name'
	        value={props.inputFields.firstName}
	        onChange={event => {props.handleChangeInput(index, event)}}/>
	     <TextField
	        name='lastName'
	        label='Last Name'
	        value={props.inputFields.lastName}
	        onChange={event => {props.handleChangeInput(index, event)}}/>
	     <TextField
	        name='phoneNumber'
	        label='Phone Number'
	        value={props.inputFields.phoneNumber}
	        onChange={event => {props.handleChangeInput(index, event)}}/>
	     <TextField
	        name='email'
	        label='Email'
	        value={props.inputFields.email}
	        onChange={event => {props.handleChangeInput(index, event)}}/>

	  </div>
	  )
}


export default Personal;