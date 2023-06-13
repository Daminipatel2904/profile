import React from 'react'
import Section from './common/Section'
import avatar from "../assets/logo.png";

const Testimonials = () => {

    const TESTIMONIALS = [
        {
            id: 1,
            image: avatar,
            name: "Global Future Tourism",
            comment: "We are incredibly pleased with Damini's exceptional work as our website developer. Her meticulous attention to detail, creative approach, and technical expertise have resulted in a stunning website that perfectly captures our brand. Her professionalism and timely delivery made the entire experience smooth and enjoyable. Damini has brought immense talent and creativity to our project, and we are grateful for her contributions.",
        },
    ];
    return (
        <Section title="Testimonials" >

            <div className="max-w-xl flex flex-col gap-2">
                {
                    TESTIMONIALS.map(({ id, image, name, comment }) => (
                        <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
                            <div className="w-1/3">
                                <img src={image} alt={name}
                                    className="w-35 h-35 object-cover object-top pt-2" />
                            </div>
                            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
                                <h3 className="text-xl font-semibold">{name}</h3>
                                <p className="text-sm font-extralight text-justify">{comment}</p>
                            </div>
                        </div>

                    ))}
            </div>
        </Section>
    )
}

export default Testimonials;