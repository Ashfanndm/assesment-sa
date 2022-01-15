import React from 'react';

function Sidebar(props) {
    const unfocusedIcons ={
        marginLeft:"25px",
        marginTop:"35px",
        width: "30px",
    }
    return (
        <div className="create" style={{
            width: "80px",
            height:"600px",
            backgroundColor:"#253244",
            position:"absolute"
        }}>
            <div className="create" style={{
                width: "80px",
                height:"80px",
                backgroundColor:"red",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <img style={unfocusedIcons}
                     src={require('../../assets/Group 537@2x.png')} />
            </div>

            <div className="create" >
                <img style={unfocusedIcons}
                     src={require('../../assets/Group 538@2x.png')} />
            </div>
            <div className="create" >
                <img style={unfocusedIcons}
                     src={require('../../assets/Group 563@2x.png')} />
            </div>
            <div className="create" >
                <img style={unfocusedIcons}
                     src={require('../../assets/Group 549@2x.png')} />
            </div>
            <div className="create" >
                <img style={unfocusedIcons}
                     src={require('../../assets/Group 555@2x.png')} />
            </div>
            <div className="create">
                <img style={{
                    marginLeft:"-10px",
                    marginTop:"95px",
                    width: "100px",
                    height:"100px",
                }} src={require('../../assets/Group 565@3x.png')} />
            </div>


        </div>
    );
}

export default Sidebar;
