import React from "react";
import SideBarAdmin from "../side-bar/SideBar";
import HeaderAdmin from "../header/Header";

const LayoutAdmin = (props) => {
    return (
        <div>
            <SideBarAdmin />
            <div className="main">
                <HeaderAdmin />
                <div className="breadcrumb">
                    Home / Other Pages / Invoice
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default LayoutAdmin;