import React from 'react';

export const UHdemoObjectState = () => {
    const [avengerInfo, setAvengerInfo] = React.useState({
        name: 'Thor', lastname: 'Odinson'
    })
    return (
        <>
            <h4> {avengerInfo.name} | {avengerInfo.lastname}</h4>

            <input type="text"
                value={avengerInfo.name}
                onChange={(e) => setAvengerInfo({ ...avengerInfo, name: e.target.value })}
            />

            <input type="text"
                value={avengerInfo.lastname}
                onChange={(e) => setAvengerInfo({ ...avengerInfo, lastname: e.target.value })}
            />
        </>
    )
}