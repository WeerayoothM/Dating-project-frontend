import React, { useState } from 'react'
import LoginModal from '../components/LoginModal';
import Navbar from '../components/Navbar';

function Home() {
    const [visibleLoginForm, setVisibleLoginForm] = useState(false);

    const showModal = () => {
        setVisibleLoginForm(true);
    };
    return (
        <>
            <div class="background-hero-page vignette">
                <Navbar showModal={showModal} />
                <section className="home-container">
                    <div className="home-content">
                        <h1 className="home-title">Find the right person</h1>
                        <button className="btn-5" onClick={showModal}>GET STARTED</button>
                        <LoginModal visible={visibleLoginForm} setVisible={setVisibleLoginForm} showModal={showModal} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
