
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux'
// import {  itemsActions } from "../store/itemSlice";
// function FetchItem() {
//     const dispatch = useDispatch();
//     useEffect( ()=>{
//         fetch("https://prod-be.1acre.in/lands/?format=json&ordering=-updated_at&page=1&page_size=10")
//     .then((res) => res.json())
//     .then(({results}) => {
//         dispatch(itemsActions.addInitialItems(results[1]));
//       });
//     },
//     [fetchStatus])
//   return (
//     <div>FetchItem</div>
//   )
// }

// export default FetchItem