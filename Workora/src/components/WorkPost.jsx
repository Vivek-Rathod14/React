import React from 'react'
import './WorkPost.css'
import { useState } from 'react';
import { useDispatch } from "react-redux"
import {addWorkAsync } from '../redux/actions/workora.action';
import { useNavigate } from 'react-router-dom';

const WorkPost = () => {
    const dispatch = useDispatch()
    const navigate =useNavigate();
    const [workForm, setWorkDetail] = useState({
        title: "",
        skills: "",
        duration: "",
        email: "",
        description: ""
    })

    const handelSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target);
        console.log(workForm);
        const newForm = {
            ...workForm,
            id: Date.now.toString()
        }
        await dispatch(addWorkAsync(newForm))
        navigate("/work")


    }
    const handelChange = (e) => {
        const { name, value } = e.target
        console.log(e.target.value);
        setWorkDetail({
            ...workForm,
            [name]: value
        })

    }

    return (
        <div>
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="">Title</label>
                <input type="text" placeholder='Title' name='title' onChange={handelChange} required /><br />

                <label htmlFor="">Skills</label>
                <input type="text" placeholder='Skills' name='skills' onChange={handelChange} required /><br />

                <label htmlFor="">Budget</label>
                <input type="number" placeholder='Budget' name='budget' onChange={handelChange} required /><br />

                <label htmlFor="">duration</label>
                <select name="duration" id="" onChange={handelChange} required>
                    <option value="1 days" onChange={handelChange}>1 days</option>
                    <option value="5 days" onChange={handelChange}>5 days</option>
                    <option value="10 days" onChange={handelChange}>10 days</option>
                    <option value="25 days" onChange={handelChange}>25 days</option>
                </select>

                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email' name='email' onChange={handelChange} required /><br />

                <label htmlFor="">Description</label>
                <input type="text" placeholder='Description' name='description' onChange={handelChange} required /><br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default WorkPost