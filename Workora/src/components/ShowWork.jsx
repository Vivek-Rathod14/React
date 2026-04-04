import React, { useEffect } from 'react';
import './ShowWork.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, EditPost, getWorkAsync } from '../redux/actions/workora.action';
import { useNavigate } from 'react-router-dom';
import EditWork from './EditWork';

const ShowWork = () => {
    const workoras = useSelector((state) => state.workoras)
    const dispatch =useDispatch()
    console.log("WORKORAS:", workoras); // 👈 check
    useEffect(() => {
        dispatch(getWorkAsync());
    })
    return (
        <div className="container">
            {workoras?.length > 0 ? (
                workoras.map((e) => (
                    <div className="card" key={e.id}>

                        <div className="card-header">
                            <h2>{e.title}</h2>
                            <span className="status">● Available</span>
                        </div>

                        <div className="card-body">
                            <p><strong>Skills:</strong> {e.skills}</p>
                            <p><strong>Duration:</strong> {e.duration}</p>
                            <p><strong>Budget:</strong> ₹{e.budget}</p>
                            <p className="desc">{e.description}</p>
                        </div>

                        <div className="card-footer">
                            <button className="btn hire">Hire Me</button>
                            <button className="btn mail">Copy Mail</button>
                        </div>

                        <div className="card-bottom">
                            ⚡ Always Creative Mood On
                        </div>

                    </div>
                ))
            ) : (
                <h2>No Data Found</h2>
            )}
        </div>
    )
}

export default ShowWork;