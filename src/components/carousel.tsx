import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Yorck from "@/images/Yorck-Kinogruppe.png";
import MPower from "@/images/MPower-e.V..png";
import Songs from "@/images/Songs-for-Rights.png";
import IYCE from "@/images/IYCE.png";
import StadtBibliothek from "@/images/Stadtbibliothek-Berlin-Mitte.png";
import styles from "../app/carousel.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 701 }, // Above 700px
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 }, // Below 700px
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselComponent: React.FC = () => {
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // render carousel on the server-side if needed
        infinite={true}
        autoPlay={true} // enable auto play if needed
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop" // adjust as needed
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          {" "}
          <Image
            src={Yorck}
            alt="Yorck KinoGruppe"
            width={Yorck.width}
            height={Yorck.height}
            className={styles.Yorck}
          />
        </div>
        <div>
          {" "}
          <Image
            src={MPower}
            alt="MPower sponsor"
            width={MPower.width}
            height={MPower.height}
            className={styles.MPower}
          />
        </div>
        <div>
          {" "}
          <Image
            src={Songs}
            alt="Songs sponsor"
            width={Songs.width}
            height={Songs.height}
            className={styles.Songs}
          />
        </div>
        <div>
          {" "}
          <Image
            src={IYCE}
            alt="IYCE sponsor"
            width={IYCE.width}
            height={IYCE.height}
            className={styles.IYCE}
          />
        </div>
        <div>
          {" "}
          <Image
            src={StadtBibliothek}
            alt="StadtBibliothek sponsor"
            width={StadtBibliothek.width}
            height={StadtBibliothek.height}
            className={styles.StadtBibliothek}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
