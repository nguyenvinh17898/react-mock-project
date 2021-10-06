import { useState } from "react";

import classes from "./Main.module.css";
import Header from './Header';
import Menu from './Menu';
import Orders from './Orders';

const Main =()=>{
    const [isMenu, setIsMenu] = useState(true);

    const switchResMode = ()=>{
        setIsMenu(!isMenu);
    }

    return(
        <div className={classes.main} isMenu={isMenu}>
            <Header switchResMode={switchResMode} />
            {isMenu && <Menu />}
            {!isMenu && <Orders />}
        </div>
    );
};

export default Main;