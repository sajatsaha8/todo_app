import React from "react"

function TodoItem(props){
	const comStyle={
		color:"#969590",
		fontStyle:"italic",
		textDecoration:"line-through"
	}

	return(

		<div className='todoItem'>
			<input type="checkbox" checked={props.item.completed}
			onChange={()=>props.handleChange(props.item.id)}/>
        	<p className='label' style={props.item.completed ? comStyle : null }>{props.item.text}</p>
		</div>
		
	)
}


export default TodoItem