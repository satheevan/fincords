import React from "react";
import './css/footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <h1>{props.footerContent}</h1>
        </div>
    )
}

export default Footer