import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import lmp11 from '../assets/media/enduranceslider1.jpg'
import lmp12 from '../assets/media/enduranceslider2.jpg'
import lmp13 from '../assets/media/enduranceslider3.jpg'
import './CarouselStyles.css'


function Lmp1() {
    return (
        <Container>

            <MDBCarousel dealy={800} className="carouselStyle" showIndicators showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={lmp11}
                    alt='Slide 1'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={lmp12}
                    alt='Slide 2'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={lmp13}
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
                            Hypercar
                            <span className="text-muted"> makes its debut</span>
                        </h2>
                        <p className="lead">
                            The Le Mans Hypercar era has finally arrived. After years of build-up, and plenty of twists and turns along the way in the formation of the new category, LMP1 is no more and LMH has taken over as the top class in ACO-sanctioned racing. <br /> This process hasn’t been without politicking, and right up until the green flag being waved at the start of the race, there was still much debate. The main topic between key stakeholders on this occasion(unsurprisingly) concerned the performance levels of the LMH and LMP2 categories. All the teams involved invested in LMP2 because of its performance level being as impressive at it was, and spent a lot more money on the current-gen chassis to achieve this. The cars were
                            designed with the original level of performance in mind too.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <Link to="/404error" target="_blank" rel="noopener noreferrer">
                            <img src="../../../../assets/media/lmp1note3.jpg" alt="LMP1 1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                        </Link>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">
                            A word on
                            <span className="text-muted"> Oliver Gavin</span>
                        </h2>
                        <p className="lead">
                            Before we look ahead to the next FIA WEC meeting at Portimao in June, it’s only right that we celebrate the career of Oliver Gavin, who made the 6 Hours of Spa the final race in his professional career as a driver. <br /> During his time spent with Corvette Racing, he racked up a huge list of accolades, including five Sebring 12 Hours class wins, five Le Mans 24 Hours class wins, five Petit Le Mans class wins, plus multiple GT championships in the American Le Mans Series and IMSA WeatherTech Sports Car Championship. He is everything that Corvette Racing stands for, a key part of a wider family, that showed and was shown loyalty by those around him for two decades. Through multiple generations of Corvette
                            Racing, he was there and winning races, and never showed any signs if slowing down.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <Link to="/404error" target="_blank" rel="noopener noreferrer">
                            <img src="../../../../assets/media/lmp1note2.jpg" alt="LMP1 2" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                        </Link>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            An expensive weekend
                            <span className="text-muted"> for Aston Martin</span>
                        </h2>
                        <p className="lead">
                            Spa wasn’t likely to be anyone’s first choice for a pre-season test just days before the season opener, but the decision was nevertheless taken to hold the WEC Prologue at the Belgian circuit this year after the Portimao race (originally scheduled to be the opener) was shifted to June. <br /> As every keen motorsport fan knows, Spa is an unforgiving circuit, which rewards bravery and heavily punishes mistakes. The combination of new drivers, at new teams, in new cars, at Spa during the week resulted in some expensive incidents. Notably three of the five brand new customer Porsche 911 RSR 19s, two LMP2 ORECAs and two Aston Martins had huge offs, which required major rebuilds. Project 1 even had its weekend ended
                            prematurely after Egidio Perfetti’s shunt at Raidillon during qualifying.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <Link to href="/404error" target="_blank" rel="noopener noreferrer">
                            <img src="../../../../assets/media/lmp1note.jpg" alt="LMP1 3" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                        </Link>
                    </div>
                </div>

                <hr className="featurette-divider" />

            </div>
        </Container>
    );
}

export default Lmp1;