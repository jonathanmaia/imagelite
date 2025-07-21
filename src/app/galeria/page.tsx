'use client';

import { Template, ImageCard } from '@/components';
import { useState } from 'react';
import {Image } from "@/resources/image/image.resource";
import { useImageService } from '@/resources/image/image.service';

export default function GaleriaPage() {

    const image1 = 'https://img.nsctotal.com.br/wp-content/uploads/2024/02/montanha-alpes-suicos.jpg';
    const image2 = 'https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg';

    const [codigoImage, setCodigoImage] = useState<number>(1);
    const [urlImage, setUrlImage] = useState<string>(image1);

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);

    async function searchImages() {
        setImages(await useService.buscar());
    }

    function renderImageCard(image: Image) {
        return <ImageCard nome={image.name} tamanho={image.size} dataUpload={image.uploadDate} src={image.url} />
    }

    function renderImageCards() {
        return images.map( renderImageCard );
    }

    return (
        <Template>
            <button className = "bg-gray-500" onClick={searchImages}>Clique para mudar</button>

            <section className="grid grid-cols-3 gap-8">
                {
                    renderImageCards()
                }
            </section>
        </Template>
    );
}