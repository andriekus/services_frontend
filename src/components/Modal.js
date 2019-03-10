import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
      open: this.props.toggle,
      activeItem: this.props.activeItem
    };
  }
  
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
            };

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      return (
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Service Item</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Change services info
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                id="description"
                label="Description"
                type="text"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                fullWidth
              />
              <Checkbox
                label="Availability"
                checked={this.state.activeItem.available}
                onChange={this.handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }





// import React, { Component } from 'react';

// export default class CustomModal extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeItem: this.props.activeItem
//         };
//     }

//     handleChange = e => {
//         let { name, value } = e.target;
//         if (e.target.type === "checkbox") {
//             value = e.target.checked;
//         }
//         const activeItem = { ...this.state.activeItem, [name]: value };
//         this.setState({ activeItem });
//     };

//     render() {
//         const { toggle, onSave } = this.props;
//         return (
//             <div className="modal">
//                 <div className="modal-header"> Service Item </div>
//                 <div className="modal-body">
//                     <form>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 name="title"
//                                 value={this.state.activeItem.title}
//                                 onChange={this.handleChange}
//                                 placeholder="Enter Service Title"
//                              />
//                         </div>
//                         <div className="form-group">
//                             <input 
//                                 type="text"
//                                 name="description"
//                                 value={this.state.activeItem.description}
//                                 onChange={this.handleChange}
//                                 placeholder="Enter Service Description"
//                             />
//                         </div>
//                         <div className="form-group form-check">
//                                 <input
//                                     type="checkbox"
//                                     name="available"
//                                     checked={this.state.activeItem.available}
//                                     onChange={this.handleChange}
//                                 />
//                                 Completed
//                         </div>
//                     </form>
//                 </div>
//                 <div className="modal-footer">
//                     <button className="success" onClick={() => onSave(this.state.activeItem)}>
//                         Save
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }