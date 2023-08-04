package com.jtspringproject.JtSpringProject.dao;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class AdminTest {

	@Test
	void addSuggestionToValidProductID()
	{
		Product p1 = new Product();
		Product p2 = new Product();
		p1.id = 15;
		p2.id = 14;
		
		Admin a = new Admin();
		
		a.addSuggest(p1.id, p2.id);
		
		assertEquals(p2.suggested_products[0],15);
	}
	@Test
	void trackFrequencyOfBoughtProducts()
	{
		Product p1 = new Product();
		Product p2 = new Product();
		Product p3 = new Product();
		p1.id = 15;
		p2.id = 14;
		p3.id = 16;
		
		Basket b = new Basket();
		
		for (int i = 0; i < 9; i++) {
			b.addProduct(p1);
			b.addProduct(p2);
			
			b.buy();
		}
		b.addProduct(p2);
		b.addProduct(p3);
		
		b.buy();
		
		Admin a = new Admin();
		
		float f1 = a.checkFrequency(14, 15);
		float f2 = a.checkFrequency(14, 16);
		
		if (f1 == 0.9 && f2 == 0.1)
			assertTrue(true);
		else
			assertFalse(true);
	}
	
	@Test
	void automateProductPairing()
	{
		Product p1 = new Product();
		Product p2 = new Product();
		Product p3 = new Product();
		p1.id = 15;
		p2.id = 14;
		p3.id = 16;
		
		Basket b = new Basket();
		
		for (int i = 0; i < 9; i++) {
			b.addProduct(p1);
			b.addProduct(p2);
			
			b.buy();
		}
		b.addProduct(p2);
		b.addProduct(p3);
		
		b.buy();
		
		Admin a = new Admin();
		
		float f1 = a.checkFrequency(14, 15);
		float f2 = a.checkFrequency(14, 16);
		//
		
		if (f1 == 0.9 && f2 == 0.1)
			assertEquals(p2.suggested_products[0],15);
		
		
	}
	void manualProductPairing()
	{
		Product p1 = new Product();
		p1.id = 14;
		Product p2 = new Product();
		p2.id = 15;
		
		Admin a = new Admin();
		
		a.createPair(p1, p2);
		if (p1.suggested_products[0] == p2.id && p2.suggested_products[0] == p1.id)
			assertTrue(true);
		else
			assertFalse(true);
	}
	@Test
	void displayProductPairs()
	{
		Product p1 = new Product();
		p1.id = 14;
		Product p2 = new Product();
		p2.id = 15;
		
		Admin a = new Admin();
		
		a.createPair(p1, p2);
		
		a.showAllPairs(p1);
		
	}
}
