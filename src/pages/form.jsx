import React, { useState }  from "react";
import toast from "react-hot-toast";
const Form = ()=>{

  const handleSubmit=  async (e)=>{

    e.preventDefault();
    toast.success("Form Has Been Submitted ");
  

}

  
    return(
    <div className="formcontainer">

      <div className="formwrapper">

        <span className="logo">
          Frontend Project
        </span>
     

         <form onSubmit={handleSubmit}>
            <input type="text" className="text" placeholder="display name" />
            <input type="email" className="text" placeholder="email"/>
            <input type="password" className="text" placeholder="message"/>
            <input style={{display: "none"}}type="file" className="text" id="file" />
            <label htmlFor="file">
              <img src="" alt="New" />
              <span>Add an Avatar</span>
            </label>
            <button type="submit">Submit</button>

            
          
         </form>
         
        </div>



    </div>
        )

}

        export default Form;