import React, { useState } from "react";

export const DigitContext = React.createContext({});


export const DigitProvider = (props: any) => {
    const [ initialValue, setInitialValue ] = useState(0);

    return(
        <DigitContext.Provider value={{initialValue, setInitialValue}}>
            {props.children}
        </DigitContext.Provider>
    );
}