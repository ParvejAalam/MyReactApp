import { React , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(() => ({
    popupBox :{
        position: "fixed",
        background: "#00000050",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
      },
      box: {
        position: "relative",
        width: "40%",
        margin: "0  auto",
        height: "auto",
        maxHeight: "70vh",
        marginTop:" calc(100vh - 85vh - 20px)",
        background:" #fff",
        borderRadius: "4px",
        padding:" 20px",
        border: "1px solid #999",
        overflow: "auto",
      },
      closeIcon: {
        content: 'x',
        cursor: "pointer",
        position: "fixed",
        right: "calc(15% - 30px)",
        top: "calc(100vh - 85vh - 33px)",
        background: "#ededed",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        lineHeight: "20px",
        textAlign: "center",
        border: "1px solid #999",
        fontSize: "20px",
      },
  }));

function PopUp(props) {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    const classes = useStyles();
    return (
        <>
        <button onClick = {togglePopup}>Open PopUp</button>
         {isOpen && 
            <div className={classes.popupBox}>
              <div className={classes.box}>
                {props.content}
                <button>0k</button>
              </div>
            </div>
         }
      </>
    );
}

export default PopUp;