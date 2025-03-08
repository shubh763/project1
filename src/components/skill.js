import { useDispatch, useSelector } from "react-redux";
import LeftNav from "./Navigation";
import { useState } from "react";
import swal from "sweetalert";


const Skill = () =>{
    const skillData = useSelector(state=>state.MySkill)
    const [skills, setSkills] = useState(skillData.skills)

    const dispatch = useDispatch()

    const save=()=>{
        let skillinfo ={
            "skills": skills
        }
        let myskill = { type: "skill", info: skillinfo}
        dispatch(myskill)
        swal("Save Success", "Your Skills are Saved Successfully...", "success")
        setSkills("")
    }
    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
            <LeftNav/>
            </div>
            <div className="col-xl-7 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Skill Imformation </div>
                        <div className="card-body "> 
                            <form action="">
                                
                                <div className="form-group row"><div className="mb-4 ">
                                    <label className="mb-2"> Skill</label>
                                    <textarea  placeholder="Enter Skill" className="form-control" value={skills} onChange={(obj)=>setSkills(obj.target.value)}></textarea>
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

export default Skill;
