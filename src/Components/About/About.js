import React from 'react'

function About() {
    return (
        <div id="aboutme">
            <section className="about_area section_gap" id="">
    <div className="container">
      <div className="row justify-content-start align-items-center">
        <div className="col-lg-5">
          <div className="about_img">
            <img className="" src="img/about-us.png" alt="" />
          </div>
        </div>

        <div className="offset-lg-1 col-lg-5">
          <div className="main_title text-left">
            <h2>
              let me <br />
              introduce about <br />
              myself
            </h2>
            <p>
              Hi! I am Nidhin P P, a web developer focused on crafting great web experiences.
              Designing and Coding have been my passion since the days I started working with computers
              but I found myself into web development since 2016. I enjoy creating beautifully designed,
              intuitive and functional websites.
            </p>
            <p>
              For over past 5 years, I have worked for some of the best digital agencies and wonderful clients
              to create some extraordinary works. And, I can make this happen for your business as well.
            </p>
            <a className="primary_btn" href="resume/NidhunPP_resume.pdf" target="_new" download=""><span>Download
                CV</span></a>

          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default About
