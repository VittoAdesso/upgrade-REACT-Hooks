import React from 'react';

const UseEffectInput = () => {

    const [ datoStart, setInfo] = React.useState({
        firstInput: 'WHRITE', secondInput: 'ME'
    })

  return <div>

    {/* Aquí llamo la info predefinida */}
    <h2> { datoStart.firstInput } | { datoStart.secondInput}</h2>

    <input type="text"
                value={datoStart.firstInput}
                onChange={(e) => setInfo({ ...datoStart, firstInput: e.target.value })}
            />
    <input type="text"
                value={datoStart.secondInput}
                onChange={(e) => setInfo({ ...datoStart, secondInput: e.target.value })}
            />

  </div>;
};

export default UseEffectInput;
