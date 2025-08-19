import React,{ useContext,createContext }  from 'react'

// here we created the context  
export const AppContext = createContext()

//now we create provoder function or give value to the provider , and we write the provider in the return statement 
export const AppContextProvider = (props)=>{
    const value = {
        
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    ) 
}