import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpen } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

export default function Modal({ contact }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isOpen = useSelector(selectIsOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
      dispatch(closeModal());
      toast.success('This contact has been deleted!');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Delete confirmation'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This contact will be permanently deleted. Do you agree?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
