import React from "react";
import {TopHeader} from "./Dashboard/topHeader";
import StaffDetails from "./Dashboard/StaffDetails";

export const Home = () => {
    return (
        <div style={{
            height: "600px",
            backgroundColor: "#f3f2f2",
            position: "relative"
        }}>
            <TopHeader/>
            <div style={{
                width: "250px",
                height: "450px",
                backgroundColor: "white",
                marginLeft: "120px",
                marginTop: "120px",
                position: "absolute",
                padding: "15px",
                borderRadius: "10px"
            }}>
                <StaffDetails/>

            </div>

            <div style={{
                width: "500px",
                height: "150px",
                backgroundColor: "white",
                marginLeft: "400px",
                marginTop: "120px",
                position: "absolute",
                padding: "15px",
                borderRadius: "10px"
            }}>
                <img style={{
                    width: "470px",
                    height: "120px",
                }}
                     src={require('../assets/80-cool-grey.png')}/>
            </div>


            <div style={{
                width: "500px",
                height: "290px",
                backgroundColor: "white",
                marginLeft: "400px",
                marginTop: "280px",
                position: "absolute",
                padding: "15px",
                borderRadius: "10px"
            }}>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    left: "0",
                    marginLeft: "20px",
                    color: "black"
                }}>
                    <h5>History</h5>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "20px",
                    color: "#e2e2e2"
                }}>
                    <h5>Alert</h5>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "70px",
                    color: "#e2e2e2",
                }}>
                    <h5>Message</h5>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "160px",
                    color: "#e2e2e2"
                }}>
                    <h5>Location</h5>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "250px",
                    color: "red"
                }}>
                    <h5>All</h5>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "290px",
                    color: "black"
                }}>
                    <p>(Jaison Brunette)</p>
                </div>
                <hr style={{marginTop: "40px"}}/>
                <div style={{marginBottom: "50px"}}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <p>Date</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black",
                    }}>
                        <p>Alert View</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <p>Time</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "black"
                    }}>
                        <p>Location</p>
                    </div>
                </div>
                <div style={{
                    marginBottom: "10px", border: "solid", height: "35px"
                    , borderRadius: "6px", borderColor: "#b8b6b6"
                }}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <p>12/may/2020</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black"
                    }}>
                        <p>on</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <p>03:34:04pm</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "dodgerblue"
                    }}>
                        <p>Live Map</p>
                    </div>
                </div>
                <div style={{
                    marginBottom: "10px", border: "solid", height: "35px"
                    , borderRadius: "6px", borderColor: "#b8b6b6"
                }}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <p>12/may/2020</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black"
                    }}>
                        <p>off</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <p>03:34:04pm</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "dodgerblue"
                    }}>
                        <p>Live Map</p>
                    </div>
                </div>
                <div style={{
                    marginBottom: "10px", border: "solid", height: "35px"
                    , borderRadius: "6px", borderColor: "#b8b6b6"
                }}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <p>12/may/2020</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black"
                    }}>
                        <p>on</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <p>03:34:04pm</p>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "dodgerblue"
                    }}>
                        <p>Live Map</p>
                    </div>
                </div>

            </div>

        </div>

    );
}
