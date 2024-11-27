'use client'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Get_Method_Data = () => {
  const [ message, setMessage] = useState('');
  useEffect(() => {
    const fetchMessage = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/home/");
            const data = await response.json();
            setMessage(data.message);
        } catch(error) {
            console.error("Error fetching message: ", error);
        }
    }
    fetchMessage();
  }, []);
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default Get_Method_Data