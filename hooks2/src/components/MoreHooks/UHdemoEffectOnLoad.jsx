import React from 'react';

export const UHdemoEffectOnLoad = () => {
    const [myName, setMyName] = React.useState("David Bowie");

    React.useEffect(() => {
        setTimeout(() => {
            setMyName('Ziggy Stardust');
        }, 3000)
    }, [myName])

    return (
        <>
            <h4>{myName}</h4>

            <input type="text"
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
            />
        </>
    )
}