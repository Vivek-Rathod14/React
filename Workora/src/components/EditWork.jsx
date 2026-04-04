import React, { useEffect, useState } from 'react';
import './WorkPost.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { EditPost } from '../redux/actions/workora.action';

const EditWork = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const workoras = useSelector(state => state.workoras);

    const existingWork = workoras.find(item => item.id === Number(id));

    const [workDetail, setWorkDetail] = useState({
        title: "",
        skills: "",
        budget: "",
        duration: "",
        email: "",
        description: "",
    });

    useEffect(() => {
        if (existingWork) {
            setWorkDetail(existingWork);
        }
    }, [existingWork]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkDetail({
            ...workDetail,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(EditPost(workDetail)); 
        navigate("/work");
    };

    return (
        <div className="form-container">
            <h2>Edit Job</h2>

            <form onSubmit={handleSubmit} className="job-form">

                <input
                    type="text"
                    name="title"
                    value={workDetail.title}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="skills"
                    value={workDetail.skills}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="budget"
                    value={workDetail.budget}
                    onChange={handleChange}
                    required
                />

                <select
                    name="duration"
                    value={workDetail.duration}
                    onChange={handleChange}
                >
                    <option value="">Project Duration</option>
                    <option value="1-3 Days">1-3 Days</option>
                    <option value="1 Week">1 Week</option>
                    <option value="1 Month">1 Month</option>
                </select>

                <input
                    type="email"
                    name="email"
                    value={workDetail.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    value={workDetail.description}
                    onChange={handleChange}
                    rows="4"
                ></textarea>

                <button type="submit">Update Work</button>
            </form>
        </div>
    );
};


export default EditWork