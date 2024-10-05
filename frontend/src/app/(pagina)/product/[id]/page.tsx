"use client";
import { Product } from "@/core";
import useProducts from "@/data/hooks/useProducts";
import { useEffect, useState } from "react";

export default function ProductPage(props: any) {
  const { getProductById } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductById(+props.params.id).then(setProduct);
  }, [props.params.id, getProductById]);

  return product ? (
    <div>{product?.name}</div>
  ) : (
    <div>Produto não encontrado</div>
  );
}
