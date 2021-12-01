import React from 'react'

function Home() {
    return (
        <div>
            <section className="home_banner_area">
    <div className="banner_inner head_banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="banner_content">
              <h3 className="text-uppercase">Hello</h3>
              <h1 className="text-uppercase myName">I am Nidhin P P</h1>
              <h5 className="text-uppercase">senior web developer</h5>
              <div className="d-flex align-items-center">
                <a className="primary_btn" href="#contactme"><span>Hire Me</span></a>
                <a className="primary_btn tr-bg" href="resume/NidhunPP_resume.pdf" target="_new" download=""><span>Get
                    CV</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="home_right_img main_image">
              <img className="" src="img/banner/home-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Home
