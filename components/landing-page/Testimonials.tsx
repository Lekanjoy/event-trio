"use client";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import star from "@/public/landing-page/star.svg";
import webflow from "@/public/landing-page/webflow.png";
import avatar from "@/public/landing-page/avatar.svg";

const Testimonials = () => {
  return (
    <section className="px-4 pb-16 lg:pb-[112px] lg:px-16">
      <h4 className="font-bold text-4xl mb-5 lg:mb-6 lg:text-5xl">Customer Testimonials</h4>
      <p className="text-sm lg:text-base">
        Hear what people have said about us!
      </p>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full mt-12 lg:mt-20 "
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-y-6 lg:gap-y-8">
            <div className="flex items-center gap-x-1">
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
            </div>
            <p className="font-medium text-sm lg:text-base">
              &quot;This platform has transformed the way we plan and execute
              our events. The user-friendly interface and robust features have
              made our workflow so much smoother. Highly recommended!&quot;
            </p>

            <div className="flex items-center">
              <div className="flex items-center gap-x-3 border-r border-black pr-5">
                <Image src={avatar} alt="avatar icon" width={50} />
                <div className="flex flex-col">
                  <p className="font-bold">John Doe</p>
                  <p className="text-sm">Event Planner, XYZ</p>
                </div>
              </div>
              <div className="pl-5">
                <Image src={webflow} alt="webflow icon" className="w-[80px]" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-y-6 lg:gap-y-8">
            <div className="flex items-center gap-x-1">
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
            </div>
            <p className="font-medium text-sm lg:text-base">
              &quot;The team at Event Trio has been phenomenal. Their platform
              is intuitive and has significantly improved our event management
              process. We couldn&apos;t be happier with the results!&quot;
            </p>

            <div className="flex items-center">
              <div className="flex items-center gap-x-3 border-r border-black pr-5">
                <Image src={avatar} alt="avatar icon" width={50} />
                <div className="flex flex-col">
                  <p className="font-bold">Joyce Mayer</p>
                  <p className="text-sm">Event Planner, XYZ</p>
                </div>
              </div>
              <div className="pl-5">
                <Image src={webflow} alt="webflow icon" className="w-[80px]" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-y-6 lg:gap-y-8">
            <div className="flex items-center gap-x-1">
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
            </div>
            <p className="font-medium text-sm lg:text-base">
              &quot;Event Trio has been a game-changer for our events. The
              seamless integration and ease of use have saved us countless
              hours. Our attendees have also noticed the difference and have
              given us great feedback!&quot;
            </p>

            <div className="flex items-center">
              <div className="flex items-center gap-x-3 border-r border-black pr-5">
                <Image src={avatar} alt="avatar icon" width={50} />
                <div className="flex flex-col">
                  <p className="font-bold">Helen Mae</p>
                  <p className="text-sm">Event Planner, XYZ</p>
                </div>
              </div>
              <div className="pl-5">
                <Image src={webflow} alt="webflow icon" className="w-[80px]" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-y-6 lg:gap-y-8">
            <div className="flex items-center gap-x-1">
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
              <Image src={star} alt="star icon" width={16} />
            </div>
            <p className="font-medium text-sm lg:text-base">
              &quot;Using Event Trio has streamlined our event planning process
              immensely. The platform is incredibly user-friendly and the
              support team is always ready to help. Our events have never been
              more organized!&quot;
            </p>

            <div className="flex items-center">
              <div className="flex items-center gap-x-3 border-r border-black pr-5">
                <Image src={avatar} alt="avatar icon" width={50} />
                <div className="flex flex-col">
                  <p className="font-bold">Ming Nouman</p>
                  <p className="text-sm">Event Planner, XYZ</p>
                </div>
              </div>
              <div className="pl-5">
                <Image src={webflow} alt="webflow icon" className="w-[80px]" />
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Testimonials;
