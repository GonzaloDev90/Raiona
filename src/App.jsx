import React, { useState } from 'react';
import './App.css'; // Asegúrate de que este archivo CSS esté actualizado
const images = import.meta.glob('./assets/autos/*.jpg', { eager: true });
import logoWhatsapp from './assets/logoWhatsapp.png';

const imagesArray = Object.keys(images)
  .sort((a, b) => {
    const getNum = (str) => {
      const match = str.match(/(\d+)\.jpg$/);
      return match ? parseInt(match[1]) : 0;
    };
    return getNum(a) - getNum(b);
  })
  .map(key => images[key].default);

const autosData = [
  {
    id: 1,
    nombre: 'Fiat Cronos',
    imagen: imagesArray[0],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 2,
    nombre: 'Nissan',
    imagen: imagesArray[1],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
  {
    id: 3,
    nombre: 'Chevrolet',
    imagen: imagesArray[2],
    vendido: false,
    adelanto: false,
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 4,
    nombre: 'Renault',
    imagen: imagesArray[3],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 5,
    nombre: 'Volkswagen Fox',
    imagen: imagesArray[4],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
  {
    id: 6,
    nombre: 'Fiat',
    imagen: imagesArray[5],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 7,
    nombre: 'Ford Fiesta',
    imagen: imagesArray[6],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
  {
    id: 8,
    nombre: 'Fiat',
    imagen: imagesArray[7],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 9,
    nombre: 'Fiat',
    imagen: imagesArray[8],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 10,
    nombre: 'Renault',
    imagen: imagesArray[9],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 11,
    nombre: 'Masseratti',
    imagen: imagesArray[10],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 12,
    nombre: 'Ford Ecosport',
    imagen: imagesArray[11],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 13,
    nombre: 'Renault',
    imagen: imagesArray[12],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 14,
    nombre: 'Citroen C3',
    imagen: imagesArray[13],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 15,
    nombre: 'Ford',
    imagen: imagesArray[14],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 16,
    nombre: 'Peugeot 408 Sport',
    imagen: imagesArray[15],
    vendido: false,
    adelanto: true,
    valor_adelanto: '6000USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 17,
    nombre: 'Ford Ranger',
    imagen: imagesArray[16],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 18,
    nombre: 'Volkswagen Amarok',
    imagen: imagesArray[17],
    vendido: false,
    adelanto: false,
    valor_adelanto: '0USD',
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  // Agrega más autos aquí...
];

const AutoCard = ({ auto, onConsultar, onImageClick }) => {
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
      <ul>
        {auto.caracteristicas.map((carac, i) => (
          <li key={i}>{carac}</li>
        ))}
      </ul>
      <button className='consultar' onClick={onConsultar}>Consultar</button>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>SHOWROOM ONLINE</h1>
      <p>Los mejores autos para tu familia</p>
    </header>
  );
};

const Aside = () => {
  return (
    <aside className="info-aside">
      <h2>Información</h2>
      <p>Autos Usados</p>
      <p>Autos 0km</p>
      <p>Recambio</p>
      <p>Financiación</p>
      <p> </p>
      <a href="https://wa.me/541134351090" target="_blank" rel="noopener noreferrer">
        <img className='logo-whatsapp' src={logoWhatsapp} alt="Logo WhatsApp" />
        <p className="whatsapp">WhatsApp</p>
        <p className='numero'>11 3435-1090</p>
      </a>
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