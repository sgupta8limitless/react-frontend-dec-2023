import React from "react";

class Demo extends React.Component
{   
    constructor(props)
    {
        super(props);


        this.state={
            country:"India",
            capital:"New Delhi"
        }

       


    }


    render(){
        return (
            <div className="demo">
                <h1>I am a class component</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.state.country}</h1>

                <button onClick={()=>{
                    this.setState({country:"Australia"})
                }}>change country</button>


            </div>
        )
    }
}



export default Demo;