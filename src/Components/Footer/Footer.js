import React from 'react'

function Footer() {
    return (
        <div id="footer">
            <footer className="footer_area section_gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer_top flex-column">
                                <div className="footer_logo">
                                    <h4>Follow Me</h4>
                                </div>
                                <div className="footer_social">
                                    <a href="https://www.linkedin.com/in/nidhin-p-p-456214b9/"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/nedhinpp"><i className="fa fa-github"></i></a>
                                    <a href="https://www.facebook.com/nedhinpp/"><i className="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/Nidhin40243136"><i className="fa fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_bottom justify-content-center">
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
