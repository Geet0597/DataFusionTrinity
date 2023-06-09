import React, { useState } from "react";

import './Layout.css';
import NavDrawer from "../components/CommonComponents/Drawer/Drawer";

function Layout({ children }: { children: React.ReactNode }) {
    const [drawerState, setDrawerState] = useState(true);

    return (
        <div className="appConatiner">
            <div>
                <NavDrawer drawerState={drawerState} setDrawerState={(value: boolean) => setDrawerState(value)} />
            </div>
            <div className='childContainer'>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default Layout;
