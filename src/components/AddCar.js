import React, { useState} from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function AddCar({addCar}) {
    const [open, setOpen] = useState(false);

    const [car, setCar] = useState({
        brand: '', 
        model: '', 
        color: '', 
        fuel: '', 
        year: '', 
        price: ''
      })
    const handleClickOpen = () => {
        console.log("Ollaan handle click openissa")
        setOpen(true);
    }
    const handleClose = () => {
        console.log("Suljetaan ikkuna")
        setOpen(false);
    }
    const handleSave = () => {
        console.log("Käsitellään tallennus")
        addCar(car);
        setOpen(false);
    } 
    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    } 

    return (
        <div>
            <Button onClick={handleClickOpen} variant="outlined">
                Add car
            </Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Add car</DialogTitle>
                <DialogContent>
                    <TextField 
                        name="brand"
                        value={car.brand}
                        label="Brand"
                        margin="dense"
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField 
                        name="model"
                        value={car.model}
                        label="Model"
                        margin="dense"
                        onChange={inputChanged}
                        fullWidth={true} 
                    />
                    <TextField 
                        name="color"
                        value={car.color}
                        label="Color"
                        margin="dense"
                        onChange={inputChanged}
                        fullWidth={true} 
                    />
                    <TextField 
                        name="fuel"
                        value={car.fuel}
                        label="Fuel"
                        margin="dense"
                        onChange={inputChanged}
                        fullWidth={true} 
                    />
                     <TextField 
                        name="year"
                        value={car.year}
                        label="Year"
                        margin="dense"
                        onChange={inputChanged}
                        fullWidth={true}  
                    />
                    <TextField 
                        name="price"
                        value={car.price}
                        label="Price"
                        margin="dense"
                        onChange={inputChanged}
                        fullWidth={true} 
                    />
                </DialogContent>
                <DialogActions></DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </Dialog>
        </div>
    );
}
export default AddCar;