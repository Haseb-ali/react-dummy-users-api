import React, { Component} from "react";
export default class XComponent extends Component {
    constructor(props){
        super(props)
        // console.log(props);
        this.state={
            bit:true,
        }
    }
    componentDidMount(){
        console.warn("XComponent render");
    }
    componentDidUpdate(){
        console.warn("XComponent updated");
        console.warn(this.state.bit);
    }
    render(){
        return(
            <>
            this is age{this.props.text}
            <br></br>
            <br></br>
            <p>
                {
                    this.state.bit ?'true':'false'
                }
            </p>
            <button onClick={()=>{
                this.setState({bit:!this.state.bit})
            }}>updateState</button>
            </>
        );
    }
}