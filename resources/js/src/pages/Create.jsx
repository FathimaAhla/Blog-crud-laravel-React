import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../App";
// import { useNavigate } from "react-router-dom";

const Create = () => {

    // const navigate = useNavigate();

    // const [inputs,setInputs] = useState({title:"", body:""})

    // const handleChange = (event) => {
    //     setInputs({...inputs,[event.target.name]:event.target.value})
    // }

    // const handleFormSubmit = () => {
    //     let data = {title:inputs.title,body:inputs.body}
    //     axios.post(BASE_URL+'/api/posts', data).then(() => {
    //         navigate('/')
    //     })
    // }


    return  (<div className="container">
                <h3>Create Post</h3>
                <Link href="#">Back</Link>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input className="form-control" type="text" name="title" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea className="form-control" name="body" id=""rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success mt-2">Save</button>
                    </div>
                </form>
            </div>)
}

export default Create;
