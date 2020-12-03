import React, { useState } from 'react'
import LoginModal from '../components/Login/LoginModal';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../Images/Untitled-2.svg'

function Home(props) {
    const [visibleLoginForm, setVisibleLoginForm] = useState(false);

    const showModal = () => {
        setVisibleLoginForm(true);
    };

    return (
        <>
            {/* {/* backgroundImage: `url(${background})`, backgroundImage: `url(${background})`,*/}
            <div class="background-hero-page" style={{ backgroundColor: '#121a23', backgroundPosition: 'center' }} >
                <Navbar showModal={showModal} />
                <section className="home-container" >
                    <div ><img className='logo-image' src={Logo} alt="logo" /></div>
                    <div className="home-content" >
                        <h1 data-aos='slide-right' data-aos-delay="50" data-aos-duration="900" className="home-title">Find the right person</h1>
                        <div data-aos='slide-up' data-aos-delay="50" className="started-btn" ><button className="btn-5" onClick={showModal}>GET STARTED</button></div>
                        <LoginModal setRole={props.setRole} visible={visibleLoginForm} setVisible={setVisibleLoginForm} showModal={showModal} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
