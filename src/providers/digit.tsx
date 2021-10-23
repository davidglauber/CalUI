import React, { useState } from "react";

export const DigitContext = React.createContext({});


export const DigitProvider = (props: any) => {
    const [ initialValue, setInitialValue ] = useState<string>('Type here...');
    const [ secondValue, setSecondValue ] = useState<string>('');
    const [ result, setResult ] = useState<number | undefined>(undefined);
    const [ operatorContext, setOperatorContext ] = useState<string>('');

    return(
        <DigitContext.Provider value={{initialValue, secondValue, result, operatorContext, setInitialValue, setSecondValue, setResult, setOperatorContext}}>
            {props.children}
        </DigitContext.Provider>
    );
}