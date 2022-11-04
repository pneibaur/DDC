import * as React from "react"
import { Carousel } from "react-bootstrap"

const Testimonial = () => {
    return (
        <div style={{minHeight: 50}}>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div style={{ minHeight: 5 }}>
                            <h4>First</h4>
                            <p><i>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </i></p>
                            <p> - Quote Person</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div style={{ minHeight: 5 }}>
                            <h4>Second</h4>
                            <p><i>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </i></p>
                            <p> - Quote Person</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div style={{minHeight: 5}}>
                        <h4>Third</h4>
                        <p><i>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </i></p>
                        <p> - Quote Person</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Testimonial