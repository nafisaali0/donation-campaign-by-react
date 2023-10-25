import PropTypes from 'prop-types';
import banner from  './banner.jpg'
import '../Header/header.css'
import { useState } from "react";


const Banner = ({ handleSearch }) => {

    const [getInputText, setInputText] = useState('')
    
    // get Input value
    const handleInput = (event) => {
        setInputText(event.target.value)
    };
    // get input value by search button click
    const handleSearchButton = () => {
        handleSearch(getInputText)
    };

    return (
        <div className="hero"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat", backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",  
            }}>
            <div className="hero-overlay  bg-[#FFFFFFF2] opacity-95"></div>
            <div className="mb-12">
                <div className="hero h-[500px] bg-white-200">
                    <div className="hero-content text-center">
                        <div>
                            <h1 className="text-lg font-bold md:text-2xl lg:text-5xl">I Grow By Helping People In Need</h1>
                            <div className="search justify-center items-center">
                                <input type="text" placeholder="Category Name" name="getInputText" onChange={handleInput} className="searchTerm" />
                                <button onClick={handleSearchButton} className="searchButton">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};


Banner.propTypes = {
    handleSearch: PropTypes.func
};
export default Banner;




