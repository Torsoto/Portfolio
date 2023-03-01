import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

//Images and Videos
import V1 from "../videos/1.mp4";
import V2 from "../videos/2.mp4";
import V3 from "../videos/3.mp4";
import V4 from "../videos/4.mp4";
import V5 from "../videos/5.mp4";
import V6 from "../videos/6.mp4";
import V7 from "../videos/7.mp4";
import V8 from "../videos/8.mp4";
import V9 from "../videos/9.mp4";

import Carousel from "./Carousel";

const slides = [V1, V2, V3, V4, V5, V6, V7, V8, V9];

const M1 = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" text-black bg-transparent rounded-md overflow-hidden max-w-[1200px] w-[98%] fadeIn"
      >
        <TransformWrapper
          doubleClick={{ disabled: true }}
          disablePadding
          wheel={0.2}
        >
          <div className="mx-auto w-[95%] md:w-full">
            <TransformComponent>
              <Carousel>
                {[
                  ...slides.map((s) => (
                    <video autoPlay loop playsInline muted src={s} />
                  )),
                ]}
              </Carousel>
            </TransformComponent>
          </div>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default M1;
