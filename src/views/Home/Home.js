import React, { useState } from 'react'
import "./Home.css"
import i18n from '../../utils/i18n';


function Home() {

    const usersCount = 35;



    return (
        <div>

            <h1> {i18n("welcomeMessage")}</h1>

            <h2> {i18n("normalMessage")} </h2>

            <h3> {i18n("greetingMessage")} </h3>

            <h4>  {i18n("endMessage")} </h4>

            <select
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}>
                <option value="en">English</option>
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>

            </select>

            <p>
                {i18n("userStateMessage", "<studentCount>", usersCount)}
            </p>


        </div>
    )
}

export default Home