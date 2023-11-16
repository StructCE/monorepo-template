import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "@/styles/Slider.module.css";

type Book = {
  id: string;
  image: string;
};

type BookShelf = {
  books: Book[];
};

export default function Carrossel({ bookShelf }: { bookShelf: BookShelf }) {
  return (
    <Swiper slidesPerView={5} navigation>
      {bookShelf.books.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} alt="slider" className={styles.slider_item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
