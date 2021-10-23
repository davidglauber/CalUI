import React, { useState } from "react";

export const DigitContext = React.createContext({});


export const DigitProvider = (props: any) => {
    const [ initialValue, setInitialValue ] = useState<Array<number | string>>([0]);
    const [ operatorContext, setOperatorContext ] = useState<string>('');

    return(
        <DigitContext.Provider value={{initialValue, operatorContext, setInitialValue, setOperatorContext}}>
            {props.children}
        </DigitContext.Provider>
    );
}