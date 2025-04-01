import { content } from "../Content";
import { createElement } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-[#F5F9FD]" id="projects">
      <div className="container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          data-aos="fade-left"
          spaceBetween={20}
          modules={[Pagination]}
          className="rounded-3xl pb-16 max-w-xs md:max-w-xl shadow-[-5px 35px 40px rgba(223, 229, 236, 0.9)] self-start"
        >
          {Projects.project_content.map((content, i) => (
            <SwiperSlide
              key={i}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
            >
              <a target="_blank" href={content.liveLink}>
                <img src={content.img} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-[Poppins]">{content.title}</h5>
                  <div className="flex gap-2">
                    <a target="_blank" href={content.liveLink}>
                      {createElement(Projects.liveLogo)}
                    </a>
                    <a target="_blank" href={content.gitLink}>
                      {createElement(Projects.gitLogo)}
                    </a>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5"></div>
      </div>
    </section>
  );
};

export default Projects;
