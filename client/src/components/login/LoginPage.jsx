import * as React from "react";
import * as GeoPattern from "geopattern";
import LoginForm from "./LoginForm";
const styles = require("./LoginPage.less");

const pattern = GeoPattern.generate('olx');

const bgStyle = {backgroundImage: pattern.toDataUrl()};

const LoginPage = () => <div className={styles.loginBg + " " + styles.verticalContainer} style={bgStyle}>
    <LoginForm onSubmit={handleSubmit}/>
</div>;

const handleSubmit = (obj) => {
    console.log("handleSubmit", obj)
};

export default LoginPage;