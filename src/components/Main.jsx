import React from 'react'
import { ReactComponent as Side } from '../images/illustration-editor-desktop.svg'
import illustration from '../images/illustration-editor-desktop.svg'
import illustrationmobile from '../images/illustration-editor-mobile.svg'

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <h2> Designed for the future </h2>

                <div className="grid flex">
                   <div className="desktop">

                        <div className="left-main">
                            <h4>
                                Introducing an extensible editor
                            </h4>

                            <p>
                            Blogr features an exceedingly intuitive interface which lets you focus
                            onone thing: creating content. The editor supports management of
                            multiple blogs and allows easy manipulation of embreds such as images,
                            videos, and Markdown. Extensibly with plugins and themes provide
                            easy ways to add functionality or change the looks of a blog. 
                            </p>

                            <br /> 

                            <h4>
                                Robust content management
                            </h4>

                                <p>
                                    Flexible content management enables users to easily move through
                                    posts. Increase the usability of your blog by adding customized
                                    categories, sections, format, or flow. With this functionality, you're in full control.
                                </p>
                        </div>

                        <div className="right-main">
                            <img src={illustration} alt=""/>
                        </div>
                  
                   </div>


                   <div className="mobile">
                       <div className="right-main">
                            <img src={illustrationmobile} alt=""/>
                        </div>

                        <div className="left-main">
                            <h4>
                                Introducing an extensible editor
                            </h4>

                            <p>
                            Blogr features an exceedingly intuitive interface which lets you focus
                            onone thing: creating content. The editor supports management of
                            multiple blogs and allows easy manipulation of embreds such as images,
                            videos, and Markdown. Extensibly with plugins and themes provide
                            easy ways to add functionality or change the looks of a blog. 
                            </p>

                            <br /> 

                            <h4>
                                Robust content management
                            </h4>

                                <p>
                                    Flexible content management enables users to easily move through
                                    posts. Increase the usability of your blog by adding customized
                                    categories, sections, format, or flow. With this functionality, you're in full control.
                                </p>

                        
                        </div>
                   </div>

                </div>
            </div>
        </div>
    )
}

export default Main
