import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useProducts from '../Hooks/Hooks';

const MyItem = () => {

    
    const [user] = useAuthState(auth);
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch(`https://murmuring-beyond-23434.herokuapp.com/fruits?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setFruits(data));
    },[user]);

  return (
    <div>
      <div className="">
        <div className="container">
          <table className="table t-head mt-5">
            <thead >
              <tr className="t-head" >  
                <th className="t-head">Image</th>
                <th className="">Name</th>
                <th className="t-head">Price</th>
                <th className="t-head">Quantity</th>
                <th className="t-head">Email</th>
                
              </tr>
            </thead>
            <tbody>
              
              {fruits.map((fruit) => {
                  console.log(fruit.name);
                  return(
                <tr>
                
                <img className="table-img" src={fruit.image} alt="" />
                <td className="t-head"> {fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.quantity}</td>
                <td>{user?.email}</td>
                
              </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyItem;