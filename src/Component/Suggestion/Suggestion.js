import React from 'react'
import { useForm } from "react-hook-form";

export default function Suggestions() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/suggestions', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Suggestion added");
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
                    {...register("studroute")}
                    placeholder="Student Bus Route No."
                    className="text"
                    type="number"
                />
            {/* </div> */}
            {/* <div className="col-xl-12 mr-2 p-3"> */}
                <input
                    {...register("studtime")}
                    placeholder=" Student bus time slot"
                    className="text"
                />
                 <input
                    {...register("studquantity")}
                    placeholder=" Student Quantity type here"
                    className="text"
                />
                 <input
                    {...register("studbuscodename")}
                    placeholder=" Student Bus Code Name"
                    className="text"
                />

                <input
                    {...register("tchrroute")}
                    placeholder="Teacher Bus Route No."
                    className="text"
                />
            {/* </div> */}
            {/* <div className="col-xl-6 mr-2 p-3"> */}
                <input
                    {...register("tchrtime")}
                    placeholder="Teacher Bus Time Slot"
                    className="text"
                />
                 <input
                    {...register("tchrquantity")}
                    placeholder="Teacher Quantity type here"
                    className="text" type="number"
                />
            {/* </div> */}
            <input
                    {...register("tchrbuscodename")}
                    placeholder=" Teacher Bus Code Name"
                    className="text"
                />

            {/* <div className="col-xl-6 mr-2 p-3"> */}
                <input
                    {...register("staffroute")}
                    placeholder="Staff or Official Bus No."
                    className="text"
                />
               
                <input
                    {...register("stafftime")}
                    placeholder="Staff or Official time slot"
                    className="text"
                />
                 <input
                    {...register("staffquantity")}
                    placeholder="Staff or Official quantity"
                    className="text" type="number"
                />
                 <input
                    {...register("staffbuscodename")}
                    placeholder=" Staff Bus Code Name"
                    className="text"
                />
                 <input
                    {...register("extrabus")}
                    placeholder="Extra Bus If required"
                    className="text"
                />
           
                     <input type="submit" className='button' value="Add" />
            
        </form>
    </div>
</div>
  )
}
