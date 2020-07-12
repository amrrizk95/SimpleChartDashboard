import React from 'react'
import PropTypes from 'prop-types'

export default class Droppable extends React.Component{

    drop=(e)=>{
        e.preventDefault()
       
        let element=e.target
       if (element.getAttribute("name") === "dropped") {
            const data =e.dataTransfer.getData("transfer");
            let x=window.getComputedStyle(document.getElementById(e.target.id)).height
            document.getElementById(data).style.height=x
            e.target.appendChild(document.getElementById(data));
            localStorage.setItem(data,e.target.id)
      }
      
    }
    allowDrop=(e)=>{
        e.preventDefault()
   
    }

    render(){
        return (
            <div className={this.props.className} id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}>
                {this.props.children}
            </div>
        )
    }
}
Droppable.prototypes={
    id:PropTypes.string,
    children:PropTypes.node
}