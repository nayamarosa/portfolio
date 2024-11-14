'use client'

import { useEffect, useState } from "react";
import { Carousel } from "../components/carousel";
import { developmentService } from "../utils/development-data";
import { usePathname } from 'next/navigation';

const Development = () => {

  const [carouselItemData, setCarouselItemData] = useState<CarouselItem[] | []>([]);
  const [getPath, setGetPath] = useState('');

  const pathname = usePathname();


  useEffect(() => {
    setCarouselItemData(developmentService);
    setGetPath(pathname);
    return () => {
      carouselItemData;
    }
  }, [])
      
    return (
        <>
            <h1>Programação</h1>
            <Carousel carouselData={carouselItemData} path={getPath} />
        </>
    )
}

export default Development;