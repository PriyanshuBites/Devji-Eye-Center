import React from "react";
import CardDesign from "./cardDesign";
import Slider from "react-slick";
import styled from "styled-components"; // Corrected import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

// Custom Arrow Component for Left Arrow
const PreviousArrow = ({ onClick }) => {
    return (
        <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-100 rounded-full shadow-md p-2 md:left-[-25px]"
            onClick={onClick}
        >
            <MdOutlineKeyboardArrowLeft size={30} />
        </div>
    );
};

// Custom Arrow Component for Right Arrow
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-100 rounded-full shadow-md p-2 md:right-[-25px]"
            onClick={onClick}
        >
            <MdOutlineKeyboardArrowRight size={30} />
        </div>
    );
};

const Cards = () => {
    const cardData = [
        {
            id: 1,
            userName: "N C",
            description: "Aachi se VA he",
            date: "2023-02-22"
        },
        {
            id: 2,
            userName: "Dinesh Thakur",
            description: "An awesome place for having old age cataract surgeries.",
            date: "2023-02-17"
        },
        {
            id: 3,
            userName: "Anru Thakur",
            description: "Good services",
            date: "2023-02-15"
        },
        {
            id: 4,
            userName: "Anru Thakur",
            description: "Good services",
            date: "2023-02-15"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // Arrows are enabled for all screens, including mobile.
                }
            }
        ]
    };

    return (
        <Wrapper>
            <div className="relative flex justify-center mb-12">
                <div className="card w-[100%] p-4 lg:w-[75rem] bg-red-200 md:lg:px-52 lg:my-20">
                    <Slider {...settings}>
                        {cardData.map((card) => (
                            <div className="md:pl-0 w-[]" key={card.id}>
                                <CardDesign data={card} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Wrapper>
    );
};

// Styled component definition
const Wrapper = styled.div`
    .slick-prev,
    .slick-next {
        background-color: #f0f0f0;
        border-radius: 50%;
        z-index: 10;
        &:hover {
            background-color: #ccc;
        }
    }
    .slick-prev {
        left: -40px;
    }
    .slick-next {
        right: -40px;
    }

    .slick-dots li button:before {
        color: #000;
    }
    .slick-dots li.slick-active button:before {
        color: #007bff;
    }

    /* .card {
        width: 100%;
    } */

        
    @media (width: 912px) {

        .card {
            width: 70%;
        }
    }


    @media (max-width: 768px) {
        .slick-prev {
            left: -20px;
        }
        .slick-next {
            right: -20px;
        }
        .card {
            width: 40%;
}
    }


    @media (width: 540px) {

.card {
    width: 80%;
}

    }
    
`;

export default Cards;
