import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

//Images and Videos
import p1 from "../images/Project5/1.jpg"
import p2 from "../images/Project5/2.jpg"
import p3 from "../images/Project5/3.jpg"
import p4 from "../images/Project5/4.jpg"


import Carousel from "./Carousel";

const slides = [p1, p2, p3, p4];

const M2 = ({ visible, onClose }) => {
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
                    <div className="mx-auto  md:max-w-[95%]">
                        <TransformComponent>
                            <Carousel>
                                {[
                                    ...slides.map((s) => (
                                        <img alt="slides of second web project" src={s} />
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

export default M2;
