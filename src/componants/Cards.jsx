import React, { useEffect } from 'react'
import {Card, Badge,Button} from "react-bootstrap"
import axios from "axios"
import MyCard from './MyCard'
import { useState } from 'react'
function Cards() {
 const [lands, setLands] = useState([])
   
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);

 useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get('https://prod-be.1acre.in/lands/?format=json');
      setLands(response.data.results); // assuming the response is an array of objects containing image URLs, state names, and mandal names
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
 },[])
 console.log(lands)
  return (
   <div className="d-flex flex-wrap m-4 gap-4">
   {
    lands.map((land)=>(
       <MyCard key={land.id} land={land}/>
    ))
   }
  
  
    
   
   </div>
  )
}

export default Cards



// axios.get('https://prod-be.1acre.in/lands/?format=json')
//       .then(response => {
//         setLands(response.data.results);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }