import React from 'react'
import java from "../../public/java.png"
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import css from "../../public/css.jpg"


function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },

        {
            id: 2,
            logo: java,
            name: "Java"
        },
        {
            id: 3,
            logo: javascript,
            name: "Javascript"
        },
        {
            id: 4,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 5,
            logo: css,
            name: "CSS"
        }
    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 m1-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5 '> Portfolio</h1>
                <p className=' font-semibold'>
                    I've more than 2 years of experience in below technologies.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            className=' flex flex-col item-center justify-center border-[2px]  rounded-full md:w-[200px] md:h-[200px]'
                             key={id}
                             >
                            <img
                                src={logo}
                                className='w-[150px] p-1 rounded-full '
                                alt=""
                            />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                            </div>
                           
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Portfolio

