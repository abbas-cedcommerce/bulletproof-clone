import { Button, Card, FlexLayout, FormElement, TextField, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react'
import AuthLayout from '../design-templates/auth-design-templaets';

export function Login() {

    const [fieldValues, setInputs] = useState({
        email: '', password: ""
    });

    function handleInputs(key: string, value: string) {
        let newInput: any = { ...fieldValues };
        newInput[key] = value;
        setInputs(newInput);
    }

    return (
        <AuthLayout>
            <Card cardType="Shadowed">
                <FlexLayout direction="vertical" spacing="loose">
                    <TextStyles fontweight="extraBold" subheadingTypes="XS-1.6" type="SubHeading">
                        Login to your account
                    </TextStyles>
                    <FormElement key={null}>
                        <TextField
                            // error={fieldErrors?.email?.value}
                            name={"Email"}
                            onChange={(e) => { handleInputs("email", e) }}
                            placeHolder="Enter email address or username"
                            required={true}
                            // showHelp={fieldErrors.email.value ? fieldErrors.email.message : ''}
                            type="text"
                            value={fieldValues.email}
                        />
                        <TextField
                            // error={fieldErrors?.password?.value}
                            name={"Password"}
                            onChange={(e) => { handleInputs("password", e) }}
                            placeHolder="Enter Password"
                            required={true}
                            // showHelp={fieldErrors.password.value ? fieldErrors.password.message : ''}
                            type="password"
                            value={fieldValues.password}
                        />
                        <hr className="custom-hr" />
                        <Button
                            length="fullBtn"
                            // onClick={handleLoginFormSubmit}
                            thickness="thin"
                            type="Primary"
                        >
                            Login
                        </Button>
                    </FormElement>
                </FlexLayout>
            </Card>
        </AuthLayout>
    );
}
