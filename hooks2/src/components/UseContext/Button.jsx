import React, { useContext } from 'react';
import UserContext from './userContext';
 
function Button() {
 const { name } = useContext(UserContext);
 return (
   <button type="button">
     {name}
   </button>
 );
}

export default Button;
