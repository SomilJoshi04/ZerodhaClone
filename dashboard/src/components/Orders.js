import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
 const[allOrders , setAllOrders] = useState([]);
  useEffect(()=>{
     axios.post("http://localhost:3002/newOrder").then((res)=>{
            setAllOrders(res.data);
     });
  },[])
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
