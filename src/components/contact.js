import { useDispatch, useSelector } from "react-redux";
import LeftNav from "./Navigation";
import { useState } from "react";
import swal from "sweetalert";


const Contact= () =>{
    let contactdata = useSelector((state)=>state.MyContact)

    const [mobile, setMobile] = useState(contactdata.mobile)
    const [email, setEmail] = useState(contactdata.email)
    const [localaddress, setLocalAddress] = useState(contactdata.localaddress)
    const [permanentaddress, setPermanentAddress] = useState(contactdata.permanentaddress)
    const [referenceaddress, setReferenceAddress] = useState(contactdata.referenceaddress)

    const dispatch = useDispatch()

    const save =()=>{
        let contactinfo={
            "mobile": mobile,
            "email": email,
            "localaddress": localaddress,
            "permanentaddress": permanentaddress,
            "referenceaddress": referenceaddress
        }
        let mycontact = {type: "contact", info: contactinfo}
        dispatch(mycontact)
        swal("Save Success", "Your contact details saved successfully...", "success")
        setMobile("")
        setEmail("")
        setLocalAddress("")
        setPermanentAddress("")
        setReferenceAddress("")
    }


    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-7 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa fa-headset" aria-hidden="true"></i> Contact Imformation </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2"> Mobile Number </label>
                                        <input type="number" placeholder="Mobile No" className="form-control" onChange={obj=>setMobile(obj.target.value)} value={mobile}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Email Id</label>
                                        <input type="email" placeholder="Example@gmail.com" className="form-control" onChange={obj=>setEmail(obj.target.value)} value={email}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Local Address</label>
                                    <textarea placeholder="Local Address" className="form-control" rows="3" cols="3" onChange={obj=>setLocalAddress(obj.target.value)} value={localaddress}  ></textarea>
                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Permanent Address</label>
                                    <textarea placeholder="Permanent Address" className="form-control" rows="3" cols="3"  onChange={obj=>setPermanentAddress(obj.target.value)} value={permanentaddress}  ></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Any Refrence Address and Contact</label>
                                    <textarea placeholder="Other Contact" className="form-control" rows="3" cols="3"  onChange={obj=>setReferenceAddress(obj.target.value)} value={referenceaddress}  ></textarea>

                                    </div>

                                    <div class="text-center pb-2">
                                      <button class="btn btn-danger me-3" onClick={save}> Save & Contiue </button>
                                    </div>



                                </div>

                            </form>
                        </div>
                        
                    </div>
                </div>
            <div className="col-xl-3 mb-4"></div>
        </div>
    </div>
        )
    
}

export default Contact;
