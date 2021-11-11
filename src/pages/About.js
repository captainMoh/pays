import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>A propos</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint culpa excepturi, voluptatibus quam aspernatur 
            praesentium illum quidem nostrum officia reiciendis quaerat mollitia consectetur expedita corrupti quis? 
            Culpa hic exercitationem sequi?</p>
        </div>
    );
};

export default About;