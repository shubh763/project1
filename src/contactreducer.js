const MyContact = (state, action) => {
    let data = {
        "mobile":"",
        "email":"",
        "localaddress":"",
        "permanentaddress":"",
        "referenceaddress":""   
    };
    let contactdata = Object.assign(data, state);
    if(action.type==="contact"){
        contactdata = action.info;
    }
    return contactdata;}

export default MyContact