import React from "react";
import delivery from "../../Components/exercise2/f-delivery.png";
import coin from "../../Components/exercise2/coin.png";
import chat from "../../Components/exercise2/chat.png";

export default function Guarantee(props) {


    const service_components = [{
        image: `${delivery}`,
        title: "Free Shipping",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est ac sem cursus tristique non non ligula. Nullam ultrices vestibulum dolor nec pretium."
    },

    {
        image: `${coin}`,
        title: "100% Money Back",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est ac sem cursus tristique non non ligula. Nullam ultrices vestibulum dolor nec pretium."
    },

    {
        image: `${chat}`,
        title: "Online Support 24/7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac est ac sem cursus tristique non non ligula. Nullam ultrices vestibulum dolor nec pretium."
    }
    ];

    return (
        <div className="serviceContainer">
            {service_components.map((props, index) => 
                < div className='customer_service' >
                    <img src={props.img} alt={props.title} />
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>

                </div>
            )
            }

        </div >
    );
}