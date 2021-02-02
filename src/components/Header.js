import React, { useState, useEffect } from 'react';
import '../css/header-effect.css'

function HeaderEffect() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 800);
        });
    }, []);

    return(
        <header role="banner" className={ scroll ? "banner-scroll" : "banner" }>
            <p>Header</p>
        </header>
    )
}

export default HeaderEffect;