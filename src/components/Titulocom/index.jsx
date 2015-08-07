import React from 'react'

class Titulorow extends React.Component{
	render(){
		return(
				<li className="media">
        
	        		<div className="media-body">
	          		<h4>{this.props.name}</h4>
	          		<p>
	            	{this.props.tittle} &nbsp;
	            	
	          		</p>
	        		</div>
	        		<hr/>
      			</li>
			)
	}

}

export default Titulorow