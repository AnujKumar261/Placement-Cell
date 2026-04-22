import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <section id="about">

        <div className="row about-wrap">
            <div className="col-full">

                {/* <!-- <div className="about-profile-bg"></div> --> */}

                <div className="intro">
                    <h3 className="animate-this fadeInUp animated">About Us</h3>
                    <p className="lead animate-this">
                        <span>Vivekananda Global University Jaipur,</span>  also known as <span>VGU</span>, is a multi-disciplinary, private university located in Jaipur, India. Accredited by National Assessment and Accreditation Council (NAAC) with an ‘A+’ grade.

                        Vivekananda Global University offers over 90+ courses across various fields such as Engineering, Management, Science, Mass Communication and Media, Design, Hotel Management and Pharmacy among various others.
                        
                        <span> Industry partners</span> and <span> recruiters</span> include <span>Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Reliance, Salesforce, and Wipro (TAKE Solutions)</span>.
                        
                        
                    </p>
                    <div className='onesignal-customlink-container'></div>
                </div>

            </div>
           
        </div>
     

    </section>
    )
  }
}
