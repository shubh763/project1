const MyProject = (state, action) => {
    let data = {
        "proname":"",
        "details":"",
        "techno":"",
        "url":""
    };
    let prodata = Object.assign(data, state)
    if(action.type==="project"){
        prodata = action.info
    }
    return prodata
}

export default MyProject