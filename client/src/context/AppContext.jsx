import React, { useContext, createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from "axios"
import { useAuth, useUser } from '@clerk/clerk-react';

// here we created the context  
export const AppContext = createContext()

//now we create provoder function or give value to the provider , and we write the provider in the return statement 
export const AppContextProvider = (props) => {

    const backend_url = import.meta.env.VITE_BACKEND_URL
    const { user } = useUser()
    const { getToken } = useAuth()
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

    // Here we create the state to store the user data
    const [userData, setUserData] = useState(null)
    const [userApplications, setUserApplications] = useState([])

    //Function to fetch the user data 
    const fetchUserData = async () => {
        try {
            const token = await getToken();
            const {data} = await axios.get(backend_url + "/api/users/user",
                { headers: { Authorization:`Bearer ${token}` } }
            )
            if (data.success) {
                setUserData(data.user)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    // making a function to fetch the Jobs 
    const fetchJobs = async () => {
        try {
            const { data } = await axios.get(backend_url + "/api/jobs")
            if (data.success) {
                setJobs(data.jobs)
                console.log(data.jobs)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }


    // Here we define a function to get/fetch the Company Data
    const fetchCompanyData = async () => {
        try {
            const { data } = await axios.get(backend_url + "/api/company/company", { headers: { token: companyToken } })

            if (data.success) {
                setCompanyData(data.company)
                console.log(data)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Function to fetch the user's applied applications data 
    const fetchUserApplications = async () =>{
       try {
         const token = await getToken()
         const {data} = await axios.get(backend_url+"/api/users/applications",
            {headers:{Authorization:`Bearer ${token}`}}
         )
         if (data.success) {
            setUserApplications(data.applications)
         }else{
            toast.error(data.message)
         }
       } catch (error) {
            toast.error(error.message)
       }
        
    }

    useEffect(() => {
        if (user) {
            fetchUserData()
            fetchUserApplications()
        }
    }, [user])

    useEffect(() => {
        fetchJobs()
        const storeCompanyToken = localStorage.getItem("companyToken")
        if (storeCompanyToken) {
            setCompanyToken(storeCompanyToken)
        }
    }, [])

    useEffect(() => {
        if (companyToken) {
            fetchCompanyData()
        }
    }, [companyToken])

    const value = {
        searchFilter, setSearchFilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecuriterLogin, setShowRecuriterLogin,
        companyData, setCompanyData,
        companyToken, setCompanyToken,
        backend_url,
        userData, setUserData,
        userApplications, setUserApplications,
        fetchUserData,
        fetchUserApplications,
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}