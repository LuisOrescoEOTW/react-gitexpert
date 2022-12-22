import { useEffect, useState } from "react";
import { getGigs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    
    const getImages = async() => {
        const newImages = await getGigs( category );
        setImages(newImages);
        setIsLoading(false);
    }  
    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading: false
    }
}

