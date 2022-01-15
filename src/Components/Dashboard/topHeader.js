import Sidebar from "../Dashboard/Sidebar";
import React from "react";

export const TopHeader = () => {
    return (
        <div>
            <div style={{
                marginLeft: "120px",
                position: "absolute",
                marginTop: "25px"

            }}>
                <h1 style={{width:"800px"}}>Monitor</h1>
                <hr/>
            </div>
            <h3 style={{
                display: "flex",
                position: "absolute",
                padding: "5px",
                marginRight:"120px",
                marginTop:"20px",
                borderRadius:"5px",
                backgroundColor: "white",
                right: "0",
                border:"solid",
                borderColor:"#b8b6b6"
            }}>Message</h3>
            <img style={{
                display: "flex",
                position: "absolute",
                padding: "5px",
                right: "0"
            }}
                 src={require('../../assets/Group 323.png')} />

            <Sidebar/>
        </div>

    );
}
