import React from 'react'
// import Section from './common/Section';


const Skills = () => {


    const SKILL = [
        "<> Html5",
        "<> Css3",
        "<> Javascript",
        "<> ReactJS",
        "<> Tailwindcss",
        "<> Bootstrap",
        "<> Php"
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className='text-3xl lg:text-5xl'>Skills</h3>
            <div className="rounded-lg mt-1 p-1 ">
                {SKILL.map((text, index) => (
                    <p
                        key={index}
                        className={index % 2 === 0 ? 'bg-blue-500  mt-7 pd-3 text-white rounded-lg text-center w-48 ' : 'bg-red-500 text-white mt-5 pd-3 rounded-lg text-center '}
                    >
                        {text}
                    </p>
                ))}
            </div>

        </div>



    );
}

export default Skills