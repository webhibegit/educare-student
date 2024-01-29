import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function SingleCourseHeader() {
   
    return (
        <>
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />

                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}