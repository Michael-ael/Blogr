import React from 'react'
import Phone from '../images/illustration-phones.svg'

const MainSecond = () => {
    return (
        <div className="second-main">
            <div className="container">
                <div className="grid fex">
                    <div className="left-side">
                        <img src={Phone} alt=""/>
                    </div>

                    <div className="right-side">
                        <h4> State of the Art Infrastructure </h4>

                        <p> 
                            With reliability and speed in mind, worldwide data centers provide the
                            backbone for ultra-fast connectivity. This ensures your site will load
                            instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSecond
