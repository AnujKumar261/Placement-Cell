import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer-main">
            <div className="row">
              <div className="col-five tab-full footer-about">
                <h4 className="h05">T&P Cell, VGU JAIPUR</h4>
                <p>
                  Learn the World
                  <br /> Experience the World
                  <br /> Change the World
                </p>
              </div>
              <div className="col-three tab-full footer-social">
                <h4 className="h05">Connect with us.</h4>
                <ul className="list-links">
                  <li>
                    <a href="tel:+918875791777">Phone</a>
                  </li>
                  <li>
                    <a href="mailto:tpo@vgu.ac.in">Email</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/school/vgu/posts/?feedView=all/" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/JaipurVgu" rel="noopener noreferrer">Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="col-four tab-full footer-subscribe end">
                <h4 className="h05">Quick Links</h4>
                <ul className="list-links">
                  <a
                    className=""
                    href="./docs/VGU_Campus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Our Brochure"
                  >
                    <i className="fa fa-download" style={{ "font-size": "1.15em" }}></i> &nbsp; Brochure
                  </a>
                  <br />
                  <a
                    className=""
                    href="./docs/Placement Details.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Placement Details"
                  >
                    <i className="fa fa-download" style={{ "font-size": "1.15em" }}></i> &nbsp; Placement Details
                  </a>
                  <li>
                    <a href="http://www.vgu.ac.in/" target="_blank" rel="noopener noreferrer">VGU JAIPUR</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-twelve">
                <div className="copyright">
                  <span>© 2026 Vivekananda Global University, With love from
                    <a href="BASE_URL"> T&P Cell, VGU JAIPUR</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="go-top" style={{ "display": "block" }}>
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="icon-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
