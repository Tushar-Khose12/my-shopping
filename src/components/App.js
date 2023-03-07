import React, { Component } from "react";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import JSON from "./db.json"




class App extends Component {
    constructor(){
        super()
        this.state={
            prodData:JSON,
            filterData:JSON
        }

    }
    filterData = (keyword) =>{
        let output = this.state.prodData.filter((data)=>{
            return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filterData:output})
    }
    render(){
        return(
            <>
                <Header userInput={(data)=>{this.filterData(data)}}/>
                <Product productData={this.state.filterData}/>
                <Footer year="2023" month="March"/>
            </>
        )
    }
   
}

export default App;