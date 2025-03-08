import { useState } from "react";
import LeftNav from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";


const Education = () =>{
    const eduData = useSelector(state=>state.MyEdu)
    const [highedu, setHighEdu] = useState(eduData.higheredu) 
    const [passout, setPassout] = useState(eduData.passout) 
    const [grade, setGrade] = useState(eduData.grade)
    const[college, setCollege] = useState(eduData.college)
    const [city, setCity] = useState(eduData.city)

    const dispatch = useDispatch()
    const save=()=>{
        let eduinfo ={
            "higheredu": highedu,
            "passout": passout,
            "grade": grade,
            "college": college,
            "city": city
        }
        let myedu = {type: "education", info: eduinfo}
        dispatch(myedu)
        swal("Save Success", "Your education details saved Successfully..", "success")
        setHighEdu("")
        setPassout("")
        setGrade("")
        setCollege("")
        setCity("")

    }

    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
            <LeftNav/>
            </div>
            <div className="col-xl-7 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Education Imformation </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2">Highest Education </label>
                                        <input type="text" placeholder="Highest Eduction" className="form-control" value={highedu} onChange={(obj)=>setHighEdu(obj.target.value)}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Passing Year</label>
                                        <input type="number" placeholder="Ex. 2012" className="form-control" value={passout} onChange={(obj)=>setPassout(obj.target.value)}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Grade/Persentage (%)</label>
                                    <input type="text" placeholder="Grade/Persentage (%)" className="form-control" value={grade} onChange={(obj)=>setGrade(obj.target.value)}/>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> College / University</label>
                                    <input type="text" placeholder="Collage / University" className="form-control" value={college} onChange={(obj)=>setCollege(obj.target.value)}/>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> City</label>
                                    <input type="text" placeholder="City" className="form-control" value={city} onChange={(obj)=>setCity(obj.target.value)}/>
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

export default Education;
