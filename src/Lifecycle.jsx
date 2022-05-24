import React from "react";
import Test from "./Test";

class Lifecycle extends React.Component
{
    constructor() 
    {
        super();
        console.log("Constructor");
        this.state={name:'Ram',view:false}
    }

    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps");
        return {};
    }

    render() 
    {
        console.log("render",this.state.name)
        return (
            <div>
                <p>{this.state.name}</p>
                {this.state.view && (<Test/>)}
            </div>
        )
    }

    componentDidMount()
    {
        this.setState({name:"Sita"})
        console.log("componentDidMount");
    }

    shouldComponentUpdate()
    {
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('getSnapshotBeforeUpdate',prevState.name)
        return {};
    }

    componentDidUpdate()
    {
        console.log('componentDidUpdate')
        return;
    }


}

export default Lifecycle;