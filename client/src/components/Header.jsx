import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';

const Header = () => {
    const scrollRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                scrollRef.current.classList.add('sticky')
            } else {
                scrollRef.current.classList.remove('sticky')
            }
        })

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    })
    return (
        <header>
            <div className="header" ref={scrollRef}>
                <form>
                    <input type="text" />
                </form>
                <Navbar />
                <nav>
                    content
                </nav>
            </div>
        </header>
    )
}

export default Header