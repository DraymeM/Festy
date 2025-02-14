import React from 'react';
import './Cats.css';

const images = [
    'https://media1.tenor.com/m/eThN_gxUUHcAAAAC/mxstery.gif',
    'https://media1.tenor.com/m/XOKm8hiDW3UAAAAC/catshakira-cat.gif',
    'https://media1.tenor.com/m/ww3XhSGAyPoAAAAC/me.gif',
    'https://media1.tenor.com/m/sibluXAhBDgAAAAd/cat-band.gif',
    'https://media1.tenor.com/m/Ow4aJ_k2rgkAAAAC/cat-monday-left-me-broken-cat.gif',
];

function CatsPage() {
    return (
        <div className="page-container">
        <div className="container-car">
            <div className="h1c">
                <h1>Our winner cat band</h1>
            </div>
            <div className="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                            className="carousel-item"
                            key={index}
                            style={{
                                transform: `rotateY(${index * (360 / images.length)}deg) translateZ(300px)`,
                            }}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default CatsPage;
