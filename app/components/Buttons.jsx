import React from 'react'

export const PrimaryButton = (props) => {
	return (
		<button className='btn-primary my-4' onClick={props.onClick}>
			{props.title}
		</button>
	)
}
