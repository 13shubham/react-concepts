import React from 'react'

function ChildComponent(props) {
    return(
        <div> 
            <button onClick={()=> props.greetHandler({
                child: 'child',
                Message: 'Child is Successfull assigned'
            })}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent