import React from 'react';
import { render } from '@testing-library/react';
import Admin from '../pages/admin'; // Update the path to your actual file location

describe('Admin Component', () => {
	test('renders Add Suggestion text', () => {
		const { getByText } = render(<Admin />);
		const linkElement = getByText(/Add/i);
		expect(linkElement).toBeInTheDocument();
	});
});
