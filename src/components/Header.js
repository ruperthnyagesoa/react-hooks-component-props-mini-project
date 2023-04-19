import React from "react";

function Header ({name}){ // passing name as props
    return (
        <header>
            <h1>{name}</h1>  
        </header>
    );
}

export default Header;