"use client";
import { useEffect, useState } from "react";
import { Product } from "@gstore/core";
import useProducts from "@/data/hooks/useProducts";
import BannerOrder from "@/components/product/BannerOrder";
import ExpertReview from "@/components/product/ExpertReview";
import PriceMeter from "@/components/product/PriceMeter";
import ProductInfo from "@/components/product/ProductInfo";
import ProductNotFound from "@/components/product/ProductNotFound";
import ProductTitle from "@/components/product/ProductTitle";
import UserReviews from "@/components/product/UserReviews";

export default function ProductPage(props: any) {
  const { getProductById } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductById(+props.params.id).then(setProduct);
  }, [props.params.id, getProductById]);

  return product ? (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInfo product={product} />
        <BannerOrder product={product} />
        <PriceMeter product={product} />
      </div>
      <UserReviews product={product} />
      <ExpertReview product={product} />
    </div>
  ) : (
    <ProductNotFound />
  );
}
