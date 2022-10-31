import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import gt31 from '../assets/media/gt3slider1.jpg'
import gt32 from '../assets/media/gt3slider2.jpg'
import gt33 from '../assets/media/gt3slider3.jpg'
import './CarouselStyles.css'

function Gt3() {
    return (
        <Container>
                <MDBCarousel dealy={800} className="carouselStyle" showIndicators showControls>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src={gt31}
                        alt='Slide 1'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={gt32}
                        alt='Slide 2'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={gt33}
                        alt='Slide 3'
                    />
                </MDBCarousel> 

                <div class="container marketing">
                    <hr class="featurette-divider" />
                    <div class="row featurette">
                        <div class="col-md-5">
                            <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                            </Nav.Link>
                        </div>
                    </div>
                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">
                                911 GT3 R finishes 1st
                                <span class="text-muted"> at SPA</span>
                            </h2>
                            <p class="lead">
                                For the trio sharing the cockpit of Pfaff Motorsports’ No. 9 entry, this result is enough to retain their lead in the GTD Pro class of the IMSA WeatherTech SportsCar Championship. The identical model fielded by WeatherTech Racing crossed the finish line in P6. <br /> Despite the seven caution phases, the 70th edition of the endurance classic turned out to be uncharacteristically static. In air temperatures of over 30 degrees Celsius in the circuit, the positions in the GT class were set shortly after the start. <br /> All of Porsche’s strong and experienced customer teams put in flawless performances and implemented great strategies, but the cars never came within striking distance of the podium.
                            </p>
                        </div>
                        <div class="col-md-5">
                            <Link to="/404error" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/media/gt31.webp" alt="GT3 1" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </Link>
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                            <h2 class="featurette-heading">
                                ST Racing claims
                                <span class="text-muted"> first win for the BMW M4 GT3.</span>
                            </h2>
                            <p class="lead">
                                BMW M Motorsport teams are once again in action all over the world in 2022 and challenging for race wins and titles in their respective championships. They are competing in the new BMW M4 GT3 as well as with the BMW M4 GT4, the BMW M2 CS Racing, and other BMW M Motorsport race cars. <br /> BMW teams have been running the BMW M4 GT3 in races since January 2022, and the new car now has its maiden victory after two months. The last time a BMW M Motorsport team took overall victory in the 24H Series was ten years ago, with the BMW Z4 GT3. As well as the overall win, a further
                                two class victories also went to BMW M Motorsport teams.
                            </p>
                        </div>
                        <div class="col-md-5 order-md-1">
                            <Link to="/404error" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/media/gt32.jpeg" alt="GT3 2" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </Link>
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">
                                Castrol Honda Racing
                                <span class="text-muted"> enters Spa with NSX GT3</span>
                            </h2>
                            <p class="lead">
                                The NSX GT3, which builds upon Honda’s next-generation supercar and utilises the same 3.5-litre, twin-turbocharged V6 engine is a race winner in the North American-based IMSA WeatherTech Sports Car Championship and Pirelli World Challenge. The car currently competes in high-level series on three continents as part of Honda’s NSX GT3 Customer Racing Programme. <br /> The centrepiece of the Blancpain GT Series, held on July 26-29, marks the return of the NSX name to the Spa 24 Hours a quarter of a century after Armin Hahne, Bertrand Gachot and Kazuo Shimizu started the 1993 race from pole position in a Honda Belgium-entered car also supported by Castrol. <br />
                            </p>
                        </div>
                        <div class="col-md-5">
                            <Link to="/404error" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/media/gt33.jpg" alt="GT3 3" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </Link>
                        </div>
                    </div>
                    <hr class="featurette-divider" />
                </div>
        </Container>
    );
}

export default Gt3;