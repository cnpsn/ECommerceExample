import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../src/Components/HomeSc/ProductCard';

test('renders correctly', () => {
    const tree = renderer.create(<ProductCard item={{ id: '1', brand: 'Brand', name: 'Product', price: '100', image: 'http://example.com/image.jpg', isFavorite: false }} />).toJSON();
    expect(tree).toMatchSnapshot();
});
