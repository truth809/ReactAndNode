import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import { Col, Card, Row, Carousel } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)

    useEffect(() => {

        let body = {
            skip: Skip,
            limit: Limit
        }

        getProducts(body)
        
    }, [])

    const getProducts = (body) => {
        axios.post('/api/product/products', body)
        .then(response => {
            if(response.data.success) {
                if(body.loadMore) {
                    setProducts([...Products, ...response.data.productInfo])
                } else {
                    setProducts(response.data.productInfo)
                }
                setPostSize(response.data.postSize)
            } else {
                alert("상품들을 가져오는데 실패 했습니다.")
            }
        })
    }

    const loadMoreHandler = () => {
        let skip = Skip + Limit
        let body = {
            skip: Skip,
            limit: Limit,
            loadMore: true
        }
        
        getProducts(body)
        setSkip(skip)

    }

    const renderCards = Products.map((product, index) => {

        
        return <Col lg={6} md={8} xs={24} key={index}>
        
                <Card
                    cover={<ImageSlider images={product.images} />}
                >
                    <Meta 
                        title={product.title}
                        description={`$${product.price}`}
                    />
                </Card>
            </Col>
    })

    
    
    
    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Let's Travel Anywhere<RocketOutlined /></h2>
            </div>

            {/* filter */}
            {/* serch */}
            {/* cards */}

            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>
            
            
            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={loadMoreHandler}>더보기</button>
                </div>
            }

            

        </div>
    )
}

export default LandingPage
