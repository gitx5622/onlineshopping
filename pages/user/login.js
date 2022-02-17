import React, { useState, useReducer, useEffect } from 'react';
import { Button, Divider, Panel, Modal, toaster, Notification } from "rsuite";
import Navbar from "../../components/navbar";
import Brand from "../../assets/brand.png";
import Image from "next/image";
import { loginUser } from "../../state/actions/userLoginAction";
import { useDispatch } from "react-redux";
import { initialUserState, userReducer } from "../../state/reducers/userReducer";
import { useRouter } from "next/router";

const Login = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loginState, setLoginState] = useState(true);
    const [loginCredentials, setLoginCredentials] = useState({
        username: "",
        password: "",
    })

    const router = useRouter();

    const [loginUserState, dispatchLoginUser] = useReducer(
        userReducer,
        initialUserState
    );

    const handleLoginChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginCredentials(credentials => ({
            ...credentials,
            [name]: value
        }))
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const bodyData = {
            username: loginCredentials.username,
            password: loginCredentials.password
        }
        if (bodyData.username !== "" && bodyData.password !== "") {
            loginUser(dispatchLoginUser, bodyData).then(response => {
                if (response.data.length) toaster.push(message, 'topStart')
            })
        }
    }
    useEffect(() => {
        if (localStorage.token && JSON.parse(localStorage.token)) {
            router.push('/')
        }
    }, [router]);

    const message = (
        <Notification type='success' header="success" closable>
            You have successfully logged in.
        </Notification>
    );

    if (loginUserState.isSuccess) {
        router.push('/')
    }
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", width: "70%", margin: "auto", height: "80vh", background: "whitesmoke" }}>
                <Panel shaded style={{ background: "white", height: "80vh", width: "50%", paddingTop: "-10px" }}>
                    {loginState && (
                        <div>
                            <center><h3>SIGN IN</h3><br />
                                <h5>Welcome back!</h5>
                            </center>
                            <p style={{ paddingLeft: "20px" }}>
                                <strong>For test purposes:</strong>
                                <br />Username: <span style={{ color: '#3498FF' }}>donero</span>
                                <br />Password: <span style={{ color: '#3498FF' }}>ewedon</span></p>
                            <form
                                onSubmit={handleLoginSubmit}
                                style={{ display: "flex", flexDirection: 'column', padding: "20px", paddingTop: "20px", lineHeight: 2.5 }}>
                                <label>Username</label>
                                <input
                                    name="username"
                                    value={loginCredentials.username}
                                    type="text"
                                    onChange={handleLoginChange}
                                    style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                <label>Password</label>
                                <input
                                    name="password"
                                    value={loginCredentials.password}
                                    type="password"
                                    onChange={handleLoginChange}
                                    style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                <Divider />
                                <h6>Don&apos;t have an ONLINE SHOPPING account?
                                    <span style={{ color: "#3498FF" }}>Register here</span>
                                </h6><br />
                                <Button
                                    type="submit"
                                    color="orange"
                                    appearance="primary"
                                    loading={loginUserState.isLoading}>
                                    LOGIN
                                </Button>
                            </form>
                        </div>
                    )}
                    {!loginState && (
                        <div>
                            <center><h3>USER REGISTRATION</h3><br /></center>
                            <form style={{ display: "flex", flexDirection: 'column', padding: "20px", paddingTop: "20px", lineHeight: 2.5 }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <label>First Name</label>
                                        <input style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <input style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <label>Username</label>
                                        <input style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <input style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px" }}>
                                    <div>
                                        <label>Password</label>
                                        <input style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                    </div>
                                    <div>
                                        <label>Phone</label>
                                        <input style={{ border: "1px solid #4b658433", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div style={{ paddingBottom: "10px" }}>
                                    <Button onClick={handleOpen}>Set Address</Button>
                                </div>
                                <h6>Already have an ONLINE SHOPPING account? <span style={{ color: "#3498FF" }}>Login here</span></h6><br />
                                <Button disabled color="orange" appearance="primary">REGISTER</Button>
                            </form>
                            <Modal size="xs" open={open} onClose={handleClose}>
                                <Modal.Header>
                                    <Modal.Title>Set User Address</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div style={{ display: "flex", flexDirection: "column", margin: "auto", width: "90%" }}>
                                        <input
                                            style={{ border: "1px solid #4b658433", borderRadius: "5px", marginBottom: "15px", height: "40px" }}
                                            placeholder="City" />
                                        <input
                                            style={{ border: "1px solid #4b658433", borderRadius: "5px", marginBottom: "15px", height: "40px" }}
                                            placeholder="Street" />
                                        <input
                                            style={{ border: "1px solid #4b658433", borderRadius: "5px", marginBottom: "15px", height: "40px" }}
                                            placeholder="Street Number" />
                                        <input
                                            style={{ border: "1px solid #4b658433", borderRadius: "5px", marginBottom: "15px", height: "40px" }}
                                            placeholder="Zip Code" />
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handleClose} appearance="primary">
                                        Ok
                                    </Button>
                                    <Button onClick={handleClose} appearance="subtle">
                                        Cancel
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )}
                </Panel>
                <Panel style={{ width: "50%", height: "80vh", }}>
                    <center>
                        <h3>ONLINE SHOPPING KENYA</h3><br />
                        <Image src={Brand} width={200} height={200} alt="logo" />
                        <Divider />
                        <h3>Home of products
                            where shopping is simplified</h3><br />
                        {loginState ?
                            <Button appearance="ghost" onClick={() => setLoginState(false)}>Create an Account</Button>
                            :
                            <Button appearance="ghost" onClick={() => setLoginState(true)}>Login here</Button>
                        }
                    </center>
                </Panel>
            </div>
        </div>
    );
};

export default Login;