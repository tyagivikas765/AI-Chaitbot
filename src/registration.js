import React from "react";

import { useForm } from "react-hook-form";
import "./App.css";

function Registration() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    //const onSubmit = (data) => console.log(data);
    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify({
            name: data.name, password: data.password
        }));
        console.log(JSON.parse(localStorage.getItem(data.email)));
    };

    return (
        <>
            <p className="title">Registration Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <div className="block">
                    <div className="form-control">
                        <label>Name </label>
                        <input type="text" {...register("name", { required: true })} />
                        {errors.name && <span style={{ color: "red" }}>
                            *Name* is mandatory </span>}
                    </div>

                    <div className="form-control">
                        <label>Email </label>
                        <input type="email" {...register("email", { required: true })} />
                        {errors.email && <span style={{ color: "red" }}>
                            *Email* is mandatory </span>}
                    </div>

                    <div >
                        <label className="p-label">Password </label>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <span style={{ color: "red" }}>
                            *Password* is mandatory </span>}
                    </div>

                    <div className="form-control">
                        <button type={"submit"} style={{ backgroundColor: "#a1eafb" }}>Submit</button>
                    </div>



                    {/* <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} /> */}
                </div>

            </form>


        </>
    );
}
export default Registration;