import React from 'react';
import { Link } from "react-router-dom";
const SideBarAdmin = () => {
    return (
        <div className="sidenav">
            <div className="p-3" style={{ height: '56px', color: '#fff' }}>
                <b>NEC Admin</b>
            </div>
            <Link to="/">Dashboard</Link>
        </div>
    );
}

export default SideBarAdmin;
