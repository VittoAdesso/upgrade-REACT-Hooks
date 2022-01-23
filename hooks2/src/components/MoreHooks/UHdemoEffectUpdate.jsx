import React from 'react';

export const MessageComponent = () => {
    const [myInfo, setMyInfo] = React.useState({
        name: 'Nestor', lastname: 'Pineda'
    })

    React.useEffect(() => {
        console.log('Llamado después de cada Render')
        return () => console.log('Desmonto el componente')
    })

    return (
        <div>
            <h4>{myInfo.name} | {myInfo.lastname}</h4>

            <input type="text"
                value={myInfo.name}
                onChange={(e) => setMyInfo({ ...myInfo, name: e.target.value })}
            />

            <input type="text"
                value={myInfo.lastname}
                onChange={(e) => setMyInfo({ ...myInfo, lastname: e.target.value })}
            />
        </div>
    )
}

export const UHdemoEffectUpdate = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <>
            {visible && <MessageComponent />}
            <button onClick={() => setVisible(!visible)}> Login</button>
        </>
    )
}