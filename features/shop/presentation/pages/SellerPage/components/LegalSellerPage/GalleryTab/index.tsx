import { useState } from "react";
import cl from "./gallery.module.scss";
import { Modal } from "@libs/presentation/components/modals/Modal";
import Video from "@libs/presentation/components/elements/Video";

const images = [
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png",
  "/pictures/gallery/watch.png"
];
const videos = [
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ"
];

const GalleryTab = () => {
  const [imagesModalIsActive, setImagesModalIsActive] = useState(false);
  const [videosModalIsActive, setVideosModalIsActive] = useState(false);

  return (
    <section className={cl.gallery}>
      <div className={cl.gallery__main}>
        <h1 className={cl.gallery__title + " title"}>Տեղեկատվություն</h1>
        <p className={cl.gallery__text}>
          Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման
          վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ թե շատ
          իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության,
          ինչը ընթերցողի համար հասկանալի է:
        </p>
        <div className={cl.gallery__image}>
          <img src="/pictures/gallery/main.png" />
        </div>
      </div>

      <section className={cl.photo}>
        <div className={cl.photo__title}>ՏԵՍԱԴԱՐԱՆ</div>
        <div className={cl.photo__items}>
          {images.slice(0, 3).map((el, idx) => (
            <div className={cl.photo__item} key={idx}>
              <img src={el} />
            </div>
          ))}
          {images.length > 3 && (
            <div className={cl.photo__item}>
              <img src={images[3]} />
              {images.length > 4 && (
                <div className={cl.counter} onClick={() => setImagesModalIsActive(true)}>
                  +{images.slice(3).length}
                </div>
              )}
            </div>
          )}
        </div>

        <Modal
          isActive={imagesModalIsActive}
          setIsActive={setImagesModalIsActive}
          max_width="1000px"
          className={cl.gallery_modal}
        >
          <div className={cl.gallery_modal__title}>ՏԵՍԱԴԱՐԱՆ</div>
          <div className={cl.gallery_modal__items}>
            {images.slice(3).map((el, idx) => (
              <div className={cl.gallery_modal__item} key={idx}>
                <img src={el} />
              </div>
            ))}
          </div>
        </Modal>
      </section>

      <section className={cl.video}>
        <div className={cl.video__title}>ՎԻԴԵՈԴԱՐԱՆ</div>
        <div className={cl.video__items}>
          {videos.slice(0, 2).map((el, idx) => (
            <div className={cl.video__item} key={idx}>
              <Video url={el} width="100%" height="100%" controls light />
            </div>
          ))}
          {videos.length > 2 && (
            <div className={cl.video__item}>
              <Video url={videos[2]} width="100%" height="100%" />
              {videos.length > 3 && (
                <div className={cl.counter} onClick={() => setVideosModalIsActive(true)}>
                  +{videos.slice(2).length}
                </div>
              )}
            </div>
          )}
        </div>

        <Modal
          isActive={videosModalIsActive}
          setIsActive={setVideosModalIsActive}
          max_width="1000px"
          className={cl.gallery_modal}
        >
          <div className={cl.gallery_modal__title}>ՎԻԴԵՈԴԱՐԱՆ</div>
          <div className={cl.gallery_modal__items}>
            {videos.slice(3).map((el, idx) => (
              <div className={cl.gallery_modal__item} key={idx}>
                <Video url={el} width="100%" height="100%" controls light />
              </div>
            ))}
          </div>
        </Modal>
      </section>
    </section>
  );
};

export default GalleryTab;
