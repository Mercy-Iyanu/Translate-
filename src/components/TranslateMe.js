import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import headerPics from './pics.jpg';

export default function TranslateMe() {
    const [translatedText, setTranslatedText] = useState('');

    const translateText = async () => {
        const textToTranslate = `We partner with airlines, hoteliers, agencies and other travel partners to retail, distribute and fulfill travel.`;
        const targetLanguage = 'fr'; 
        const apiKey = 'AIzaSyCysQk8uFf4TkdGBXX9hZkGp9VvFHiq8YY';

        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ q: textToTranslate, target: targetLanguage }),
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
                    <Navbar.Brand href="#">Sabre</Navbar.Brand>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Select a language</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#" onClick={translateText}>French</a></li>
                            </ul>
                        </li>
                    </ul>
                </Container>
            </Navbar>

        <Container style = {{headerPics: `url(${headerPics})`}} className='mt-3'>
          <h1>We partner with airlines, hoteliers, agencies and other travel partners to retail, distribute and fulfill travel.</h1>
          <p>{translatedText}</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
            
        </div>
    )
}