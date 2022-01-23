import React from 'react';


export const MessageComponent = () => {
    React.useEffect(() => {
        // OnInit
        localStorage.setItem('token', 'hdjsvjkdhvjdkls879')
        // OnDestroy
        return () => localStorage.removeItem('token')
    }, [])
    return <h4>Hola Gonzalo</h4>
}

// Componente Padre -> 
// va a llamar a MessageComponent cuando el state del padre cambie ->
// visible -> true crear MessageComponent
// visible -> false matar MessageComponent
export const UHdemoEffectUnmount = () => {
    React.useEffect(() => {
        console.log('Me monto en el DOM')
        return () => console.log('Me desmonto del DOM')
    }, [])

    const [visible, setVisible] = React.useState(false);
    return (
        <>
            {visible && <MessageComponent />}
            <button onClick={() => setVisible(!visible)}> Login</button>
        </>
    )
}