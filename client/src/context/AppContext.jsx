import React, { useContext, createContext, useState, useEffect } from 'react'
import { jobsData } from '../assets/assets';

// here we created the context  
export const AppContext = createContext()

//now we create provoder function or give value to the provider , and we write the provider in the return statement 
export const AppContextProvider = (props) => {

    const backend_url = import.meta.env.VITE_BACKEND_URL
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    })
    const [isSearched, setIsSearched] = useState(false);
    const [jobs, setJobs] = useState([]);
    // we create a state to show the Pop up 
    const [showRecuriterLogin, setShowRecuriterLogin] = useState(false)

    // making a function to fetch the Jobs 
    const fetchJobs = async () => {
        setJobs(jobsData)
    }
    useEffect(() => {
        fetchJobs()
    }, [])

    const [companyToken, setCompanyToken] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    const value = {
        searchFilter, setSearchFilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecuriterLogin, setShowRecuriterLogin,
        companyData, setCompanyData,
        companyToken, setCompanyToken,
        backend_url
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}