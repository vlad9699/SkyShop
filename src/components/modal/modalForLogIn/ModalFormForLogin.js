import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import SignIn from './form/SingIn';

function rand() {
   return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
   const top = 40;
   const left = 43;

   return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
   };
}

const useStyles = makeStyles((theme) => ({
   paper: {
      position: 'absolute',

      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      borderRadius: '5px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      [theme.breakpoints.down('sm')]: {
         width: '110%',
         height: '100%',
      },
   },
}));

export default function ModalFormForLogin() {
   const classes = useStyles();
   // getModalStyle is not a pure function, we roll the style only on the first render
   const [modalStyle] = React.useState(getModalStyle);
   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const body = (
      <div style={modalStyle} className={classes.paper}>
         <SignIn />
      </div>
   );

   return (
      <div>
         <Button color='inherit' variant='outlined' onClick={handleOpen}>
            Sing In
         </Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
         >
            {body}
         </Modal>
      </div>
   );
}
