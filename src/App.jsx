import React, { useState } from 'react';
import './App.css'; // Asegúrate de que este archivo CSS esté actualizado
import imagen1 from './assets/1.jpg';
import imagen2 from './assets/2.jpg';

const autosData = [
  {
    id: 1,
    nombre: 'Toyota Corolla',
    imagen: imagen1,
    vendido: false,
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 2,
    nombre: 'Ford Fiesta',
    imagen: imagen2,
    vendido: true,
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
    {
    id: 3,
    nombre: 'Toyota Corolla',
    imagen: imagen1,
    vendido: false,
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 4,
    nombre: 'Ford Fiesta',
    imagen: imagen2,
    vendido: false,
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
    {
    id: 5,
    nombre: 'Toyota Corolla',
    imagen: imagen1,
    vendido: false,
    caracteristicas: ['Motor 1.8L', 'Automático', '5 puertas'],
  },
  {
    id: 6,
    nombre: 'Ford Fiesta',
    imagen: imagen2,
    vendido: false,
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
    {
    id: 7,
    nombre: 'Ford Fiesta',
    imagen: imagen2,
    vendido: false,
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
      {
    id: 8,
    nombre: 'Ford Fiesta',
    imagen: imagen2,
    vendido: false,
    caracteristicas: ['Motor 1.6L', 'Manual', '4 puertas'],
  },
  // Agrega más autos aquí...
];

const AutoCard = ({ auto }) => {
  return (
    <div className="auto-card">
      <div className="image-container">
        <img src={auto.imagen} alt={auto.nombre} className="auto-image" />
        {auto.vendido && <div className="sold-banner">Vendido</div>}
      </div>
      <h3>{auto.nombre}</h3>
      <ul>
        {auto.caracteristicas.map((carac, i) => (
          <li key={i}>{carac}</li>
        ))}
      </ul>
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
        <p className="whatsapp">WhatsApp</p>
        <p>11 3435-1090</p>
    </aside>
  );
};

const App = () => {
  const [autos, setAutos] = useState(autosData);

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Aside />
        <div className="autos-grid">
          {autos.map(auto => (
            <AutoCard key={auto.id} auto={auto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;