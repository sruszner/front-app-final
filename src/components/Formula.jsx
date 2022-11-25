import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import f1spa1 from '../assets/media/f1spa1.jpg'
import f1spa2 from '../assets/media/f1spa2.jpg'
import f1spa3 from '../assets/media/fispa3.jpg'
import './CarouselStyles.css'

function Formula() {
    return (
        <Container>
            <MDBCarousel dealy={800} className="carouselStyle" showIndicators showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={f1spa1}
                    alt='Slide 1'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={f1spa2}
                    alt='Slide 2'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={f1spa3}
                    alt='Slide 3'
                />
            </MDBCarousel>

            <div className="container marketing">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-5">
                        <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                        </Nav.Link>
                    </div>
                </div>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            2021 Belgium GP Cancelled
                            <span className="text-muted">Only rain wins</span>
                        </h2>
                        <p className="lead">
                            It was midday when it started to rain heavily in the Ardennes and it was not going to stop. At 14:20
                            the cars came out of the garage for warm-up laps. Sergio Pérez crashed his Red Bull at Les Combes
                            and broke the wing and front suspension. He had originally dropped out. With the grid formed, F1
                            delayed the start by 25 minutes, until 15:25, and ran two more formation laps behind the safety car
                            before bringing out the red flag and sending everyone back to the pit-lane. Checo would have time to
                            rejoin because his mechanics were able to repair the damage. But there was little point in rushing.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <Link to="/404error" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/media/f1spanote1.jpg" alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                                height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                focusable="false" />
                        </Link>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">
                            2020 Belgium GP
                            <span className="text-muted"> summary and result of the race</span>
                        </h2>
                        <p className="lead">
                            VICTORY FOR LEWIS HAMILTON! The Briton was unchallenged and led from start to finish despite
                            suffering with tyre problems in the closing stages of the race. He is two wins away from beating
                            Schumacher's World Championship record, with Bottas and Verstappen completing the podium. Another
                            Mercedes double in a race where the fastest lap was for Ricciardo, fourth. The only excitement of
                            the race was the accident involving Italian Antonio Giovinazzi (Alfa Romeo) and Englishman George
                            Russell (Williams) on lap eleven. For this incident, which did not cause any injuries to the
                            protagonists, the race was neutralised for four laps.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <Link to="/404error" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/media/f1spanote2.jpg" alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                                height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                focusable="false" />
                        </Link>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            2019 Belgium GP
                            <span className="text-muted"> Ferrari at podium</span>
                        </h2>
                        <p className="lead">
                            Charles Leclerc claimed the first Formula 1 victory of his career and Ferrari’s first in the 2019
                            campaign in the Belgium Grand Prix at Spa-Francorchamps, less than 24 hours after his friend
                            Anthoine Hubert passed away after a crash in Saturday’s F2 feature race.
                            The Monegasque, who immediately dedicated his win to Hubert, who he grew up racing, was in a league
                            of his own all weekend, topping two of the three practice sessions and all three segments of
                            qualifying on his way to his third pole position.
                            Come race day, Leclerc led away from P1 and though he lost track position to team mate Sebastian
                            Vettel during the pit stops, Ferrari instructed Vettel to move aside for the flying polesitter.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <Link to="/404error"  target="_blank" rel="noopener noreferrer">
                            <img src="../assets/media/f1spanote3.jpg" alt=""
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                                height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                focusable="false" />
                        </Link>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </Container>
    );
}

export default Formula;