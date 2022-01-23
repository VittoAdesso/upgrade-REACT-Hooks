import React from 'react'

export const MyStateOne = () => {
    const [nameUpgrader, setNameUpgrader] = React.useState('Néstor');

    return (
        <>
            <h4>{nameUpgrader}</h4>
            <input type="text"
                value={nameUpgrader}
                onChange={(e) => setNameUpgrader(e.target.value)}
            />
        </>
    )
}
