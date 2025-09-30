import React, { useContext, createContext, useState, useEffect } from 'react'
import { jobsData } from '../assets/assets';
import { toast } from 'react-toastify';
import axios from "axios"

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

    // here we create these state set companytoken and get companydata
    const [companyToken, setCompanyToken] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    // making a function to fetch the Jobs 
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    // Here we define a function to get/fetch the Jobs
    const fetchCompanyData = async ()=>{
        try {
            const {data} = await axios.get(backend_url+"/api/company/company",{headers:{token:companyToken}})
            
            if (data.success) {
                setCompanyData(data.company)
                console.log(data)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchJobs()
        const storeCompanyToken = localStorage.getItem("companyToken")
        if(storeCompanyToken){
            setCompanyToken(storeCompanyToken)
        }
    }, [])

    useEffect(()=>{
        if (companyToken) {
            fetchCompanyData()
        }
    },[companyToken])

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