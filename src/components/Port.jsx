import React from 'react'
import Section from './common/Section';
import { FaLink } from "react-icons/fa";
import logo from "../assets/logo.png";



const Port = () => {

    const projects = [
        {
            id: 1,
            image: logo,
            title: "Global Future Tourism",
            link: "https://www.globalfutureservice.com/blank-page",
        },

    ];

    return (
        <Section title="Portfolio" subtitle="This is my portfolio showcasing completed projects, while I continue to work on other projects in progress.">

            <div className="grid  md:justify-center items-center">
                {
                    projects.map(({ id, image, title, link }) => (

                        <div key={id}
                            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                            <img src={image} alt={title} className="w-2/3" />
                            <div className="w-1/3 flex flex-col items-center justify-evenly pt-1">
                                <h2>{title}</h2>
                                <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={link} target="_blank" rel="noopener noreferrer">
                                    <FaLink />
                                </a>
                            </div>
                        </div>
                    ))}
            </div>

        </Section>
    );
}

export default Port;