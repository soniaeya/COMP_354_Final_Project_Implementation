package com.jtspringproject.JtSpringProject.dao;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class productDaoTest {

	@Test
	void addSuggestionWhenIDdoesNotExist() {
		int product_ID = 15;
		
		Product p = new Product();
		p.addSuggestion(product_ID);
		assertEquals(15,p.suggested_products[0]);
	}
	@Test
	void addSuggestionWhenIDExists()
	{
		int product_ID = 15;
		
		Product p = new Product();
		p.addSuggestion(product_ID);
		p.addSuggestion(product_ID);
		
		assertNull(p.suggested_products[1]);
	}
	@Test
	void removeSuggestionWhenIDdoesNotExist()
	{
		int product_ID = 15;
		
		Product p = new Product();
		p.removeSuggestion(product_ID);
		
		assertTrue(p.errorMsgSent);
	}
	@Test
	void removeSuggestionWhenIDExists()
	{
		int product_ID = 15;
		
		Product p = new Product();
		p.addSuggestion(product_ID);
		p.removeSuggestion(product_ID);
		assertNotEquals(15,p.suggested_products[0]);
	}
	@Test
	void removeAllSuggestions()
	{
		Product p = new Product();
		for (int i = 1; i < 11; i++)
			p.addSuggestion(i);
		
		p.clearSuggest();
		
		if (p.suggested_products.length > 1)
			assertTrue(false);
		else
			assertTrue(true);
	}

}
