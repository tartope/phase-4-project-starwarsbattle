import React from "react";
import ReactPlayer from "react-player";
import './Demo.css';

function Demo(){

    return (
        <div className="demo">
            <ReactPlayer controls url="https://youtu.be/d9tNh4ZsW-Y"/>
        </div>
    );
}

export default Demo;