import React from "react";
export default class Header extends React.Component{
    constructor(props){
        super(props);
        console.warn("component creattion started");
        this.state = {
            count:0
        }
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount() {
        console.warn("component  created!")
    }
    componentDidUpdate(){
        console.warn("component updated");
    }
    componentWillUnmount(){
        alert("Header has successfully hidden");
    }
    handleClick(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <>
               <p>{this.state.count}</p>
               <button onClick={this.handleClick}>Increment</button>
            </>
        );
    }
}
