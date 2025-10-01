import React, { useContext, useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import Theme from 'quill/core/theme';
import { JobCategories, JobLocations } from '../assets/assets';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

function AddJob() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null)    // this points the actual HTML container (div)
  const quillRef = useRef(null)     // this points the Quill Editor 
  //by using the editorRef we initialize the quillRef
  const {backend_url,companyToken} = useContext(AppContext)
  
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const description =  quillRef.current.root.innerHTML
      const {data} = await axios.post(backend_url+ "/api/company/post-job" ,
        {title , description,category,location,level,salary},
        {headers:{token:companyToken}}
      )
      if (data.success) {
        toast.success(data.message)
        setTitle("")
        setSalary(0)
        quillRef.current.root.innerHTML = ""
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) { // this line means IF we don't already have a QuillEditor created and the container div is ready 
      quillRef.current = new Quill(editorRef.current,
        { theme: 'snow', }
      )
    }
  }, [])

  return (
    <form onSubmit={onSubmitHandler} className='container p-4 flex flex-col w-full items-start gap-3'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input type="text" placeholder='Type here' onChange={e => setTitle(e.target.value)} value={title} required
          className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded' />
      </div>
      <div className='w-full max-w-lg '>
        <p className='my-2'>Job Description</p>
        <div ref={editorRef}>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Job Category</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
            {JobCategories.map((category, index) => (
              <option value={category} key={index}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <p className='mb-2'>Job Location</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
            {JobLocations.map((location, index) => (
              <option value={location} key={index}>{location}</option>
            ))}
          </select>
        </div>
        <div>
          <p className='mb-2'>Job Level</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>
      <div>
        <p className='mb-2'>Job Salary</p>
        <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e => setSalary(e.target.value)} type="Number" placeholder='2500' />
      </div>
      <button className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default AddJob
