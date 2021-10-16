import React, { useState } from "react";

export const DigitContext = React.createContext({});


export const DigitProvider = (props: any) => {
    const [ initialValue, setInitialValue ] = useState<number | string>('Type here...');

    return(
        <DigitContext.Provider value={{initialValue, setInitialValue}}>
            {props.children}
        </DigitContext.Provider>
    );
}