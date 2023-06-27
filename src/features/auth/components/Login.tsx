import React, { useState } from 'react'
import { Button, Card, Frame, TextField } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';

export function Login() {

    const navigate = useNavigate();
    const [fieldValues, setInputs] = useState({
        email: '', password: ""
    });

    function handleInputs(key: string, value: string) {
        let newInput: any = { ...fieldValues };
        newInput[key] = value;
        setInputs(newInput);
    }

    return (
        <Card padding={'025'}>
            <TextField
                label="Email"
                value={fieldValues.email}
                onChange={(e: any) => { handleInputs("email", e) }}
                autoComplete="off"
            />
            <TextField
                label="Password"
                value={fieldValues.password}
                onChange={(e: any) => { handleInputs("password", e) }}
                autoComplete="off"
            />
            <Button
                // onClick={handleLoginFormSubmit}
                onClick={()=>{
                    navigate("panel/products")
                } }
            >
                Login
            </Button>
        </Card>
    );
}
