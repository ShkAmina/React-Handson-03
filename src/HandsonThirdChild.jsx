import { Component } from "react";
import './App.css'
class HandsonThirdChild extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(

            <div className="displaymain">
             <h1>EMPLOYEE FEEDBACK FORM</h1>
             <div className="display1">
            {this.props.value.map((item,index)=>{
                return (
                    <div key={index} className="display2">
                    <h3 key={index}>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</h3>
                    </div>
                );
            })}
          </div>
            <button onClick={this
            .props.tf}>Go Back</button>
            </div>
        )
    }
}
export default HandsonThirdChild