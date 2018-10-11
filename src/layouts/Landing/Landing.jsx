import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ScriptInjector } from "../../utils/scriptInjector";

//import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
//import "../../assets/vendor/fontawesome-free/css/all.min.css";
//import "../../assets/vendor/magnific-popup/magnific-popup.css";
//import "../../assets/css/freelancer.css";

class Landing extends Component {
  componentWillMount() {
    ScriptInjector();
  }

  render() {
    return (
      <div id="page-top">
        <Helmet>
          <link
            href="/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/vendor/fontawesome-free/css/all.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/vendor/magnific-popup/magnific-popup.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/css/freelancer.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
            rel="stylesheet"
            type="text/css"
          />
        </Helmet>

        {/* Navigation */}
        <nav
          className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Senoir Project
            </a>
            <button
              className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#portfolio"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="/dashboard"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="masthead bg-primary-opaque text-white text-center">
          <div className="container">
            <img
              className="img-fluid mb-5 d-block mx-auto"
              src="img/logo.png"
              alt=""
            />
            <h1 className="text-uppercase mb-0">Mobile Health Platform</h1>
            <hr className="star-light" />
            <h2 className="font-weight-light mb-0">
              Mark Sterling - Dias Issa - Askar Kossymzhan - Raiymbek Mustazhapov
            </h2>
            <video autoPlay muted loop id="myVideo">
             <source src="bg.mp4" type="video/mp4" />
            </video>
          </div>
        </header>

        {/* Portfolio */}
        <section className="portfolio" id="portfolio">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">
              Features
            </h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <a
                  className="portfolio-item d-block mx-auto"
                  href="#portfolio-modal-1"
                >
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a
                  className="portfolio-item d-block mx-auto"
                  href="#portfolio-modal-2"
                >
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a
                  className="portfolio-item d-block mx-auto"
                  href="#portfolio-modal-3"
                >
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a
                  className="portfolio-item d-block mx-auto"
                  href="#portfolio-modal-4"
                >
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a
                  className="portfolio-item d-block mx-auto"
                  href="#portfolio-modal-5"
                >
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a
                  className="portfolio-item d-block mx-auto"
                  href="#portfolio-modal-6"
                >
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-primary text-white mb-0" id="about">
          <div className="container">
            <h2 className="text-center text-uppercase text-white">About</h2>
            <hr className="star-light mb-5" />
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum aliquam dolor et posuere. Donec tortor tortor, ullamcorper in risus id, ultricies sagittis purus. Nunc hendrerit maximus nunc id commodo. Phasellus iaculis tortor vel tincidunt congue. Duis congue magna nec ullamcorper ullamcorper. Ut tempus condimentum ex, at ullamcorper lacus condimentum id. Aliquam erat volutpat. Vestibulum aliquet eu sem at varius. Morbi vel maximus nibh. Fusce sed felis at quam venenatis venenatis. Praesent accumsan finibus risus quis sollicitudin. Cras pharetra leo nibh, ut aliquam augue blandit a.
                </p>
              </div>
              <div className="col-lg-4 mr-auto">
                <p className="lead">
                Etiam dictum ligula nibh, sed auctor ligula ultricies id. Quisque tristique elit quis eros ullamcorper aliquet. Fusce viverra venenatis eros, ut mollis dolor mattis nec. Morbi in malesuada massa. Quisque egestas convallis ex, non sagittis mauris finibus vel. Morbi rhoncus, risus vel tempus pretium, sapien odio aliquam ante, in condimentum leo massa et velit. Nunc vel ligula eu erat aliquam condimentum. Nulla facilisi. Donec sit amet est pulvinar, ultricies ante ac, volutpat nulla.
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a className="btn btn-xl btn-outline-light" href="#">
                <i className="fas fa-download mr-2" />
                Download Now!
              </a>
            </div>
          </div>
        </section>

        {/* Contact Us*/}
        <section id="contact">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">
              Contact Us
            </h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <div className="col-lg-8 mx-auto">
                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently.*/}
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-xl"
                      id="sendMessageButton"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  Astana, Kabanbay Batyr 53
                  <br />
                  Nazarbayev University
                </p>
              </div>
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-outline-light btn-social text-center rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-fw fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-outline-light btn-social text-center rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-fw fa-google-plus-g" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-outline-light btn-social text-center rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-fw fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-outline-light btn-social text-center rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-fw fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-outline-light btn-social text-center rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-fw fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="text-uppercase mb-4">Credits</h4>
                <p className="lead mb-0">
                  Open-source template provided by @startbootstrap
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; mHealth LLC 2018</small>
          </div>
        </div>

        {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
        <div className="scroll-to-top d-lg-none position-fixed ">
          <a
            className="js-scroll-trigger d-block text-center text-white rounded"
            href="#page-top"
          >
            <i className="fa fa-chevron-up" />
          </a>
        </div>

        {/* Portfolio Modals */}

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
          <div className="portfolio-modal-dialog bg-white">
            <a
              className="close-button d-none d-md-block portfolio-modal-dismiss"
              href="#"
            >
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">
                    Feature Name
                  </h2>
                  <hr className="star-dark mb-5" />
                  <img
                    className="img-fluid mb-5"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <a
                    className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss"
                    href="#"
                  >
                    <i className="fa fa-close" />
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
          <div className="portfolio-modal-dialog bg-white">
            <a
              className="close-button d-none d-md-block portfolio-modal-dismiss"
              href="#"
            >
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">
                    Feature Name
                  </h2>
                  <hr className="star-dark mb-5" />
                  <img
                    className="img-fluid mb-5"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <a
                    className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss"
                    href="#"
                  >
                    <i className="fa fa-close" />
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
          <div className="portfolio-modal-dialog bg-white">
            <a
              className="close-button d-none d-md-block portfolio-modal-dismiss"
              href="#"
            >
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">
                    Feature Name
                  </h2>
                  <hr className="star-dark mb-5" />
                  <img
                    className="img-fluid mb-5"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <a
                    className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss"
                    href="#"
                  >
                    <i className="fa fa-close" />
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
          <div className="portfolio-modal-dialog bg-white">
            <a
              className="close-button d-none d-md-block portfolio-modal-dismiss"
              href="#"
            >
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">
                    Feature Name
                  </h2>
                  <hr className="star-dark mb-5" />
                  <img
                    className="img-fluid mb-5"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <a
                    className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss"
                    href="#"
                  >
                    <i className="fa fa-close" />
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
          <div className="portfolio-modal-dialog bg-white">
            <a
              className="close-button d-none d-md-block portfolio-modal-dismiss"
              href="#"
            >
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">
                    Feature Name
                  </h2>
                  <hr className="star-dark mb-5" />
                  <img
                    className="img-fluid mb-5"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <a
                    className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss"
                    href="#"
                  >
                    <i className="fa fa-close" />
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
          <div className="portfolio-modal-dialog bg-white">
            <a
              className="close-button d-none d-md-block portfolio-modal-dismiss"
              href="#"
            >
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">
                    Feature Name
                  </h2>
                  <hr className="star-dark mb-5" />
                  <img
                    className="img-fluid mb-5"
                    src="https://via.placeholder.com/600x450"
                    alt=""
                  />
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <a
                    className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss"
                    href="#"
                  >
                    <i className="fa fa-close" />
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Bootstrap core JavaScript*/}
        <script src="vendor/jquery/jquery.min.js" />
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />

        {/* Plugin JavaScript*/}
        <script src="vendor/jquery-easing/jquery.easing.min.js" />
        <script src="vendor/magnific-popup/jquery.magnific-popup.min.js" />

        {/*Contact Form JavaScript*/}
        <script src="js/jqBootstrapValidation.js" />
        <script src="js/contact_me.js" />

        {/*Custom scripts for this template*/}
        <script src="js/freelancer.min.js" />
      </div>
    );
  }
}

export default Landing;
