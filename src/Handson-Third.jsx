import { Component } from "react";
import HandsonThirdChild from "./HandsonThirdChild";
import './App.css'
class HandsonThird extends Component{
    state={
        name:"",
        department:"",
        rating:"",
        click:true,
        data:[]
    }

    handleChange=(event)=>
    {
        this.setState({[event.target.name]:event.target.value })
    }

    togglefunction=()=>
    {
        this.setState({click:!this.state.click})
    }
handleClick=()=>
{
    const obj={
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data,click:false, name:"",rating:"",department:""})
    console.log(this.state.data)
}
render()
{
    return(
        <>
            {this.state.click ?
            
            <div className="main">
        <h1>EMPLOYEE FEEDBACK FORM</h1>

       <div className="row">
        <label>
        Name : <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Your Name" value= {this.state.name} />
        </label>
        </div>


        <div className="row">
        <label >
        Department : <input type="text" name="department" onChange={this.handleChange} placeholder="Enter Your Department" value= {this.state.department} />
        </label>
        </div>


        <div className="row">
        <label>
       Rating : <input type="number" name="rating" onChange={this.handleChange} placeholder="Enter Rating " value= {this.state.rating} />
        </label>
        </div>


        <button onClick={this.handleClick}>Submit</button>
        </div>
            :
            <HandsonThirdChild value={this.state.data} tf={this.togglefunction}/>

            }
   
        </> 

    )

}
}

export default HandsonThird