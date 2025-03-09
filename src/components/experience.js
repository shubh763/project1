import { useState } from "react";
import LeftNav from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";


const Experience = () =>{
    const expdata = useSelector(state=>state.MyExperience)
    const[total, setTotal] = useState(expdata.totalex)
    const[about, setAbout] = useState(expdata.aboutex)

    const dispatch = useDispatch()

    const save=()=>{
        if (!total || !about ) {
            swal("Error", "All fields are required!", "error");
            return;
          }
        let exinfo ={
            "totalex": total,
            "aboutex":about
        }
        let myData = {type: "experience", info: exinfo}
        dispatch(myData)
        swal("Save Success","Your work experience details saved successfully", "success")
        setTotal("")
        setAbout("")
    }
    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-7 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i className="fa-solid fa-user-graduate"></i> Experience Information </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row">
                                    <div className="mb-4 ">
                                    <label className="mb-2">Total Experience</label>
                                    <input  type="text" placeholder="Total Experience" className="form-control" value={total} onChange={(obj)=>setTotal(obj.target.value)}/>
                                    </div>
                                    <div className="mb-4 ">
                                    <label className="mb-2">About Experience</label>
                                    <textarea  placeholder="About Experience" className="form-control" rows="3" cols="3" maxlength="400" value={about} onChange={(obj)=>setAbout(obj.target.value)} ></textarea>
                                    </div>

                                    <div class="text-center pb-2">
                                      <button class="btn btn-danger me-3" onClick={save}> Save </button>
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

export default Experience;
