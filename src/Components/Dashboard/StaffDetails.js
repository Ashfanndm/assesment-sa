import React, {useEffect, useState} from 'react';
import axios from "axios";

function StaffDetails(props) {
    const [userInformation, setUserInformation] = useState([])

    useEffect(function () {
        axios.get("http://apps.avantrio.xyz:8010/api/users", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user-info")}`
            }
        })
            .then((res) => {
                setUserInformation(res.data)
                // console.log(userInformation);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <div style={{
                display: "flex",
                position: "absolute",
                left: "0",
                marginTop: "-40px",
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
                marginTop: "-40px",
                color: "#e2e2e2"
            }}>
                <h3>Employee</h3>
            </div>
            <hr style={{marginTop: "40px"}}/>

            <div>
                {userInformation.map((data) => (
                    <div key={data.key} style={{
                        width: "220px", height: "40px", border: "solid",
                        borderRadius: "5px", padding: "5px", borderColor: "#e2e2e2",
                        marginBottom: "10px"
                    }}>
                        <div style={{
                            width: "25px", height: "25px", background: "purple",
                            borderRadius: "20px", position: "absolute"
                        }}>
                            <p style={{
                                marginLeft: "7px", color: "white",
                                marginTop: "-1px"
                            }}>{data.name.charAt(0)}</p>
                        </div>
                        <p style={{marginLeft: "35px"}}>{data.name}</p>
                        <img style={{
                            position: "absolute",
                            right: "0",
                            marginRight: "25px",
                            marginTop: "-35px"
                        }}
                             src={require('../../assets/Group 566.png')}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaffDetails;
