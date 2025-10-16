import React, { useState } from 'react';
import './App.css'; // Asegúrate de que este archivo CSS esté actualizado
const images = import.meta.glob('./assets/autos/*.jpg', { eager: true });
import logoWhatsapp from './assets/logoWhatsapp.png';
import logoRaiona from './assets/logoRaiona.jpg';

const imagesArray = Object.keys(images)
  .sort((a, b) => {
    const getNum = (str) => {
      const match = str.match(/(\d+)\.jpg$/);
      return match ? parseInt(match[1]) : 0;
    };
    return getNum(a) - getNum(b);
  })
  .map(key => images[key].default);

/*caracteristicas: ['Motor', 'Año', 'km', 'Combustible', 'Cambios', 'puertas'],*/
/*Datos correctos y cargados*/

const autosData = [
  {
    id: 1,
    active: true,
    nombre: 'Fiat Cronos',
    imagen: imagesArray[0],
    precio: '0',
    vendido: true,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor', 'Año', 'km', 'Combustible', 'Cambios', 'puertas'],
    espacio_active: true,
  },
  {
    id: 2,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Nissan Frontier 4x4',
    imagen: imagesArray[1],
    precio: '27000USD',
    vendido: false,
    adelanto: true,
    valor_adelanto: '14.000USD',
    caracteristicas: ['Motor 2.3L', '2018', '46.000km', 'Diesel', 'Automático', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 3,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Chevrolet Cruze Premier',
    imagen: imagesArray[2],
    precio: '22.500USD',
    vendido: true,
    adelanto: true,
    valor_adelanto: '6.400USD',
    caracteristicas: ['Motor 1.4L', '2021', '87.000km', 'Nafta', 'Automático', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 4,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Renault Captur Intens SUV',
    imagen: imagesArray[3],
    precio: '18.500USD',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.6L', '2019', '120.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: false,
  },
  {
    id: 5,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Volkswagen Suran Cross',
    imagen: imagesArray[4],
    precio: '11.000USD',
    vendido: false,
    adelanto: true,
    valor_adelanto: '5.060USD',
    caracteristicas: ['Motor 1.6L', '2011', '121.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 6,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Fiat 500 Pop Star',
    imagen: imagesArray[5],
    precio: '12.500USD',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.4L', '2014', '108.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 7,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Ford Ka SEL',
    imagen: imagesArray[6],
    precio: '14.000USD',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.5L', '2017', '76.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 8,
    active: false,
    nombre: 'Fiat',
    imagen: imagesArray[7],
    precio: '0',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor', 'Año', 'km', 'Combustible', 'Cambios', 'puertas'],
    espacio_active: true,
  },
  {
    id: 9,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Fiat Palio Attractive',
    imagen: imagesArray[8],
    precio: '11.500USD',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.4L', '2017', '83.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 10,
    active: false,
    nombre: 'Renault',
    imagen: imagesArray[9],
    precio: '0',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor', 'Año', 'km', 'Combustible', 'Cambios', 'puertas'],
    espacio_active: true,
  },
  {
    id: 11,
    active: false,
    nombre: 'Masseratti',
    imagen: imagesArray[10],
    precio: '0',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor', 'Año', 'km', 'Combustible', 'Cambios', 'puertas'],
    espacio_active: true,
  },
  {
    id: 12,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Ford Ecosport 4x2',
    imagen: imagesArray[11],
    precio: '13.900USD',
    vendido: false,
    adelanto: true,
    valor_adelanto: '7.000USD',
    caracteristicas: ['Motor 2.0L', '2016', '118.000km', 'Nafta', 'Automático', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 13,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Renault Sander Stepway',
    imagen: imagesArray[12],
    precio: '12.200USD',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.6L', '2015', '102.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 14,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Citroen C3 Feel',
    imagen: imagesArray[13],
    precio: '12.700USD',
    vendido: false,
    adelanto: true,
    valor_adelanto: '6.400USD',
    caracteristicas: ['Motor 1.5L', '2017', '61.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 15,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Ford Ka',
    imagen: imagesArray[14],
    precio: '11.600USD',
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.5L', '2020', '95.000km', 'Nafta', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 16,
    active: true,
    /*Datos correctos y cargados VER MOTOR*/
    nombre: 'Peugeot 408 Sport',
    imagen: imagesArray[15],
    precio: '8.900USD',
    vendido: false,
    adelanto: true,
    valor_adelanto: '6.000USD',
    caracteristicas: ['Motor 1.6L', '2013', '131.000km', 'Nafta', 'Automático', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 17,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Ford Ranger XL',
    imagen: imagesArray[16],
    precio: '21.000USD',
    vendido: false,
    adelanto: true,
    valor_adelanto: '10.400USD',
    caracteristicas: ['Motor 2.2L', '2020', '230.000km', 'Diesel', 'Manual', '5 puertas'],
    espacio_active: true,
  },
  {
    id: 18,
    active: true,
    /*Datos correctos y cargados*/
    nombre: 'Volkswagen Amarok Extreme 4x4',
    imagen: imagesArray[17],
    precio: '36.500USD',
    vendido: false,
    adelanto: true,
    valor_adelanto: '16.900USD',
    caracteristicas: ['Motor 3.0L', '2021', '64.000km', 'Manual', '5 puertas', 'Diesel'],
    espacio_active: false,
  },
  // Agrega más autos aquí...
];

const AutoCard = ({ auto, onConsultar, onImageClick }) => {
if (auto.active) {
  return (
    <div className="auto-card">
      <div className="image-container">
        <img
          src={auto.imagen}
          alt={auto.nombre}
          className="auto-image"
          onClick={onImageClick} // Agregamos el evento onClick
        />
        {auto.vendido && <div className="sold-banner">Vendido</div>}
        {auto.adelanto && <div className="adelanto-banner">Adelanto {auto.valor_adelanto}</div>}
      </div>
      <h3>{auto.nombre}</h3>
      {auto.espacio_active && <p> </p>}
      <ul className='caract'>
        {auto.caracteristicas.map((carac, i) => (
          <li key={i}>{carac}</li>
        ))}
      </ul>
      <button className='consultar' onClick={onConsultar}>Consultar</button>
    </div>
  );
} else { };
};

const Header = () => {
  return (
    <header className="header">
    <div className='logo_container'>
        <img className="logo_header" src={logoRaiona} alt=""></img>
    </div>
    <div className='header_texto'>
      <h1>RAIONA AUTOMOVILES</h1>
      <p>Showroom Online</p>
    </div>
    </header>
  );
};

const Aside = () => {
  return (
    <aside className="info-aside">
      <h2>Información</h2>
      <p>Autos Usados</p>
      <p>Autos 0km</p>
      <p>Permuta</p>
      <p>Repuestos</p>
      <p>Financiación</p>
      <p className='centrado'>¡De 12 a 48 cuotas fijas en pesos!</p>
      <p className='centrado'>¡3 meses de garantía en motor y transmisión!</p>
      <p> </p>
      <a href="https://wa.me/541134351090" target="_blank" rel="noopener noreferrer">
        <img className='logo-whatsapp' src={logoWhatsapp} alt="Logo WhatsApp" />
        <p className="whatsapp">WhatsApp</p>
        <p className='numero'>11 3435-1090</p>
      </a>
      <p className='centrado'>Gonzalo<br/>Asesor Automotor</p>
    </aside>
  );
};

const App = () => {
  const [autos, setAutos] = useState(autosData);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  const handleConsultar = () => {
    window.open('https://wa.me/541134351090', '_blank');
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Aside />
        <div className="autos-grid">
          {autos.map(auto => (
            <AutoCard
              key={auto.id}
              auto={auto}
              onConsultar={handleConsultar}
              onImageClick={() => openModal(auto.imagen)} // Pasamos la función para abrir el modal
            />
          ))}
        </div>
      </div>

      {/* Modal para mostrar la imagen */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Imagen ampliada" className="modal-image" />
        </div>
      )}
    </div>
  );
};


export default App;