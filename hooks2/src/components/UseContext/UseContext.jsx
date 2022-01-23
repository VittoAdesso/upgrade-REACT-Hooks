import React from 'react';
import UserContext from './Context';
import Button from './Button';



const userMock = {
  name: 'Alberto',
  email: 'alberto.rivera@upgrade.com',
 };


const ShowUser = () => {

  return (

    <UserContext.Provider value={userMock}>
    <Button />
    </UserContext.Provider>
 );
      
          
};

export default ShowUser;
