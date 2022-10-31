import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';
import './Article.css'

function Region() {
    return (
        <Container>
            <div class="p-4 p-md-5 mb-4 mt-5 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 fst-italic text-danger">
                        Land of Francorchamps: the richness of authenticity
                    </h1>
                    <p class="lead my-3">The Circuit of Spa Francorchamps is located in the magnificent region of the Ardennes, in a natural, breathtaking, verdant setting. <br /> Near Fagnes and its highly-regarded landscapes, it offers you a range of very diversified activities
                    </p>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-md-8">
                    <h3 class="pb-4 mb-4 fst-italic border-bottom">
                        Our region, Ardennes
                    </h3>
                    <div className="blog-post">
                        <h2 class="blog-post-title">Stavelot</h2>
                        <hr />
                        <p>
                            Around an abbey site classified as exceptional heritage of Wallonia, Stavelot shows the preserved face of an 18th-century city with its majestic Grand Place, its stone, half-timbered houses, its relics, its alleyways and its fountains.
                        </p>
                        <p>
                            The true historical and cultural heart of the High Ardennes, the town beats to the rhythm of its three museums and its ongoing cultural entertainment with a succession of exhibitions, international music festivals, of French song, jazz, storytelling, theatre and major folk festivals such as the Laetare of the Blancs Moussis, one of the most famous Belgian carnivals. Formerly an Abbey Principality, the Pays de Stavelot is part of the great Ardennes forest. From the fens of Hockai to Coo, where the beautiful Amblève river rises, it offers magnificent landscapes and offers dozens of kilometres of walking routes that lead to peaceful hamlets by old legendary paths. Throughout the centuries, nature and humankind have shaped the face of the Pays de Stavelot, a land of history and culture, but also and especially a welcoming land. <br />
                            <Nav.Link href="http://tourisme.stavelot.be/presentation.html" target="_blank">Website of the Stavelot Tourism Office</Nav.Link>
                        </p>
                        <div class="col-md-5">
                            <img src="../../assets/media/ciudad.jpg" alt="Circuito 1" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            <hr />
                        </div>
                        <h2 class="blog-post-title">Malmedy</h2>
                        <hr />
                        <p>Located at the confluence of the Warche and Warchenne rivers, the city of Malmedy nestles
                            comfortably at the bottom of an exceptionally green valley. Encircled and overlooked by its
                            many villages, Malmedy is a major cultural and tourist centre of attraction.
                            The people of Malmedy also have an open and welcoming character and very festive spirit.
                            Presumably, this is due to the cultural upheavals that the city has known during its history
                            as a frontier town. In fact, the people of Malmedy have elevated the Walloon language and
                            their local folklore to the rank of cultural richness and never miss an opportunity to come
                            together to celebrate. The very colourful Malmedy calendar testifies to this
                            always-very-alive folklore. Throughout these various pages devoted to the local tourism
                            industry, you can visit the countless sites and curiosities of the region. You will have an
                            overview of the many activities, walks and events that include the city and its
                            surroundings.<br />
                            <Nav.Link href="https://www.malmedy-tourisme.be/en/" target="_blank">Website of the city of Malmedy</Nav.Link>
                        </p>
                        <div className="col-md-5">
                            <img src="../../assets/media/bosque.jpg" alt="Circuito 1" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            <hr />
                        </div>
                        <div>
                            <h2>Principals activities of Ardennes</h2>
                            <p>The hilly and wooded terrain limits the possibilities for farming, but thanks to ploughing
                                and other artificial applications, agricultural activity was able to develop relatively well.</p>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Income (€)</th>
                                    <th>Job positions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Agriculture</td>
                                    <td>2.45M/year</td>
                                    <td>60.000</td>
                                </tr>
                                <tr>
                                    <td>Industry</td>
                                    <td>5.21M/year</td>
                                    <td>120.000</td>
                                </tr>
                                <tr>
                                    <td>Tourism</td>
                                    <td>1.65M/year</td>
                                    <td>24.000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Totals</td>
                                    <td>9.31M/year</td>
                                    <td>204.000</td>
                                </tr>
                            </tfoot>
                        </table>
                        <p>These numbers are approximate and represent the total income and jobs in the region.</p>
                    </div>
                </div>

                <section class="col-md-4">
                    <div class="articulo position-sticky">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 class="fst-italic">About</h4>
                            <p class="mb-0">Visit our blog and read this month's news highlights and anything else of interest to you.</p>
                        </div>
                        <div class="p-4">
                            <h4 class="fst-italic">News</h4>
                            <ol classNAme="list-unstyled mb-0">
                                <li><Nav.Link href="/404error">March 2021</Nav.Link></li>
                                <li><Nav.Link href="/404error">February 2021</Nav.Link></li>
                                <li><Nav.Link href="/404error">January 2021</Nav.Link></li>
                                <li><Nav.Link href="/404error">December 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">November 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">October 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">September 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">August 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">July 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">June 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">May 2020</Nav.Link></li>
                                <li><Nav.Link href="/404error">April 2020</Nav.Link></li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}

export default Region;