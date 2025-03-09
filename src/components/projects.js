import { useState } from "react";
import LeftNav from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";


const Project = () =>{
    const prodata = useSelector(state=>state.MyProject)
    const [name, setName] = useState(prodata.proname)
    const [details, setDetails] = useState(prodata.details)
    const [techno, setTechno] = useState(prodata.techno)
    const [url, setUrl] = useState(prodata.url)

    const dispatch = useDispatch()

    const save=()=>{
        if (!name || !details || !techno || !url ) {
            swal("Error", "All fields are required!", "error");
            return;
        }
        let proinfo ={
            "proname": name,
            "details":details,
            "techno": techno,
            "url": url
        }
        let myinfo = {type: "project", info: proinfo}
        dispatch(myinfo)
        swal("Save Success", "Your project details save successfully...", "success");
        setName("")
        setDetails("")
        setTechno("")
        setUrl("")
    }


    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-7 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i className="fa-solid fa-user-graduate"></i> Project Information </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2">Project Name </label>
                                        <input type="text" placeholder="Project Name" className="form-control" value={name} onChange={(obj)=>setName(obj.target.value)}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Project Details</label>
                                    <textarea  placeholder="Project Details" className="form-control" value={details} onChange={(obj)=>setDetails(obj.target.value)}></textarea>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Technology </label>
                                    <textarea  placeholder="Technology" className="form-control" value={techno} onChange={(obj)=>setTechno(obj.target.value)}></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Live Project Url</label>
                                    <input type="text" placeholder="Url" className="form-control" value={url} onChange={(obj)=>setUrl(obj.target.value)}/>

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

export default Project;
