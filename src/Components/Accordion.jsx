import React from 'react';
import "./Accordion.css"
import { useState } from 'react'

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i)  => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }



    return (
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                            <div className='title' onClick={() => toggle(i)}>
                                <h2>{item.title}</h2>
                                <span>{selected == i ? '-' : '+'}</span>
                            </div>
                            <div className={selected == i ? 'content show' : 'content'}>{item.description}
                            </div>
                    </div>
                ))}
            </div>
        
        
        
        </div>
    )
}


const data = [

    {title: "About Rankify",
    description: "Welcome to Rankify, the ultimate destination for insightful reviews and meaningful interactions between consumers and businesses. At Rankify, we believe in the power of user-generated content to shape informed decisions and foster stronger connections within communities. Join Rankify today and be part of a vibrant community where your opinions matter and your feedback drives positive change!",
    },

    {title: "Our Mission",
    description: "Rankify is dedicated to providing a platform where users can share their authentic experiences with products and services while empowering businesses to engage directly with their customers. Our mission is to facilitate transparent communication, promote accountability, and enhance the overall consumer experience. Rankify is dedicated to providing a platform where users can share their authentic experiences with products and services while empowering businesses to engage directly with their customers. Our mission is to facilitate transparent communication, promote accountability, and enhance the overall consumer experience.",
    },

    {title: "Careers",
    description: "Are you passionate about revolutionizing the way people interact with businesses and make informed decisions? Do you thrive in a dynamic, innovative environment where your ideas can shape the future of an industry? If so, we invite you to explore career opportunities at Rankify. If you're ready to join a dynamic team that is passionate about making a difference, we want to hear from you! Explore our current openings and submit your application today to embark on an exciting journey with Rankify. Let's shape the future of consumer reviews together!",
    },
    {title: "Policy Statement",
    description: "At Rankify, we take the integrity of our platform seriously. We have stringent guidelines and protocols in place to ensure a fair and respectful environment for all users. Any violation of our community standards, including but not limited to fraudulent reviews, hate speech, or inappropriate conduct, will result in appropriate sanctions, including the removal of content, suspension, or termination of accounts. We are committed to maintaining the highest ethical standards and upholding the trust of our users.",
    },
]


export default Accordion