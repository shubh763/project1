const MyEdu = (state, action) => {
    let data = {
        "higheredu": "",
        "passout": "",
        "grade":"",
        "college":"",
        "city":""
    };

    let eduData = Object.assign(data, state)
    if(action.type==="education"){
        eduData = action.info
    }
    return eduData
}

export default MyEdu