package com.jtspringproject.JtSpringProject.dao;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class BasketTest {

	@Test
	void calculateBasketTotal()
	{
		Product p1 = new Product();
		p1.price = 25;
		
		Product p2 = new Product();
		p2.price = 32;
		
		Basket b = new Basket();
		
		b.addProduct(p1);
		b.addProduct(p2);
		
		assertEquals(b.Total_Price,32+25);
	}
	
	@Test
	void addProductToBasket()
	{
		Basket b = new Basket();
		Product p = new Product();
		
		b.addProduct(p);
		
		assertEquals(p,b.ItemsList[0]);
		
	}
	@Test
	void removeProductFromBasket()
	{
		Basket b = new Basket();
		Product p = new Product();
		
		b.addProduct(p);
		b.removeProduct(0);
		
		assertEquals(b.ItemsList.length, 0);
	}
	@Test
	void createNewCustomBasket()
	{
		Basket b = new Basket();
		int temp = b.basketList.length;
		b.createCustom();
		
		assertEquals(b.basketList.length,temp+1);
		
	}
	@Test
	void applyCouponDiscount()
	{
		Product p1 = new Product();
		p1.price = 50;
		
		Product p2 = new Product();
		p2.price = 50;
		
		Basket b = new Basket();
		Coupon c = new Coupon();
		c.amount = 75;
		b.addProduct(p1);
		b.addProduct(p2);
		
		b.applyCoupon(c);
		
		assertEquals(b.Total_Price, 25);
	}
}
