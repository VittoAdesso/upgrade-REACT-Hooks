import React from 'react';
import UserContext from './Context';
import Button from './Button';



const userMock = {
  name: 'Vitto',
  email: 'vitto111@xxxx.com',
 };


const ShowUser = () => {

  return (

    <UserContext.Provider value={userMock}>
    <Button />
    </UserContext.Provider>
 );
      
          
};

export default ShowUser;
