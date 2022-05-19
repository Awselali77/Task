import React from 'react'

const Progressbar = ({bgcolor,progress,height}) => {

	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: '#d9efdf',
		borderRadius: 40,
		marginTop: "20px"
	}

	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}


	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>
	)
}

export default Progressbar;
