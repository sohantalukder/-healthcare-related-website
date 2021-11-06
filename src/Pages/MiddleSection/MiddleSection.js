import React from 'react';
import { Accordion, ProgressBar } from 'react-bootstrap';
import './middleSection.css'

const MiddleSection = () => {
    return (
        <div className='mx-5 my-5'>
            <div>
                <h3> Our customer Progress of last few years (2016-2021)</h3>
                <div>
                    <ProgressBar striped variant="success" now={40} />

                    <ProgressBar striped variant="info" now={60} />
                    <ProgressBar striped variant="warning" now={80} />
                    <ProgressBar striped variant="danger" now={90} />
                    <ProgressBar striped variant="danger" now={90} />
                </div>

                <div className='accortion-items'>
                    <h3> Some Doctors Feedback</h3>
                    <div>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Why this health center is best?</Accordion.Header>
                                <Accordion.Body>
                                    The way they handle customers are really great and we know it will be increased in future , so everybody is recoomemded to visit there hospital.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>About prices?</Accordion.Header>
                                <Accordion.Body>
                                    We are very glad to inform you that ,in this hospityal everything is very low price.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MiddleSection;