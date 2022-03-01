import React, { useState } from "react";
import { TextField, Grid, Button, Typography, Divider } from '@mui/material';

const defaultValues = {
    name: "",
    age: 0,
    gender: "",
    os: "",
    favoriteNumber: 0,
};
const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    return (
        <div className="p-2" style={{ width: "100%" }}>
            <Typography variant="h5" className="text-center m-2" color="text.secondary" gutterBottom>
                Change Password
            </Typography>
            <Divider />
            <form onSubmit={handleSubmit} className="m-4">
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item >
                        <TextField
                            id="new-password-input"
                            name="newPassword"
                            label="New Password"
                            type="text"
                            placeholder="Enter your new Password"
                            className="m-3 my-2"
                            style={{ width: 400 }}
                        />
                    </Grid>
                    <Button variant="contained" style={{ width: 400 }} className="" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
        </div >
    );
};
export default Form;