import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import './LoginForm.css';
import authenticate from './api';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [form] = Form.useForm();
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
    const handleUsernameChange = () => {
        form.validateFields(['username']);
        validateForm();
    };

    const handlePasswordChange = () => {
        form.validateFields(['password']);
        validateForm();
    };

    const validateForm = () => {
        form
            .validateFields()
            .then(() => {
                setIsFormValid(true);
            })
            .catch(() => {
                setIsFormValid(false);
            });
    };
    /**
   * Handles the submission of a form.
   * @param {Object} values - The form values.
   * @param {string} values.username - The username entered in the form.
   * @param {string} values.password - The password entered in the form.
   * @returns {Promise<void>} A promise that resolves when the form submission is complete.
   */
    const handleFormSubmit = async (values) => {
        try {
            if (isFormValid) {
                console.log('Username:', values.username);
                console.log('Password:', values.password);
                const response = await authenticate(values.username, values.password);
                console.log('API Response:', response);
                if (response.status === 200) {
                    setErrorMessage('');
                  
                }
                  navigate("/dashboard");
            }
        } catch (error) {
            console.error('API Error:', error);
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div className="registration-form">
            <h2 className="center">Account Sign In</h2>
            {errorMessage && (
                <Alert
                    className="error-message"
                    message={errorMessage}
                    type="error"
                    showIcon
                    closable
                    onClose={() => setErrorMessage('')}
                />
            )}
            <Form form={form} onFinish={handleFormSubmit}>
                <div className="form-item">
                    <p class="lable">User Name*</p>
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: 'Please enter a valid email address' },
                            { type: 'email', message: 'Username must be in email format' },
                        ]}

                    >
                        <Input onChange={handleUsernameChange} />
                    </Form.Item>
                </div>
                <div className="form-item">
                    <p class="lable">Password*</p>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter a password' }]}
                    >
                        <Input.Password onChange={handlePasswordChange} />
                    </Form.Item>
                </div>
                <div className="button-container ">
                    <Form.Item>
                        <Button type="primary" onClick={(e)=>handleFormSubmit()} disabled={!isFormValid} htmlType="submit">
                            Sign In
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );



};

export default LoginForm;
