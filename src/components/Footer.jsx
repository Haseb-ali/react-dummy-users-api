import React from 'react';
export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <>
            <p>
                {
                    this.props.textTranformation=='lowercase'?'this is Footer copyright @ 2021'
                    :'THIS IS FOOTER COPYRIGHT @ 2021'
                }    
            </p>
            </>
        );
    }
}
