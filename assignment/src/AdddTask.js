import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from './SnackBarAlert'
import Dialog from '@material-ui/core/Dialog';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        padding: "16px 24px"
    },
    formLabel: {
        color: "#5763E1",
        fontSize: 13,
        fontWeight: "bold",
        margin: "0px 0px 4px 0px"
    },
    formField: {
        height: 32,
        width: "100%",
        borderRadius: 8,
        border: "1px solid lightgray",
        paddingLeft: 8,
        paddingRight: 8,
    },
    selectForm: {
        paddingRight: "0px !important",
    },
    buttonRow: {
        marginTop: 72,
    },
    addButton: {
        backgroundColor: "#5763E1",
        borderRadius: 20,
        color: "white",
        paddingLeft: 26,
        paddingRight: 26,
        textTransform: "none",
        float: "right"
    },
    cancelButton: {
        backgroundColor: "#BEA6A7",
        marginRight: 32,
        marginLeft: 8,
        color: "white",
        borderRadius: 20,
        textTransform: "none",
        float: "right"
    },
    actionButton: {
        color: "white"
    }
    
}))

const  AdddTask = (props)=> {
    console.log(props)
    const classes = useStyles();
    const user = props.location.state;
    const [buttonText, setButtonText] = useState(user ? "Update" : "Add")
    const [isEnabled, setEnabled] = useState(true)
    const [snackBarMessage, setSnackBarMessage] = useState("User Added Succesfully")
    const [severity, setSeverity] = useState("success")
    const [isSnackBarOpen, setSnackBarOpen] = useState(false)
    const [firstName, setFirstName] = useState(user ? user.first_name : "");
    const [lastName, setLastName] = useState(user ? user.last_name : ""); 
    const [email, setEmail] = useState(user ? user.email : "");
    const [state, setState] = useState(user ? user.states : "");
    const [city, setCity] = useState(user ? user.city : "");
    const [pincode, setPincode] = useState(user ? user.pincode : "");
    const [showPopup, setShowPopup] = useState(false)
    const [popupMessage, setPopupMessage] = useState("")
    const states = [
        "",
        "Delhi",
        "Goa",
        "Gujarat",
        "Maharashtra",
    ]

    const handleStateChange = (event) => {
        setState(event.target.value);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "first_name":
                setFirstName(value)
                break;
            case "last_name":
                setLastName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "city":
                setCity(value)
                break;
            case "pincode":
                setPincode(value)
                break;
        }
    }

    const addOrUpdateTask = () => {
        if (isValidEmail() && pincode !== "" && pincode.length === 5) {
            if (user) {
                updateTask()
            } else {
                addTask()
            }
        } else {
            setShowPopup(true)
            let message;
            if (!isValidEmail()) {
                message = "Please provide proper email"
            } else {
                message = "Please provide proper pin with minimum and maximum of 5 numbers"
            }
            setPopupMessage(message)
        }
    }

    const isValidEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    async function addTask() {
        setButtonText("Adding...")
        setEnabled(false)
        let url = `https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?param1=${email.trim()}&param2=${firstName.trim()}&param3=${lastName.trim()}&param4=${pincode.trim()}&param5=${city.trim()}&param6=${state}`
        console.log("URL : " + url)
        let response = await fetch(url);
        let  responseObj = await response.json();
        console.log(responseObj);
        if (responseObj.Success) {
            setSnackBarOpen(true)
            setSeverity("success")
            setSnackBarMessage("User Added Successfully!")
        } else {
            setButtonText("Add")
            setEnabled(true)
            setSnackBarOpen(false)
            setSeverity("error")
            setSnackBarMessage("Failed to Add User!")
        }
    }

    async function updateTask() {
        setButtonText("Updating...")
        setEnabled(false)
        let url = `https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?param1=${email.trim()}&param2=${firstName.trim()}&param3=${lastName.trim()}&param4=${Number(pincode.trim())}&param5=${city.trim()}&param6=${state}`
        console.log("URL : " + url)
        let response = await fetch(url);
        let  responseObj = await response.json();
        console.log(responseObj);
        if (responseObj.Success) {
            setSnackBarOpen(true)
            setSeverity("success")
            setSnackBarMessage("User Updated Successfully!")
        } else {
            setButtonText("Update")
            setEnabled(true)
            setSnackBarOpen(false)
            setSeverity("error")
            setSnackBarMessage("Failed to UpdateUser User!")
        }
    }

    const handleSnackBarClose = () => {
        if (severity === "success") {
            props.history.goBack()
        }
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <p className={classes.formLabel}>First Name</p>
                    <input type="text" className={classes.formField} name="first_name" onChange={handleInputChange} value={firstName}/>
                </Grid>
                <Grid item xs={2}>
                    <p className={classes.formLabel}>Last Name</p>
                    <input type="text" className={classes.formField}  name="last_name" value={lastName} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={2}>
                    <p className={classes.formLabel}>Email</p>
                    <input type="text" className={classes.formField}  name="email" onChange={handleInputChange} value={email} disabled={user}/>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item xs={2} className={classes.selectForm}>
                    <p className={classes.formLabel}>State</p>
                    <select className={classes.formField} style={{height: "61%"}} onChange={handleStateChange} value={state}>
                        {
                            states.map(state => {
                                return (
                                    <option value={state} key={state}>
                                        {state}
                                    </option>
                                )
                            })
                        }
                    </select>

                </Grid>
                <Grid item xs={2}>
                    <p className={classes.formLabel}>City</p>
                    <input type="text" className={classes.formField}  name="city" onChange={handleInputChange} value={city}/>
                </Grid>
                <Grid item xs={2}>
                    <p className={classes.formLabel}>Pincode</p>
                    <input type="number" className={classes.formField}  name="pincode" onChange={handleInputChange} value={pincode} maxLength={5}/>
                </Grid>
            </Grid>
            <Grid container className={classes.buttonRow}>
                <Grid item xs={6}>
                    <Button variant= "contained" color = "secondary" className={classes.cancelButton} onClick={() => props.history.goBack()}>
                        Cancel
                    </Button>
                    <Button variant="contained" color = "primary" className={classes.addButton} onClick={addOrUpdateTask} disabled={!isEnabled}>
                        {buttonText}
                    </Button>
                </Grid>
            </Grid>

            <Snackbar open={isSnackBarOpen} autoHideDuration={2000} onClose={handleSnackBarClose}>
              <Alert  severity={severity}>
                {snackBarMessage}
              </Alert>
            </Snackbar>

            
            <Dialog
                open={showPopup}
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {popupMessage}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button  variant="contained" onClick={() => setShowPopup(false)} className={classes.actionButton} style={{backgroundColor: "#C95555"}}>
                    OK
                  </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default AdddTask;