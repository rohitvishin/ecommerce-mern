/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
import ProductList from '../../components/Store/ProductList/featured';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class Homepage extends React.PureComponent {

  componentDidMount() {
    // Fetch products if not already loaded
    if (!this.props.products || this.props.products.length === 0) {
      this.props.featuredProducts();
    }
    console.log(this.props.products);
  }

  render() {
    const isLoading = this.props.isLoading;
    // Select 4 featured products (could be improved to use a real featured flag)
    const featuredProducts = (this.props.products || []).slice(0, 4);

    return (
      <div className='homepage premium-homepage-bg pb-5'>
        <Container fluid className='pt-4'>
          <Row className='flex-row mb-4'>
            <Col xs='12' lg='12' className='order-lg-2 mb-3 px-3 px-md-2'>
              <div className='home-carousel shadow rounded-4 overflow-hidden'>
                <CarouselSlider
                  swipeable={true}
                  showDots={true}
                  infinite={true}
                  autoPlay={true}
                  slides={banners}
                  responsive={responsiveOneItemCarousel}
                >
                  {banners.map((item, index) => (
                    <img key={index} src={item.imageUrl} className='w-100' style={{ borderRadius: '18px', objectFit: 'cover', maxHeight: 350 }} />
                  ))}
                </CarouselSlider>
              </div>
            </Col>
          </Row>

          <Row className='justify-content-center mb-5'>
            <Col xs='12' className='text-center mb-4'>
              <h2 className='display-5 fw-bold text-dark mb-2'>Featured Products</h2>
              <p className='lead text-muted'>Handpicked for you from our best selection</p>
            </Col>
            <Col xs='12'>
              <Card className='border-0 rounded-4 p-4 premium-featured-card-bg'>
                {isLoading ? (
                  <LoadingIndicator />
                ) :
                  <ProductList products={featuredProducts} />
                }
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    products: state.product.products,
    isLoading: state.product.isLoading,
  };
};

export default connect(mapStateToProps, actions)(Homepage);
