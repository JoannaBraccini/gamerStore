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
    try {
      const resp = await fetch(`${baseUrl}/products/${id}`);
      const produto = await resp.json();
      return produto ?? null;
    } catch (error) {
      console.error("Erro ao obter produto por id", error);
      return null;
    }
  }, []);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return {
    products,
    getProductById,
  };
}
