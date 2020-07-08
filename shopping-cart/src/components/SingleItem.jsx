import React from 'react';
import {Link} from "react-router-dom";

export default function SingleItem(props) {
    const {data,addToCart,filterData}=props
    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">price</th>
                    <th scope="col">category</th>
                    <th scope="col">Image</th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.filter(item=>{
                        if(filterData!="test"){
                            if(filterData=="all" || filterData=="")
                                return true
                            if(item.category==filterData)
                                return true;
                        }
                        return true
                        
                    }).map((item,index)=>{
                        return (
                        <tr key={index}>
                            <th scope="row"><Link to={`/product/${item.id}`}>{item.id}</Link></th>
                            <td><Link to={`/product/${item.id}`}>{item.name}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td><Link to={`/product/${item.id}`}><img src={item.img} alt={item.name} width="100" height="100"className="img-fluid" /></Link></td>
                            {
                                addToCart?
                                <td><button onClick={()=>addToCart(item.id)} className="btn btn-outline-danger">Add to Cart</button></td>
                                :<td />
                            }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
