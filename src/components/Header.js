import React, { Component } from "react";
import "./Header.css"


class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            title:"React App",
            keyword:"User Input"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({keyword:e.target.value?e.target.value:"User Input"})
        this.props.userInput(e.target.value)
    }
        render(){
            return(
                <>
                    <header>
                        <div className="logo">
                            {this.state.title}
                        </div>
                        <input onChange={this.handleChange}/>
                        <div>{this.state.keyword}</div>
                    </header>
                    <hr/>
                </>
            )
        }
}




export default Header;