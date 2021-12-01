import React from 'react'

function Works() {
    return (
        <div>
            <section className="about_area section_gap" id="portfolio">
                <div className="container" style={{maxWidth:"900px"}}>
                    <div className="row">    
                        <div className="col-lg-4 col-sm-6">
                            <div className="row justify-content-start align-items-center card-border">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="img-bg" style={{backgroundImage:"url(../img/tools/react.png)"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">CoWin API Integration</h5>
                                        <p className="card-text">Consumed CoWin API and created a web application that can list availiable vaccine slots.</p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="row justify-content-start align-items-center card-border">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="img-bg" style={{backgroundImage:"url(../img/tools/js.png)"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">eCommerce Websites</h5>
                                        <p className="card-text">Designed and developed UI for various attractive eCommerce Websites.</p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="row justify-content-start align-items-center card-border">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="img-bg" style={{backgroundImage:"url(../img/tools/psql.png)"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Buisness Applications</h5>
                                        <p className="card-text">Worked with e-commerce databases to develop functional components.</p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Works
