import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const FinalPreview = () =>{
    let basicdata = useSelector( state=>state.MyBasic );
    let contactdata = useSelector(state=>state.MyContact)
    let skilldata = useSelector(state=>state.MySkill)
    let eduData = useSelector(state=>state.MyEdu)
    let prodata = useSelector(state=>state.MyProject)
    let expdata = useSelector(state=>state.MyExperience)

    const save = () =>{

        let mydata = {
          "basic":basicdata,
          "edu":eduData,
          "contact":contactdata,
          "skill":skilldata,
          "exp":expdata,
          "project":prodata
        }
    
      let url = "https://cybotrix.com/liveapi/api/save";
      let postdata = {
          headers:{'content-type':'application/json'},
          method:'post',
          body:JSON.stringify({"details":mydata})
      }
    
      fetch(url, postdata)
      .then(response =>response.text())
      .then(info=>{
          swal("Profile Submitted", "Your Profile Submitted, We Will Contact You Soon...", "success");
    
          setTimeout(()=>{window.location.reload()}, 3000);
      })
    }



    return(
        <div className="container mt-4 mb-5">
            <div className="row">
                
                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Basic Details </div>
                        <div className="card-body"> 
                            <table className="table">
                                <tbody>
                                    <tr> <td> Fulll Name </td> <td> {basicdata.fullname} </td> </tr>
                                    <tr> <td> Gender </td> <td> {basicdata.gender} </td> </tr>
                                    <tr> <td> Date of Birth </td> <td> {basicdata.dob} </td> </tr>
                                    <tr> <td> Married </td> <td> {basicdata.married} </td> </tr>
                                    <tr> <td> Profile Status </td> <td> {basicdata.profilestatus} </td> </tr>
                                    <tr> <td colSpan={2}> <b> About Me : </b> {basicdata.about} </td> </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer"> 
                           <Link to="/basic" className="text-decoration-none"> 
                             <i className="fa fa-edit"></i> Edit 
                           </Link>  
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Contact Details </div>
                        <div className="card-body">
                        <table className="table">
                                <tbody>
                                    <tr> <td>Mobile No.</td> <td> {contactdata.mobile} </td> </tr>
                                    <tr> <td> Email </td> <td> {contactdata.email} </td> </tr>
                                    <tr> <td> Local Address </td> <td> {contactdata.localaddress} </td> </tr>
                                    <tr> <td> Permanent Address </td> <td> {contactdata.permanentaddress} </td> </tr>
                                    <tr> <td> Reference Address </td> <td> {contactdata.referenceaddress} </td> </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer"> 
                           <Link to="/contact" className="text-decoration-none"> 
                             <i className="fa fa-edit"></i> Edit 
                           </Link>  
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Education Details </div>
                        <div className="card-body">
                        <table className="table">
                                <tbody>
                                    <tr> <td>Higher Education</td> <td> {eduData.higheredu} </td> </tr> 
                                    <tr> <td>Passout</td> <td> {eduData.passout} </td> </tr> 
                                    <tr> <td>Grade</td> <td> {eduData.grade} </td> </tr> 
                                    <tr> <td>College</td> <td> {eduData.college} </td> </tr> 
                                    <tr> <td>City</td> <td> {eduData.city} </td> </tr> 
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer"> 
                           <Link to="/education" className="text-decoration-none"> 
                             <i className="fa fa-edit"></i> Edit 
                           </Link>  
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Skill Details </div>
                        <div className="card-body">
                        <table className="table">
                                <tbody>
                                    <tr> <td>Technical Skills</td> <td> {skilldata.skills} </td> </tr> 
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer"> 
                           <Link to="/skills" className="text-decoration-none"> 
                             <i className="fa fa-edit"></i> Edit 
                           </Link>  
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Project Details </div>
                        <div className="card-body">
                        <table className="table">
                                <tbody>
                                    <tr> <td>Project Name</td> <td> {prodata.proname} </td> </tr> 
                                    <tr> <td>Project Details</td> <td> {prodata.details} </td> </tr> 
                                    <tr> <td>Technology</td> <td> {prodata.techno} </td> </tr> 
                                    <tr> <td>Live URL</td> <td> {prodata.url} </td> </tr> 

                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer"> 
                           <Link to="/project" className="text-decoration-none"> 
                             <i className="fa fa-edit"></i> Edit 
                           </Link>  
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Experience Details </div>
                        <div className="card-body">
                        <table className="table">
                                <tbody>
                                    <tr> <td>Total Experience</td> <td> {expdata.totalex} </td> </tr> 
                                    <tr> <td>About</td> <td> {expdata.aboutex} </td> </tr> 

                                </tbody>
                            </table>
                        </div>
                          <div className="card-footer"> 
                           <Link to="/experience" className="text-decoration-none"> 
                             <i className="fa fa-edit"></i> Edit 
                           </Link>  
                        </div>
                    </div>
                </div>

                <div className="col-xl-12 text-center">
                    <button className="btn btn-danger" onClick={save}> 
                        Submit My Details  <i className="fa fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FinalPreview;