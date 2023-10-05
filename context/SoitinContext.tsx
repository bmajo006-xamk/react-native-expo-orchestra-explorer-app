import { createContext, useState } from 'react';

export const SoitinContext : React.Context<any> = createContext(undefined);

interface Props {
    children : React.ReactNode
}
export interface Pelaaja{
  nimi: string
  pisteet: number
}

export const SoitinProvider : React.FC<Props> = (props : Props) => {

    const [pelaaja, setPelaaja] = useState<Pelaaja>({
                    nimi: '',
                    pisteet: 0
                    });

    const jouset_images = [
        {id: 1, img: require('../imgs/viulu.png'), title: "Viulu"},
        {id: 2, img: require('../imgs/alttoviulu.jpg'), title: "Alttoviulu"},
        {id: 3, img: require('../imgs/sello.jpg'), title: "Sello"},
        {id: 4, img: require('../imgs/kontrabassso.jpg'), title: "Kontrabasso"},
        {id: 5, img: require('../imgs/orkesteri.jpg'), title: "Orkesteri"}
      ]
      
      const puupuhaltimet_images = [
        {id: 1, img: require('../imgs/poikkihuilu.jpg'), title: "Poikkihuilu"},
        {id: 2, img: require('../imgs/oboe.jpg'), title: "Oboe"},
        {id: 3, img: require('../imgs/klarinetti.jpg'), title: "Klarinetti"},
        {id: 4, img: require('../imgs/fagotti.jpg'), title: "Fagotti"}
      ]
      const vaskipuhaltimet_images = [
        {id: 1, img: require('../imgs/trumpetti.jpg'), title: "Trumpetti"},
        {id: 2, img: require('../imgs/pasuuna.jpg'), title: "Pasuuna"},
        {id: 3, img: require('../imgs/kayratorvi.jpg'), title: "Käyrätorvi"},
        {id: 4, img: require('../imgs/tuuba.jpg'), title: "Tuuba"}
      ]
      
      const sounds = [
        {id: 1, url: require('../sounds/viulu.wav'), title: "viulu"},
        {id: 2, url: require('../sounds/alttoviulu.wav'), title: "alttoviulu"},
        {id: 3, url: require('../sounds/sello.wav'), title: "sello"},
        {id: 4, url: require('../sounds/kontrabasso.wav'), title: "kontrabasso"},
        {id: 5, url: require('../sounds/poikkihuilu.wav'), title: "poikkihuilu"},
        {id: 6, url: require('../sounds/oboe.wav'), title: "oboe"},
        {id: 7, url: require('../sounds/klarinetti.wav'), title: "klarinetti"},
        {id: 8, url: require('../sounds/fagotti.wav'), title: "fagotti"},
        {id: 9, url: require('../sounds/trumpetti.wav'), title: "trumpetti"},
        {id: 10, url: require('../sounds/pasuuna.wav'), title: "pasuuna"},
        {id: 11, url: require('../sounds/kayratorvi.wav'), title: "kayratorvi"},
        {id: 12, url: require('../sounds/tuuba.wav'), title: "tuuba"}
      ]

    const value = {

        jouset_images,
        puupuhaltimet_images,
        vaskipuhaltimet_images,
        sounds,
        pelaaja,
        setPelaaja
    }

    return (
        <SoitinContext.Provider value={value}>
            {props.children}
        </SoitinContext.Provider>
        
    )
}