import * as React from 'react';
import "./BasicComponent.css";

export const BasicComponent : React.SFC = () => (
    <div className="basic-container">
        <h1>Home</h1>

        <p>This is a basic stateless component</p>
    </div>
)

export default BasicComponent;