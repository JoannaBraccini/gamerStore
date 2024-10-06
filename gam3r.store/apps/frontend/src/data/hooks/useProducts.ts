"use client";
import { Product } from "@gstore/core";
import { useCallback, useEffect, useState } from "react";

const baseUrl = "http://localhost:4000";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts(): Promise<Product[]> {
    const resp = await fetch(`${baseUrl}/products`);
    const products = await resp.json();
    return products ?? [];
  }

  const getProductById = useCallback(async function getProductById(
    id: number
  ): Promise<Product | null> {
    const resp = await fetch(`${baseUrl}/products/${id}`);
    const product = await resp.json();
    return product ?? null;
  }, []);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return {
    products,
    getProductById,
  };
}
