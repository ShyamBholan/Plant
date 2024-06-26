import React from 'react'
const Signup = () => {
  return (
    <>
    <div className="d-flex justify-content-center">
        <div className="col-lg-3 my-4">
            <form className="p-3 shadow-lg">
                <h2 className="text-center text-success my-2">
                    Register Here
                </h2>
                <div className="mb-3">
                    <label htmlFor="fname">FullName</label>
                    <input type="text" id="fname" className="form-control"                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpass">Confirm Password</label>
                    <input type="password" id="cpass" className="form-control"/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-success" >Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Signup