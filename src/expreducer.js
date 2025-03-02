const MyExperience = (state, action) => {
    let data = {
        "totalex":"",
        "aboutex":""
    }
    let expdata = Object.assign(data, state)
    if(action.type==="experience"){
        expdata = action.info
    }
    return expdata
}

export default MyExperience