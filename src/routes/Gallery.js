import { Link } from "react-router-dom";
import Footer from "../Footer";
import TopBar from "../TopBar";
import "./routes.css";

const alligatorDrawings = [
  { src: 'https://i.imgur.com/4pXynPQ.png', alt: 'Alligator sketch' },
  { src: 'https://i.imgur.com/qjtfzgl.png', alt: "Farmer alligator sketch standing next to tractor. Title 'Aint much but it is honest work'." },
  { src: 'https://i.imgur.com/HzXbXMd.jpg', alt: 'Alligator sketch with pink water wings.' },
  { src: 'https://i.imgur.com/SfCdaAf.jpg', alt: 'Farmer alligator sketch sitting on a hay bale.' },
  { src: 'https://i.imgur.com/kqcOvtU.jpg', alt: 'Sketch of alligator on a surf board.' },
  { src: 'https://i.imgur.com/TVW2iPf.jpg', alt: 'Sketch of alligator sitting at table typing on computer.' },
  { src: 'https://i.imgur.com/1Vti6Ft.png', alt: 'Worm in a rubber ducky sketch.' },
  { src: 'https://i.imgur.com/qukakbF.png', alt: 'Kiwi the alligator sketch.' },
  { src: 'https://i.imgur.com/q8qCY76.png', alt: 'Fish in a prom dress.'},
  { src: 'https://i.imgur.com/XxNXMNF.png', alt: 'Alligator on rollerskates.'},
];

function Gallery() {
  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {alligatorDrawings.map((drawing, index) => (
          <div className="gallery-item" key={index}>
            <img src={drawing.src} alt={drawing.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
