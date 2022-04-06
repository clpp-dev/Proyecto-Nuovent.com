import React from "react";
import './Style.css'

export const Carousel = ({picture1, picture2, picture3, picture4, picture5, picture6}) => {
  return (
    <div
      id="myCarousel"
      className="carousel slide my-0"
      data-bs-ride="carousel"

    >
      <div className="carousel-indicators">
        {
          picture1 === "" || picture1 === undefined || picture1 === null ?
          ""
          : <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        /> }

        {
          picture2 === "" || picture2 === undefined || picture2 === null ?
          ""
          :
          <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={1}
          aria-label="Slide 2" />  }

        {
          picture3 === "" || picture3 === undefined || picture3 === null ?
          ""
          :
          <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={2}
          aria-label="Slide 3" /> }

        {
          picture4 === "" || picture4 === undefined || picture4 === null ?
          ""
          : 
          <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />  }

        {
          picture5 === "" || picture5 === undefined || picture5 === null ?
          ""
          : 
          <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={4}
          aria-label="Slide 5" />  }

        {
          picture6 === "" || picture6 === undefined || picture6 === null ?
          ""
          : <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={5}
          aria-label="Slide 6" />
          }


      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={picture1}
            alt="picture1"
          />

          <div className="container">
            <div className="carousel-caption text-start">
              {/* <h1>IMAGEN 1</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p> */}
            </div>
          </div>
        </div>
        {
           picture2 === "" || picture2 === undefined || picture2 === null ?
        ""
        : <div className="carousel-item">
            <img
              src={picture2}
              alt="picture2"
            />
            

            <div className="container">
              <div className="carousel-caption">
                {/* <h1>IMAGEN 2</h1>
                <p>
                  Some representative placeholder content for the second slide of
                  the carousel.
                </p> */}
              </div>
            </div>
          </div> }

        {
          picture3 === "" || picture3 === undefined || picture3 === null ?
        ""
        : <div className="carousel-item">
            <img
              src={picture3}
              alt="picture3"
            />

            <div className="container">
              <div className="carousel-caption text-end">
                {/* <h1>IMAGEN 3</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p> */}
              </div>
            </div>
          </div> }

        {
           picture4 === "" || picture4 === undefined || picture4 === null ?
          ""
          : <div className="carousel-item">
          <img
            src={picture4}
            alt="picture4"
          />

          <div className="container">
            <div className="carousel-caption">
              {/* <h1>IMAGEN 4</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p> */}
            </div>
          </div>
        </div> }

        {
           picture5 === "" || picture5 === undefined || picture5 === null ?
          ""
          : <div className="carousel-item">
              <img
                src={picture5}
                alt="picture5"
              />

              <div className="container">
                <div className="carousel-caption">
                  {/* <h1>IMAGEN 5</h1>
                  <p>
                    Some representative placeholder content for the second slide of
                    the carousel.
                  </p> */}
                </div>
              </div>
            </div> }

        {
           picture6 === "" || picture6 === undefined || picture6 === null ?
        ""
        : <div className="carousel-item">
            <img
              src={picture6}
              alt="picture6"
            />

            <div className="container">
              <div className="carousel-caption">
                {/* <h1>IMAGEN 6</h1>
                <p>
                  Some representative placeholder content for the second slide of
                  the carousel.
                </p> */}
              </div>
            </div>
          </div>
        }

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
