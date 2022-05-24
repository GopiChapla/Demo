import React from "react";

class Test extends React.Component
{
    componentWillUnmount()
    {
        console.log('componentWillUnmount');
    }
    
    render(){
        return ( 
        <h1>Learning {this.props.name} </h1>
        )
    }
}

export default Test;