    import React, { useEffect, useState } from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import AddIcon from '@material-ui/icons/Add';
    import Table from '@material-ui/core/Table';
    import TableBody from '@material-ui/core/TableBody';
    import TableCell from '@material-ui/core/TableCell';
    import TableHead from '@material-ui/core/TableHead';
    import TableRow from '@material-ui/core/TableRow';
    import Button from '@material-ui/core/Button';
    import { Link } from 'react-router-dom'
    import Dialog from '@material-ui/core/Dialog';
    import { DialogContentText } from '@material-ui/core';
    import { DialogActions } from '@material-ui/core';
    import { DialogContent } from '@material-ui/core';
    import Snackbar from '@material-ui/core/Snackbar';
    import Alert from './SnackBarAlert'
    import CircularProgress from '@material-ui/core/CircularProgress';
    


    const useStyles = makeStyles((theme) => ({
        btnInputDiv:{
          marginTop:10,
          display:"flex",
          justifyContent:"space-between",
          alignItems: "flex-end"
        },
        searchField: {
          height: 30,
          borderRadius: 8,
          width: 180,
          border: "1px solid lightgray",
          paddingLeft: 8,
          paddingRight: 8,
        },
        iconButton: {
            width: 15,
            height: 15
        },
        root: {
            margin: "10px auto",
            width: "calc(100% - 50px)",
            padding: "7px",
            lineHeight:"0px"
        },
        table: {
            marginTop: 10,
            border: "1px solid gray"
        },
        tableHeadCell:{
            padding:"10px",
            backgroundColor:"#5763E1",
            color: "white"
        },
        rowCell: {
          padding: 10,
        },
        actionButton: {
          borderRadius: 20,
          color: "white",
        },
        circleRoot: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        noRecord: {
          borderBottom: "1px solid"
        }
    }));

    var originalUserList = [];

    const  Home = (props) => {
      const [users , setUsers] = useState([]);
      const [isDilogOpen, setDialogOpen] = useState(false)
      const [name, setName] = useState('')
      const [index, setIndex] = useState(-1);
      const [deleteMessage, setDeleteMessage] = useState("User Deleted Successfully")
      const [severity, setSeverity] = useState("success")
      const [isSnackBarOpen, setSnackBarOpen] = useState(false)
      const [isDeleting, setDeleting] = useState(false)
      const [isLoading, setLoading] = useState(true)

      useEffect(() => {
        fetchData("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch");
      },[]);

      async function fetchData(url){
        let response = await fetch(url);
        let  userData = await response.json();
        console.log(userData);
        setLoading(false)
        setUsers(userData.data) ;  
        originalUserList = userData.data;      
      };

      const handleDelete = async (index) =>{
        let user = users[index];
        setIndex(index)
        setName(`${user.first_name} ${user.last_name}`)
        setDialogOpen(true)
      };

      const deleteUser = async () => {
        setDeleting(true)
        let url = `https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?param1=${users[index].email}`
        console.log("URL : " + url)
        let response = await fetch(url);
        let  responseObj = await response.json();
        console.log(responseObj);
        setDialogOpen(false)
        if (responseObj.Success) {
            users.splice(index, 1)
            setUsers([...users]);
            setSnackBarOpen(true)
            setSeverity("success")
            setDeleteMessage("User deleted successfully!")
        } else {
          setSnackBarOpen(true)
          setSeverity("error")
          setDeleteMessage("Failed to delete User!")
        }
      }

      const handleSearch = (e) => {
        let query = e.target.value.toLowerCase();
        setUsers(originalUserList.filter(user => {
          return user.first_name.toLowerCase().includes(query) 
            || user.last_name.toLowerCase().includes(query)
            || user.email.includes(query)
            || user.states.toLowerCase().includes(query)
            || user.city.toLowerCase().includes(query)
            || user.pincode.includes(query)
        }))
      }

      const redirectToEditScreen = (index) => {
        let user = users[index]
        props.history.push('/edittask', {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          states: user.states,
          city: user.city,
          pincode: user.pincode,
        })
      }

      const closeDialog = () => {
        setDialogOpen(false)
        setDeleting(false)
      }

      const classes = useStyles(); 

      if (isLoading) {
        return (
          <div className={classes.circleRoot}>
            <CircularProgress />
          </div>
        )
      }

      return (
          <>
            <div className={classes.root}>
              <div className = {classes.btnInputDiv}>
                <div>           
                  <Link to = "AddTask">
                    <AddIcon className={classes.iconButton}/>
                    <span>Add record</span>
                  </Link>
               
                </div>
                <input type = "text" id="name" className={classes.searchField} placeholder="Search" onChange={handleSearch}/>
              </div>
            
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow className = {classes.tableHead}>
                    <TableCell className={classes.tableHeadCell}>#</TableCell>
                    <TableCell className={classes.tableHeadCell}>First Name</TableCell>
                    <TableCell className={classes.tableHeadCell}>Last Name</TableCell>
                    <TableCell className={classes.tableHeadCell}>Email</TableCell>
                    <TableCell className={classes.tableHeadCell}>State</TableCell>
                    <TableCell className={classes.tableHeadCell}>City</TableCell>
                    <TableCell className={classes.tableHeadCell}>Pincode</TableCell>
                    <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>           
                  </TableRow>
                </TableHead>
                <TableBody>
                {users.length > 0 ? users.map((element , index) => (
                  <TableRow key={index} style = {{textAlign:'left',color:'red'}}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left" className={classes.rowCell}>{element.first_name}</TableCell> 
                    <TableCell align="left" className={classes.rowCell}>{element.last_name}</TableCell>
                    <TableCell align="left" className={classes.rowCell}>{element.email}</TableCell>
                    <TableCell align="left" className={classes.rowCell}>{element.states}</TableCell>
                    <TableCell align="left" className={classes.rowCell}>{element.city}</TableCell>
                    <TableCell align="left" className={classes.rowCell}>{element.pincode}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" style={{marginRight: 8, paddingLeft: 26, paddingRight: 26, backgroundColor: "#558FC9"}} className={classes.actionButton}
                        onClick={() => redirectToEditScreen(index)}>
                        EDIT
                      </Button>
                      <Button onClick = {() => {handleDelete(index)}} variant="contained" color="secondary" className={classes.actionButton} style={{backgroundColor: "#C95555"}}>
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                )) : 
                  <>
                    <TableRow>
                      <TableCell align="center" className={classes.noRecord}>No Record Found</TableCell>
                    </TableRow>
                  </>
                }
                </TableBody>
              </Table>

            </div>   

            <Dialog
                open={isDilogOpen}
                onClose={(event, reason) => {
                  if (reason !== 'backdropClick') {
                    closeDialog(event, reason)
                  }
                }}
                disableEscapeKeyDown={true}
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure to delete {name}?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button  variant="contained" onClick={deleteUser} className={classes.actionButton} style={{backgroundColor: "#C95555"}} disabled={isDeleting}>
                    {isDeleting ? "Deleting..." : "Delete"}
                  </Button>
                  <Button variant="contained" onClick={closeDialog} className={classes.actionButton} style={{backgroundColor: "#BEA6A7"}}>
                    Cancel
                  </Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={isSnackBarOpen} autoHideDuration={3000} onClose={() => setSnackBarOpen(false)}>
              <Alert  severity={severity}>
                {deleteMessage}
              </Alert>
            </Snackbar>

          </>
      );
    }

    export default Home;