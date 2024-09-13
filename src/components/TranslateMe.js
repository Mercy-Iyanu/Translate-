import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFlagUsa, faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import headerPics from '../images/pics.jpg';
import sabreLogo from '../images/Sabre Logo images.png';

export default function TranslateMe() {
    const [translatedText, setTranslatedText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('Select a language');

    const translateText = async (language, languageLabel) => {
        setSelectedLanguage(languageLabel);

        const textToTranslate = `We partner with airlines, hoteliers, agencies and other travel partners to retail, distribute and fulfill travel.`;
        const apiKey = 'AIzaSyCysQk8uFf4TkdGBXX9hZkGp9VvFHiq8YY';

        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ q: textToTranslate, target: language }),
        };

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            const translatedText = data.data.translations[0].translatedText;
            setTranslatedText(translatedText);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#"
                        style={{
                            backgroundImage: `url(${sabreLogo})`,
                            backgroundSize: 'cover',
                            width: '10%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            display: 'flex',
                            color: 'transparent',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}

                    >Sabre</Navbar.Brand>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="canva.us" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faGlobe} /> {selectedLanguage}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <button className="dropdown-item" onClick={() => translateText('en', 'English')} style={{ background: 'none', border: 'none', paddingLeft: 10, cursor: 'pointer' }}>
                                        <FontAwesomeIcon icon={faFlagUsa} /> English
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => translateText('fr', 'French')} style={{ background: 'none', border: 'none', paddingLeft: 10, cursor: 'pointer' }}>
                                        <FontAwesomeIcon icon={faEarthEurope} /> French
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => translateText('fr', 'French')} style={{ background: 'none', border: 'none', paddingLeft: 10, cursor: 'pointer' }}>
                                        <FontAwesomeIcon icon={faEarthEurope} /> Espaniol
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Container>
            </Navbar>

            <Container 
                style={{
                    backgroundImage: `url(${headerPics})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    minHeight: '100vh',
                    display: 'flex',
                    width: '100vw', 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                className='mt-3'
            >
                <h1 style={{ fontSize: '3em' }}>
                    We partner with airlines, hoteliers, agencies and other travel partners to retail, distribute and fulfill travel.
                </h1>
                <p>{translatedText}</p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Container>
        </div>
    );
}