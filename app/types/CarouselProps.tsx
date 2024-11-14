interface CarouselItem {
    src: string;
    alt: string;
    title: string;
    description: string;
    technologies:{
        name: string;
    }[];
    github: string;
    figma: string;
}

interface CarouselProps {
    carouselData: CarouselItem[];
    path: string;
}