import React from "react";
import {TopHeader} from "./Dashboard/topHeader";

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

                <div style={{
                    display: "flex",
                    position: "absolute",
                    left: "0",
                    marginLeft: "20px",
                    color: "red"
                }}>
                    <h3>Staff</h3>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "20px",
                    color: "#e2e2e2"
                }}>
                    <h3>Employee</h3>
                </div>
                <hr style={{marginTop: "40px"}}/>

                <div style={{
                    width: "220px", height: "40px", border: "solid",
                    borderRadius: "5px", padding: "5px", borderColor: "#e2e2e2",
                    marginBottom: "10px"
                }}>
                    <div style={{
                        width: "20px", height: "20px", background: "pink",
                        borderRadius: "20px", position: "absolute"
                    }}>
                        <p style={{
                            marginLeft: "7px", color: "white",
                            marginTop: "-3px"
                        }}>J</p>
                    </div>
                    <p style={{marginLeft: "35px"}}>Jaison Burnatte</p>
                    <img style={{
                        position: "absolute",
                        right: "0",
                        marginRight: "25px",
                        marginTop: "-35px"
                    }}
                         src={require('../assets/Group 566.png')}/>
                </div>

                <div style={{
                    width: "220px", height: "40px", border: "solid",
                    borderRadius: "5px", padding: "5px", borderColor: "#e2e2e2",
                    marginBottom: "10px"
                }}>
                    <div style={{
                        width: "20px", height: "20px", background: "purple",
                        borderRadius: "20px", position: "absolute"
                    }}>
                        <p style={{
                            marginLeft: "5px", color: "white",
                            marginTop: "-3px"
                        }}>A</p>
                    </div>
                    <p style={{marginLeft: "35px"}}>Ali Akbhar</p>
                    <img style={{
                        position: "absolute",
                        right: "0",
                        marginRight: "25px",
                        marginTop: "-35px"
                    }}
                         src={require('../assets/Group 566.png')}/>
                </div>

                <div style={{
                    width: "220px", height: "40px", border: "solid",
                    borderRadius: "5px", padding: "5px", borderColor: "#e2e2e2",
                    marginBottom: "10px"
                }}>
                    <div style={{
                        width: "20px", height: "20px", background: "dodgerblue",
                        borderRadius: "20px", position: "absolute"
                    }}>
                        <p style={{
                            marginLeft: "5px", color: "white",
                            marginTop: "-3px"
                        }}>C</p>
                    </div>
                    <p style={{marginLeft: "35px"}}>Clifford Shan</p>
                    <img style={{
                        position: "absolute",
                        right: "0",
                        marginRight: "25px",
                        marginTop: "-35px"
                    }}
                         src={require('../assets/Group 566.png')}/>
                </div>

                <div style={{
                    width: "220px", height: "40px", border: "solid",
                    borderRadius: "5px", padding: "5px", borderColor: "#e2e2e2"
                }}>
                    <div style={{
                        width: "20px", height: "20px", background: "lightgreen",
                        borderRadius: "20px", position: "absolute"
                    }}>
                        <p style={{
                            marginLeft: "3px", color: "white",
                            marginTop: "-3px"
                        }}>M</p>
                    </div>
                    <p style={{marginLeft: "35px"}}>Mickey Mouse</p>
                    <img style={{
                        position: "absolute",
                        right: "0",
                        marginRight: "25px",
                        marginTop: "-35px"
                    }}
                         src={require('../assets/Group 566.png')}/>
                </div>
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
                    <h7>Alert</h7>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "70px",
                    color: "#e2e2e2",
                }}>
                    <h7>Message</h7>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "160px",
                    color: "#e2e2e2"
                }}>
                    <h7>Location</h7>
                </div>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    marginRight: "250px",
                    color: "red"
                }}>
                    <h7>All</h7>
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
                <div style={{marginBottom:"50px"}}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <h7>Date</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black",
                    }}>
                        <h7>Alert View</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <h7>Time</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "black"
                    }}>
                        <h7>Location</h7>
                    </div>
                </div>
                <div style={{marginBottom:"10px", border:"solid", height:"35px"
                    , borderRadius:"6px", borderColor:"#b8b6b6"}}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <h7>12/may/2020</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black"
                    }}>
                        <h7>on</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <h7>03:34:04pm</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "dodgerblue"
                    }}>
                        <h7>Live Map</h7>
                    </div>
                </div>
                <div style={{marginBottom:"10px", border:"solid", height:"35px"
                    , borderRadius:"6px", borderColor:"#b8b6b6"}}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <h7>12/may/2020</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black"
                    }}>
                        <h7>off</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <h7>03:34:04pm</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "dodgerblue"
                    }}>
                        <h7>Live Map</h7>
                    </div>
                </div>
                <div style={{marginBottom:"10px", border:"solid", height:"35px"
                    , borderRadius:"6px", borderColor:"#b8b6b6"}}>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "50px",
                        color: "black"
                    }}>
                        <h7>12/may/2020</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "160px",
                        color: "black"
                    }}>
                        <h7>on</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "260px",
                        color: "black"
                    }}>
                        <h7>03:34:04pm</h7>
                    </div>
                    <div style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        marginLeft: "360px",
                        color: "dodgerblue"
                    }}>
                        <h7>Live Map</h7>
                    </div>
                </div>

            </div>

        </div>

    );
}
