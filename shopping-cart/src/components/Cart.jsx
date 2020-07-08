import React, { Component } from 'react';
import SingleItem from "./SingleItem";
import {connect} from "react-redux";
import {addToOrder} from "../redux/action";

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            address:'',
            mob:''
        };
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {data,addToOrder}=this.props
        return (
            <div className="container">
                <div>
                    <label>Name :</label>
                    <input className="mr-2" type="text" onChange={this.handleChange} name="name" placeholder="Enter name" />
                    <label>Address :</label>
                    <input className="mr-2" type="text" onChange={this.handleChange} name="address" placeholder="Enter address" />
                    <label>Mob :</label>
                    <input className="mr-2" type="text" onChange={this.handleChange} name="mob" placeholder="Enter Mobile number" />
                    <button className="btn btn-outline-secondary" onClick={()=>addToOrder({
                        name:this.state.name,
                        address:this.state.address,
                        mob:this.state.mob,
                        data:data
                    })}>Place Order</button>
                </div>
                <SingleItem filterData="test" data={data}/>
            </div>
        )
    }
}

const mapStateToProps =state=>{
    return {
        data: state.cartArray,
    }
}

const mapDispatchToProps =dispatch=>{
    return {
        addToOrder:(payload)=>dispatch(addToOrder(payload)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)