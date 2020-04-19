// import React, { createContext, useState, useEffect } from 'react'

// export const RentalContext = createContext()

// export default function RentalContextProvider(props) {
//   const [rentals, setRentals] = useState([]);
//   const [thisRental, setThisRental] = useState({
//     max_guests: nrOfGuest,
//     amenity_profile_id: amenityObj,
//     address_id: addressObj,
//     user_id: user.id,
//     description: description,
//     beds: nrOfBeds,
//     title: title,
//     price_per_night: price * 1.15,
//   });

//   const appendRental = (rental) => {
    
//     setRentals([...rentals, rental])
//   }

//   const removeRental = (id) => {
//     setRentals(rentals.filter((r) => r.id !== id));

//     fetch("/rest/residences/" + id, {
//       method: "DELETE",
//     });
//   };
//   const fetchRentals = async () => {
//     let res = await fetch("/rest/residences");
//     res = await res.json();
//     setRentals(res);
//   };

//   useEffect(() => {
//     fetchRentals();
//   }, []);

//   const values = {
//     rentals,
//     setRentals,
//     appendRental,
//     removeRental,
//     thisRental,
//     setThisRental
//   };

//   return (
//     <RentalContext.Provider value={values}>
//       {props.children}
//     </RentalContext.Provider>
//   );

// }
