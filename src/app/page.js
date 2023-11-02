'use client'
import { redirect } from 'next/navigation'
//1. Import area

import { useState } from "react";


//2. Defination area
 function Home() {
  //2.1 Hooks Area Hook Variable
  //let title = 'Login System';
//const [var,setVarFunction] = useState(intialValue);
  const [title,setTitle] = useState('Login System'); //setTitle();
  const [payload,setPayload] = useState({ email:"systemadmin@gmail.com",password:"systemadmin@gmail.com",role:"systemadmin"})

  //2.2 Function define
  let submit = (e)=>{
    console.log("Hi");
    console.log("Hi",payload.role);
    if(payload.role === 'systemadmin'){
        //Go to SystemAdmin Dashboard Page
        window.location.href = '/systemadmin/dashboard';
        //redirect('/systemadmin/dashboard');// I am calling the redirect function
    }
    if(payload.role === 'reseller'){
        //Go to SystemAdmin Dashboard Page
        window.location.href = '/reseller/dashboard';
        //redirect('/reseller/dashboard');// I am calling the redirect function
    }
    if(payload.role === 'enduser'){
        //Go to SystemAdmin Dashboard Page
        window.location.href = '/enduser/dashboard';
        //redirect('/enduser/dashboard');// I am calling the redirect function
    }
    if(payload.role === 'accountmanager'){
        //Go to SystemAdmin Dashboard Page
        window.location.href = '/accountmanager/dashboard';
        //redirect('/accountmanager/dashboard');// I am calling the redirect function
    }
  }
  let handleChange = (e)=>{
    console.log(e.target.value);
    if(e.target.value === 'systemadmin'){
      setPayload({
                    ...payload,
                    email:"systemadmin@gmail.com",
                    password:"systemadmin@gmail.com",
                    role:"systemadmin"
                 });
    }
    if(e.target.value === 'reseller'){
      setPayload({
                    ...payload,
                    email:"reseller@gmail.com",
                    password:"reseller@gmail.com",
                    role:"reseller"
                 });
    }
    if(e.target.value === 'accountmanager'){
      setPayload({
                    ...payload,
                    email:"accountmanager@gmail.com",
                    password:"accountmanager@gmail.com",
                    role:"accountmanager"
                 });
    }
    if(e.target.value === 'enduser'){
      setPayload({
                    ...payload,
                    email:"enduser@gmail.com",
                    password:"enduser@gmail.com",
                    role:"enduser"
                 });
    }
  }

  //2.3 Return Statment
  return (
    <>
      <div className="container">
        
        <div className="card mt-5">
            <div className="card-header">
              <h1 className="text-center mt-2">{title}</h1>
            </div>
            <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Select Role</label>
                    <select className="form-control" onChange={handleChange}>
                      <option value="systemadmin">SystemAdmin</option>
                      <option value="reseller">Reseller</option>
                      <option value="enduser">EndUser</option>
                      <option value="accountmanager">AccountManager</option>
                    </select>
                 </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={payload.email} />
                 </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={payload.password} />
                  </div>
                 </form>
            </div>
            <div className="card-footer" >
              <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
            </div>
        </div>

      </div>
    </>
  )
}

//3. Export area
//3.1 Default Export
export default Home
//3.2 NamedExport