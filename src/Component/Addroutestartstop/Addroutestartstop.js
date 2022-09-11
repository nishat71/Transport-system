import React from 'react'
import { useForm } from "react-hook-form";

export default function Addroutestartstop() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addroutes', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Route added");
                    reset();
                }
            })
    };
  return (
    <div className='row'>
    <div id="addProduct" className='addproduct '>
        <h2 className="">Please Add Route Start & Stopage here</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
                    {...register("route")}
                    placeholder="Route No."
                    className="text"
                    type="number"
                />
            {/* </div> */}
            {/* <div className="col-xl-12 mr-2 p-3"> */}
                <input
                    {...register("startlocation")}
                    placeholder=" Starting Location type here"
                    className="text"
                />
                <input
                    {...register("starttime")}
                    placeholder="Starting latitude"
                    className="text"
                />
            {/* </div> */}
            {/* <div className="col-xl-6 mr-2 p-3"> */}
                <input
                    {...register("startlabel")}
                    placeholder="Starting label type here"
                    className="text"
                />
            {/* </div> */}

            {/* <div className="col-xl-6 mr-2 p-3"> */}
                <input
                    {...register("startlatitude")}
                    placeholder="Starting latitude"
                    className="text"
                />
               
                <input
                    {...register("endlocation")}
                    placeholder=" Ending Location type here"
                    className="text"
                />
            {/* </div> */}
            {/* <div className="col-xl-6 mr-2 p-3"> */}
                <input
                    {...register("endlabel")}
                    placeholder="Ending label type here"
                    className="text"
                />
            {/* </div> */}

            {/* <div className="col-xl-6 mr-2 p-3"> */}
                <input
                    {...register("endlatitude")}
                    placeholder="Ending latitude"
                    className="text"
                />
                     <input type="submit" className='button' value="Add" />
            
        </form>
    </div>
</div>
  )
}
