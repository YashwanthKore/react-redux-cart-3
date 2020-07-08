import React, { Component } from 'react';
import {connect} from "react-redux";
import SingleItem from "./SingleItem";

class Orders extends Component {
    render() {
        const {orders}=this.props
        console.log(orders)
        return (
            <div>
                {
                    orders && orders.map((ele,index)=>{
                        return(
                            <div key={index}>
                                <div>
                                    <label>Name :{ele.name} </label>
                                    <label>Address : {ele.address} </label>
                                    <label>Mob : {ele.mob}</label>
                                </div>
                                <SingleItem filterData="test" data={ele.data}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps =state =>{
    return{
        orders:state.orderArray
    }
}

export default connect(mapStateToProps,null)(Orders)