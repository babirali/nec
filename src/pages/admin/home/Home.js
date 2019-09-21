import React from "react";
import LayoutAdmin from "../../../components/admin/layout/Layout";
const Home = (props) => {
    return (
        <LayoutAdmin>
            <p>This sidebar is of full height (100%) and always shown.</p>
            <p>Scroll down the page to see the result.</p>
            <button className="btn btn-primary">Submit</button>
        </LayoutAdmin>
    );
}

export default Home;