import React from 'react'
const Contact = () => {
return (
<div className="container contact">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="Name*" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="Email*" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="email" className="form-control-lg" placeholder="Email Address" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="tel" className="form-control-lg" placeholder="Phone no." required />
                        </div>
                    </div> */}
                      <div className="col-11 mb-4">
                        <input className="form-control"  placeholder="subject" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <textarea className="form-control" row="100" placeholder="Your message" required></textarea>
                    </div>
                    
                </div>
                <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button className="btn btn-dark  btn-lg btn-block">Send</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Contact