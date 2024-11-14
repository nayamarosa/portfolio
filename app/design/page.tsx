'use client'

import { useEffect, useState } from "react";
import { designtService } from "../utils/design-data";
import { Carousel } from "../components/carousel";

const Design = () => {
  const [carouselItemData, setCarouselItemData] = useState<CarouselItem[] | []>([]);

  useEffect(() => {
    setCarouselItemData(designtService);
    return () => {
      carouselItemData;
    }
  }, [])

      
    return (
        <>
            <h1>Design</h1>
            <Carousel carouselData={carouselItemData} />
        </>
    )
}

export default Design;