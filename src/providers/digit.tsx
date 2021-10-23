import React, { useState } from "react";

export const DigitContext = React.createContext({});


export const DigitProvider = (props: any) => {
    const [ initialValue, setInitialValue ] = useState<string>('Type here...');
    const [ secondValue, setSecondValue ] = useState<string>('');
    const [ operatorContext, setOperatorContext ] = useState<string>('');

    return(
        <DigitContext.Provider value={{initialValue, secondValue, operatorContext, setInitialValue, setSecondValue, setOperatorContext}}>
            {props.children}
        </DigitContext.Provider>
    );
}