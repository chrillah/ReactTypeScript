import React from "react";
type StatusProps = {
    status : 'loading' | 'success' | 'error'
}
function Status(props: StatusProps){
    let message

    if(props.status === 'loading'){
        message = 'Laddar'
    } else if(props.status === 'success'){
        message = 'Sidan har gjort en fetch'
    } else if(props.status === 'error'){
        message = 'Error vid fetch'
    }

    return(
        <>
        {/* <h2>Laddar...</h2>
        <h2>Sidan har gjort en fetch</h2>
        <h2>Error vid fetch</h2> */}
        <h2>Status - {message}</h2>
        </>
    )
}

export default Status
