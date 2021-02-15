import React from 'react'
import { Col, Card, Row, Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay>

                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{width:'100%',maxHeight:'150px'}}
                            src={`https://boiling-eyrie-73941.herokuapp.com/${image}`} />
                    </div>
                ))}
                
            </Carousel>
            
        </div>
    )
}

export default ImageSlider
