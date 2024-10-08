import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Clients from "../../Clients/Clients";
import { fadeIn } from '../../../Functions/GlobalAnimations';
import { ClientData02 } from '../../Clients/ClientsData';

const CertifiedNpos = () => {
    const [isCarousel, setIsCarousel] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setIsCarousel(true);
            } else {
                setIsCarousel(false);
            }
        };

        // Set the initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="py-[160px] max-sm:py-[70px] bg-[#f7f7f7] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray">
            <Container>
                <Row>
                    <Col className="mb-[6%]">
                        <h6 className="text-gray-700 text-center max-sm:text-3xl text-4xl font-extrabold mb-[25px] sm:mb-[15px]">
                            Meet our recently certified NPOs
                        </h6>
                    </Col>
                </Row>
                <Clients
                    grid="row-cols-1 row-cols-md-2 row-cols-lg-6 gap-y-5"
                    theme="client-logo-style-02"
                    data={ClientData02}
                    animation={fadeIn}
                    carousel={isCarousel}
                />
            </Container>
        </section>
    );
};

export default CertifiedNpos;
