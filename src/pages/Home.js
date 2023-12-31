import React from 'react';
import {Image} from "react-bootstrap";
import homeImg from '../assets/imgs/home.png'
const Home = () => {
    return (
        <div className="home">
            {/* Add your content here */}
            <h1>Welcome to Our E-Commerce Store</h1>
            <Image src={homeImg} alt="Product Image" width={"100%"} height={500} />
            <p>Explore our wide range of products.</p>
            <a href="/products">Shop Now</a>
        </div>
    );
}

export default Home;
