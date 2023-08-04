import React from 'react';
import { render } from '@testing-library/react';
import Coupons from '../components/Coupons'; // Adjust the path to your Coupons component file
import '@testing-library/jest-dom/extend-expect';

describe('Coupons Component', () => {
	test('it renders without crashing', () => {
		const username = "John";
		const totalPrice = 50;
		const numCoupons = 5;

		// Render the Coupons component with the test data
		const { getByText } = render(<Coupons username={username} totalPrice={totalPrice} numCoupons={numCoupons} />);
		// Check if some expected content is present in the rendered output
		expect(getByText(`Hi ${username}!`)).toBeInTheDocument();
	});
});

