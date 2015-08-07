import React from 'react'
import Titulorow from  '../Titulocom'


class TituloList extends React.Component{
	render(){
		return(
			<ul>
				{
					this.props.titulo.map((titul)=>{
						return <Titulorow   key={titul.id}
											name={titul.fullName} 
											tittle={titul.department}


								/>

						})

					
				}

			</ul>

			)
	}
}

export default TituloList

