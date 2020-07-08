import React, { Component } from 'react';
import {connect} from 'react-redux';
import SingleItem from "./SingleItem";
import {addToCart} from "../redux/action";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            option:''
        };
    }

    handleChange=(e)=>{
        this.setState({
            option:e.target.value
        })
    }
    
    render() {
        const {data,addToCart,cartData}=this.props
        return (
            <div className="container row">
                <div className='col'>
                    <div className="dropdown">
                        <select onChange={this.handleChange}>
                            <option value="all">All</option>
                            <option value="shirt">shirt</option>
                            <option value="trouser">trouser</option>
                        </select>
                    </div>
                <SingleItem addToCart={addToCart} filterData={this.state.option}  data={data}/>
               </div>
               <div className="col">
                   <label>CartData</label>
                    <SingleItem addToCart={addToCart} filterData="test"  data={cartData}/>
               </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        data:state.data,
        cartData:state.cartArray
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)