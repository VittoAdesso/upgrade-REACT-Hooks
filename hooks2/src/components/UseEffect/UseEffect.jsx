import React, {useState, useEffect} from 'react';

export const UseEffect = () => {

    // sólo lo veo en console log
const [name, setName] = useState(''); 
const [ age, setEdad] = useState(''); 

// declaro que hará cadd useEfect por variable 

useEffect(() => {
    console.log('hook -> NAME:', name);
}, [name]);

useEffect(() => {
    console.log('hook -> AGE: ', age);
  }, [age])

  return <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
        <input value={age} onChange={(event) => setEdad(event.target.value)} />
  </div>;
};
