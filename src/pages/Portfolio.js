import React from 'react';
import ProjectItem from '../components/ProjectItem';
import PopcornPeeksModal from '../components/PopcornPeeksModal';
import ResumeBuilderModal from '../components/ResumeBuilderModal.jsx';
import EcommerceProjectModal from '../components/EcommerceModal';

function Portfolio() {
    return (

        <section id="projects">
            <div className="container wow fadeInUp">
                <div className="row">
                    <div className="col-md-12">
                        <h3 data-aos="zoom-in" className="section-title">Projects</h3>
                        <div className="section-title-divider"></div>
                        <p className="section-description">Full Stack</p>
                    </div>
                </div>

                <div className="row">
                    <ProjectItem
                        title="Popcorn Peek"
                        liveLink="https://entertainment-app-1.onrender.com/"
                        githubLink="https://github.com/mdglankush65/Entertainment-App"
                        modalTarget="exampleModal3"
                        image='popcorn'
                        isMainProject={true}
                    />
                    <ProjectItem
                        title="E-Commerce"
                        liveLink="https://e-commerce-virid-two.vercel.app/"
                        githubLink="https://github.com/mdglankush65/e-commerce"
                        modalTarget="ecommerce"
                        image='ecommerce'
                        isMainProject={false}
                    />
                    <ProjectItem
                        title="Crypto Dashboard"
                        liveLink="https://crypto-dash-board-inky.vercel.app/"
                        githubLink="https://github.com/mdglankush65/CryptoDashBoard"
                        modalTarget="exampleModal"
                        image='crypto'
                        isMainProject={false}
                    />
                </div>
            </div>
            <PopcornPeeksModal />
            <EcommerceProjectModal />
            <ResumeBuilderModal />
        </section>
    );
}
export default Portfolio;