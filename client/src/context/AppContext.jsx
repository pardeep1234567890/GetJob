import React,{ useContext,createContext, useState, useEffect }  from 'react'
import { jobsData } from '../assets/assets';

// here we created the context  
export const AppContext = createContext()

//now we create provoder function or give value to the provider , and we write the provider in the return statement 
export const AppContextProvider = (props)=>{
     const[searchFilter , setSearchFilter] = useState({
        title:'',
        location:''
     })
     const[isSearched,setIsSearched] = useState(false);
     const[jobs , setJobs] = useState([]);

     // making a function to fetch the Jobs 
     const fetchJobs = async()=>{
        setJobs(jobsData)
     }
     useEffect(()=>{
        fetchJobs()
     },[])

    const value = {
        searchFilter,setSearchFilter,isSearched,setIsSearched,jobs ,setJobs
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    ) 
}