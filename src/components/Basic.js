import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import LeftNav from "./Navigation";
import swal from "sweetalert";

const Basic = () => {
  let basicdata = useSelector((state) => state.MyBasic);

  let [name, setName] = useState(basicdata.fullname);
  let [dob, setDob] = useState(basicdata.dob);
  let [gender, setGender] = useState(basicdata.gender);
  let [married, setMarried] = useState(basicdata.married);
  let [profilestatus, setStatus] = useState(basicdata.profilestatus);
  let [about, setAbout] = useState(basicdata.about);

  let dispatch = useDispatch();
  const save = () => {
    let userinfo = {
      fullname: name,
      dob: dob,
      gender: gender,
      married: married,
      profilestatus: profilestatus,
      about: about,
    };
    let mydata = { type: "basic", info: userinfo };
    dispatch(mydata);
    swal("Save Success", "Your basic details save successfully...", "success");
    setName("");
    setDob("");
    setGender("");
    setMarried("");
    setStatus("");
    setAbout("");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-3 mb-4">
          <LeftNav />
        </div>
        <div className="col-xl-7 mb-4 ">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">
              {" "}
              <i class="fa fa-info-circle" aria-hidden="true"></i> Basic
              Information{" "}
            </div>
            <div className="card-body ">
              <div className="form-group row">
                <div className="mb-4">
                  <label className="mb-2"> Full Name </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    onChange={(obj) => setName(obj.target.value)}
                    value={name}
                  />
                </div>

                <div className="mb-4 col-xl-6">
                  <label className="mb-2"> Date Of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="DOB"
                    onChange={(obj) => setDob(obj.target.value)}
                    value={dob}
                  />
                </div>

                <div className="mb-4 col-xl-6">
                  <label className="mb-2"> Gender</label>
                  <select
                    className="form-select"
                    onChange={(obj) => setGender(obj.target.value)}
                    value={gender}
                  >
                    <option>Choose</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="mb-4 col-xl-6">
                  <label className="mb-2"> Married</label>
                  <select
                    className="form-select"
                    onChange={(obj) => setMarried(obj.target.value)}
                    value={married}
                  >
                    <option>Choose</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="mb-4 col-xl-6">
                  <label className="mb-2"> Profile Status</label>
                  <select
                    className="form-select"
                    onChange={(obj) => setStatus(obj.target.value)}
                    value={profilestatus}
                  >
                    <option>Choose</option>
                    <option>Active</option>
                    <option>inactive</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="mb-2"> About Your Self</label>
                  <textarea
                    placeholder="About Your Self"
                    className="form-control"
                    rows="3"
                    cols="3"
                    maxlength="200"
                    onChange={(obj) => setAbout(obj.target.value)}
                    value={about}
                  ></textarea>
                </div>

                <div class="text-center pb-2">
                  <button class="btn btn-danger me-3" onClick={save}>
                    {" "}
                    Save & Contiue{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 mb-4"></div>
      </div>
    </div>
  );
};

export default Basic;
