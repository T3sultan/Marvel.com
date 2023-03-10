import React from "react";
import image1 from "../../assets/cpatainama.1db6e6722978078a3d77.jpg";
import image2 from "../../assets/638edc9e2b9fa.53af284cb8121f883fa0.jpg";
import image3 from "../../assets/639970321781d.243d6af97725006961bf.jpg";
import image4 from "../../assets/villern.81924fbad0bd8f0ca0af.jpg";
import image5 from "../../assets/redwwomen.6b2ba77813cbbf0dc20c.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className=" ml-20">
            <h3 className="text-white text-xl font-bold ">BEST OF 2022</h3>
            <h1 className="text-white text-3xl font-bold mt-4">
              'IMMORTAL X-MEN': IGN'S BEST <br /> COMIC BOOK SERIES OF THE YEAR
            </h1>
            <div>
              <button className="text-white font-bold border-2 w-28 mt-4 rounded-tl-xl rounded-br-xl h-14">
                FIRST LOOK!
              </button>
            </div>
          </div>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className=" ml-20">
            <h3 className="text-white text-xl font-bold ">BEST OF 2022</h3>
            <h1 className="text-white text-3xl font-bold mt-4">
              'IMMORTAL X-MEN': IGN'S BEST <br /> COMIC BOOK SERIES OF THE YEAR
            </h1>
            <div>
              <button className="text-white font-bold border-2 w-28 mt-4 rounded-tl-xl rounded-br-xl h-14">
                FIRST LOOK!
              </button>
            </div>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className=" ml-20">
            <h3 className="text-white text-xl font-bold ">BEST OF 2022</h3>
            <h1 className="text-white text-3xl font-bold mt-4">
              'IMMORTAL X-MEN': IGN'S BEST <br /> COMIC BOOK SERIES OF THE YEAR
            </h1>
            <div>
              <button className="text-white font-bold border-2 w-28 mt-4 rounded-tl-xl rounded-br-xl h-14">
                FIRST LOOK!
              </button>
            </div>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className=" ml-20">
            <h3 className="text-white text-xl font-bold ">BEST OF 2022</h3>
            <h1 className="text-white text-3xl font-bold mt-4">
              'IMMORTAL X-MEN': IGN'S BEST <br /> COMIC BOOK SERIES OF THE YEAR
            </h1>
            <div>
              <button className="text-white font-bold border-2 w-28 mt-4 rounded-tl-xl rounded-br-xl h-14">
                FIRST LOOK!
              </button>
            </div>
          </div>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={image5} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className=" ml-20">
            <h3 className="text-white text-xl font-bold ">BEST OF 2022</h3>
            <h1 className="text-white text-3xl font-bold mt-4">
              'IMMORTAL X-MEN': IGN'S BEST <br /> COMIC BOOK SERIES OF THE YEAR
            </h1>
            <div>
              <button className="text-white font-bold border-2 w-28 mt-4 rounded-tl-xl rounded-br-xl h-14">
                FIRST LOOK!
              </button>
            </div>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
