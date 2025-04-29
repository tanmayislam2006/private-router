import React from 'react';
import { PrivateContext } from './PrivateContext';

const PrivateContextProvider = ({children}) => {
    const information={
        name:"function a",
        name2:"function b",
        name3:"function c"
    }
    return (
            <PrivateContext value={information}>
                    {children}
            </PrivateContext>
    );
};

export default PrivateContextProvider;