import React, {useState} from 'react';
import './App.css';
import {Button, Card, CardDeck, Col, Container, Jumbotron, Row} from "react-bootstrap";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from "react-bootstrap-range-slider";

function App() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <header>
                <div className={'contenedor'}>
                    <nav className="menu">
                        <a href="#">Acerca de</a>
                        <a href="#">Trabajos</a>
                        <a href="#">Contacto</a>
                    </nav>

                    <div className={'contenedor-texto'}>
                        <div className={'texto'}>
                            <h1 className={'nombre'}>Jesús Brito</h1>
                            <h2 className={'profesion'}>Desarrollador Web/Móvil</h2>
                        </div>
                    </div>
                </div>
            </header>

            <section className={'main'}>
                <section className={'acerca-de'}>
                    <div className={'contenedor'}>
                        <div className={'foto'}>
                            <img src="img/profile.jpg" width="215" height="215" alt="Profile Jesús Brito"/>
                        </div>

                        <div className={'texto'}>
                            <h3 className={'titulo'}>Acerca de</h3>
                            <p>
                                Desarrollador Full Stack. Innovador, creativo, autodidacta y proactivo, en busca de crecimiento constante.
                                <br/>
                                Amo pasar tiempo con mi Familia y seres queridos, soy amante de las nuevas tecnologías y todo lo que engloba este apasionante mundo,  difruto mucho de la literatura de ciencia ficción y científica y me apasiona mucho compartir mi conocimiento con otras personas.
                            </p>
                        </div>
                    </div>
                </section>
            </section>

            <Container>

                <Row className={'align-items-center'}>
                    <Col md={4}>
                        <h3>Educación</h3>
                    </Col>

                    <Col md={8}>
                        <Row className={'row-card-education'}>
                            <Col md={12}>
                                <div className={'card-horizontal'}>
                                    <p>Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y
                                        Administrativas (UPIICSA).</p>
                                    <p>Lic. Ciencias de la informática (Pasante) </p>
                                    <p>Especialidad en Diseño de interfáces gráficas</p>
                                    <p>2015 - 2019.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className={'row-card-education'}>
                            <Col md={12}>
                                <div className={'card-horizontal'}>
                                    <p>Centro de Estudios Cientificos y Tecnológicos (CECyT) No.13.</p>
                                    <p>Tecnico en Ciencias de la informática.</p>
                                    <p>2012 - 2015.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={'align-items-center'}>
                    <Col md={4}>
                        <h3>Experiencia profesional</h3>
                    </Col>

                    <Col md={8}>
                        <Row className={'row-card-education'}>
                            <Col md={12}>
                                <div className={'card-horizontal-prof'}>
                                    <p>Empresa: Noktos</p>
                                    <p>Periodo: 2019 - 2020.</p>
                                    <p>Puesto: Desarrollador móvil.</p>
                                    <p>Responsabilidades: Durante mi estancia en la empresa me encargué del desarrollo y
                                        mantenimiento de la aplicación móvil, la cual está enfocada al sector
                                        hotelero </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className={'row-card-education'}>
                            <Col md={12}>
                                <div className={'card-horizontal-prof'}>
                                    <p>Empresa: WeeCompany</p>
                                    <p>Periodo: 01/12/2019 - 15/10/2019.</p>
                                    <p>Puesto: Desarrollador móvil android.</p>
                                    <p>Responsabilidades: Mantenimiento y reconstrucción de la aplicación móvil para la
                                        plataforma android, la cual está enfocada al mercado de salud y seguros.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className={'row-card-education'}>
                            <Col md={12}>
                                <div className={'card-horizontal-prof'}>
                                    <p>Empresa: SEDU-CDMX</p>
                                    <p>Periodo: 01/06/2018 - 15/12/2018.</p>
                                    <p>Puesto: Desarrollador web.</p>
                                    <p>Responsabilidades: Análisis de la problematica que existía en las escuelas de
                                        nivel básico para la recaudación de información. Desarrollo de una solución web
                                        que sirviera de apoyo para la SEDU en la recolección de información de interés
                                        sobre las diferentes escuelas de la CDMX.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <section>
                    <div className={'texto'}>
                        <h3 className={'titulo'}>Skills</h3>
                    </div>

                    <div className={'section-skills'}>
                        <Row>
                            <Col md={3}>
                                <Row className={'align-items-center'}>
                                    <Col md={6} className={'text-right'}>
                                        HTML 5
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='80' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center no-padding'}>
                                    <Col md={6} className={'text-right'}>
                                        CSS 3
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='80' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center'}>
                                    <Col md={6} className={'text-right'}>
                                        JavaScript
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='80' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center no-padding'}>
                                    <Col md={6} className={'text-right'}>
                                        Node.js
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='60' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <Row className={'align-items-center'}>
                                    <Col md={6} className={'text-right'}>
                                        Vue.js
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='60' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center no-padding'}>
                                    <Col md={6} className={'text-right'}>
                                        React
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='60' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center'}>
                                    <Col md={6} className={'text-right'}>
                                        Laravel
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='70' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center no-padding'}>
                                    <Col md={6} className={'text-right'}>
                                        MySQL
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='60' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                                <Row className={'align-items-center'}>
                                    <Col md={6} className={'text-right'}>
                                        Oracle 11g
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='60' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center no-padding'}>
                                    <Col md={6} className={'text-right'}>
                                        Android
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='70' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center'}>
                                    <Col md={6} className={'text-right'}>
                                        Java
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='60' tooltip='off'/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row className={'align-items-center no-padding'}>
                                    <Col md={6} className={'text-right'}>
                                        Flutter
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider
                                            value='60' tooltip='off'>
                                        </RangeSlider>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section>
                    <div className={'texto'}>
                        <h3 className={'titulo'}>Idiomas</h3>
                    </div>

                    <div className={'section-skills'}>
                        <Row>
                            <Col md={3}>
                                <Row className={'align-items-center'}>
                                    <Col md={6} className={'text-right'}>
                                        Inglés
                                    </Col>
                                    <Col md={6} className={'no-padding'}>
                                        <RangeSlider value='50'/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>

                <div className={'texto'}>
                    <h3 className={'titulo'}>Proyectos independientes</h3>
                </div>
                <CardDeck>
                    <Row className="row_experience">
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="img/people.jpg"/>
                                <Card.Body>
                                    <Card.Title>Audikyani</Card.Title>
                                    <Card.Text>
                                        Aplicación móvil desarrollada en Android Studio enfocada a ofrecer experiencias
                                        auditivas en la CDMX.
                                    </Card.Text>
                                    <small className="text-muted">Diciembre 2018</small>
                                </Card.Body>
                                <Card.Footer>
                                    
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="img/red-box.png"/>
                                <Card.Body>
                                    <Card.Title>Redbox</Card.Title>
                                    <Card.Text>
                                        Aplicación de escritorio desarrollada con la tecnología C# para la consulta y
                                        reroducción de auidos en distintas grabadoras.
                                    </Card.Text>
                                    <small className="text-muted">Julio 2019</small>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" block>
                                        Ver
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="img/ikea.jpg"/>
                                <Card.Body>
                                    <Card.Title>Sistema de almacén</Card.Title>
                                    <Card.Text>
                                        Sistema Web enfocado a la administración y control de materiales utilizados
                                        dentro del laboratorio del CINVESTAV
                                    </Card.Text>
                                    <small className="text-muted">Mayo 2019</small>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" block>
                                        Ver
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="row_experience">
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="img/coffee.jpg"/>
                                <Card.Body>
                                    <Card.Title>Página cafetería</Card.Title>
                                    <Card.Text>
                                        Página web desarrollada para la promoción de una pequeña cafetería.
                                    </Card.Text>
                                    <small className="text-muted">Mayo 2018</small>
                                </Card.Body>
                                <Card.Footer>
                                    
                                </Card.Footer>
                            </Card>
                        </Col>
                        
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="img/coffee.jpg"/>
                                <Card.Body>
                                    <Card.Title>Pagina de promoción para instituto educativo</Card.Title>
                                    <Card.Text>
                                        Página web desarrollada para la promoción y .
                                    </Card.Text>
                                    <small className="text-muted">Mayo 2018</small>
                                </Card.Body>
                                <Card.Footer>
                                    
                                </Card.Footer>
                            </Card>
                        </Col>


                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="img/coffee.jpg"/>
                                <Card.Body>
                                    <Card.Title>Pagina de promoción para instituto educativo</Card.Title>
                                    <Card.Text>
                                        Página web desarrollada para la promoción y .
                                    </Card.Text>
                                    <small className="text-muted">Mayo 2018</small>
                                </Card.Body>
                                <Card.Footer>
                                    
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="row_experience">
                        <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src="img/people.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Audikyani</Card.Title>
                                        <Card.Text>
                                            Aplicación móvil desarrollada en Android Studio enfocada a ofrecer experiencias
                                            auditivas en la CDMX.
                                        </Card.Text>
                                        <small className="text-muted">Diciembre 2018</small>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="primary" block>
                                            Ver
                                        </Button>
                                    </Card.Footer>
                                </Card>
                        </Col>

                        <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src="img/people.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Audikyani</Card.Title>
                                        <Card.Text>
                                            Aplicación móvil desarrollada en Android Studio enfocada a ofrecer experiencias
                                            auditivas en la CDMX.
                                        </Card.Text>
                                        <small className="text-muted">Diciembre 2018</small>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="primary" block>
                                            Ver
                                        </Button>
                                    </Card.Footer>
                                </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </Container>
            <footer>
                <div className={'contenedor'}>
                    <section className={'contacto'}>
                        <h3 className={'titulo'}>Contacto</h3>
                        <form className={'formulario'} action="">
                            <input type="text" placeholder="Nombre" name="nombre" required/>
                            <input type="email" placeholder="Correo" name="correo" required/>
                            <textarea name="mensaje" placeholder="Mensaje:"/>
                            <input className={"boton"} type="submit" value="Enviar"/>
                        </form>
                    </section>
                </div>

                <section className={'redes-sociales'}>
                    <div className={'contenedor'}>
                        <a className="twitter" href="https://twitter.com/chucho2911">
                            <i className="fa fa-twitter"/></a>
                        <a className="whatsapp"
                           href="https://api.whatsapp.com/send?phone=525533684635&text=%C2%A1Hola!%20Me%20interesa%20tu%20trabajo">
                            <i className="fa fa-whatsapp"/></a>
                        <a className="youtube" href="mailto:jesus291196@gmail.com">
                            <i className="fa fa-envelope"/></a>
                        <a className="github" href="http://www.github.com/JesusBrito">
                            <i className="fa fa-github"/></a>
                        <a className="instagram" href="https://www.linkedin.com/in/juanjesusbritobrito/">
                            <i className="fa fa-linkedin"/></a>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default App;
