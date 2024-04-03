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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus integer. Nulla aliquet enim tortor at auctor urna nunc. At imperdiet dui accumsan sit amet nulla facilisi morbi. Sed elementum tempus egestas sed sed risus. Praesent elementum facilisis leo vel fringilla est. Faucibus purus in massa tempor nec. Nunc faucibus a pellentesque sit. Tincidunt vitae semper quis lectus. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Non sodales neque sodales ut etiam sit. Odio morbi quis commodo odio. Odio tempor orci dapibus ultrices in iaculis. Sit amet est placerat in. Vitae proin sagittis nisl rhoncus mattis. Leo duis ut diam quam nulla porttitor massa id. Rutrum quisque non tellus orci ac auctor augue mauris.",
    },

    {title: "Careers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus integer. Nulla aliquet enim tortor at auctor urna nunc. At imperdiet dui accumsan sit amet nulla facilisi morbi. Sed elementum tempus egestas sed sed risus. Praesent elementum facilisis leo vel fringilla est. Faucibus purus in massa tempor nec. Nunc faucibus a pellentesque sit. Tincidunt vitae semper quis lectus. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Non sodales neque sodales ut etiam sit. Odio morbi quis commodo odio. Odio tempor orci dapibus ultrices in iaculis. Sit amet est placerat in. Vitae proin sagittis nisl rhoncus mattis. Leo duis ut diam quam nulla porttitor massa id. Rutrum quisque non tellus orci ac auctor augue mauris.",
    },

    {title: "Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus integer. Nulla aliquet enim tortor at auctor urna nunc. At imperdiet dui accumsan sit amet nulla facilisi morbi. Sed elementum tempus egestas sed sed risus. Praesent elementum facilisis leo vel fringilla est. Faucibus purus in massa tempor nec. Nunc faucibus a pellentesque sit. Tincidunt vitae semper quis lectus. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Non sodales neque sodales ut etiam sit. Odio morbi quis commodo odio. Odio tempor orci dapibus ultrices in iaculis. Sit amet est placerat in. Vitae proin sagittis nisl rhoncus mattis. Leo duis ut diam quam nulla porttitor massa id. Rutrum quisque non tellus orci ac auctor augue mauris.",
    },
]


export default Accordion