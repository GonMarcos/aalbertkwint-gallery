import React from "react"
import './layout/Section.css'

function Section(props) {

    return (
        <section className="Section ">
            <h2>{props.title}</h2>
            <div className="images-container" id="images-container">
                {props.children}
            </div>
        </section>
    )
}

export default Section