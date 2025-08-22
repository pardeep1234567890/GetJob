import React,{ useContext,createContext, useState }  from 'react'

// here we created the context  
export const AppContext = createContext()

//now we create provoder function or give value to the provider , and we write the provider in the return statement 
export const AppContextProvider = (props)=>{
     const[searchFilter , setSearchFilter] = useState({
        title:'',
        location:''
     })
     const[isSearched,setIsSearched] = useState(false);
    const value = {
        searchFilter,setSearchFilter,isSearched,setIsSearched
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    ) 
}