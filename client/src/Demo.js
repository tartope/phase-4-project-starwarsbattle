import React from "react";
import ReactPlayer from "react-player";
import './Demo.css';

function Demo(){

    return (
        <div className="demo">
            <ReactPlayer controls url="https://youtu.be/qinZmNG4X9s"/>
        </div>
    );
}

export default Demo;