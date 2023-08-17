"use client";
import { useDispatch, useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { Grid } from "@mantine/core";
import { useEffect } from "react";
import { loadProduct } from "@/lib/loadData";
import { companyProduct, product } from "@/feature/data/productSlice";
import ServiceCard from "./ServiceCard";
// posts will be populated at build time by getStaticProps()
export default function ProductList() {
  const curlanguage = useSelector((rootState) => language(rootState));
  // const newsCheck = await loadNews();
  const productInfo = useSelector((rootState) => product(rootState));

  let serviceList = productInfo.productData.value.product;

  const dispatch = useDispatch();

  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (serviceList.length == 0) {
        if (
          JSON.parse(localStorage.getItem("productList") || "[]").length == 0 ||
          JSON.parse(localStorage.getItem("productList") || "[]").length == 1
        ) {
          const productCheck = await loadProduct();
          dispatch(companyProduct(productCheck));
        } else {
          serviceList = JSON.parse(localStorage.getItem("productList") || "[]");
        }
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <Grid className="flex justify-center" justify="center">
      {serviceList.map(
        (
          svc: {
            type: any;
            descriptionEn1: any;
            titleEn: any;
            _id: any | null | undefined;
            image: any;
            title: any;
            description1: any;
            link: any;
          },
          i: any,
        ) => {
          return (
            <Grid.Col key={svc._id} md={6} lg={2}>
              <ServiceCard
                src={svc.image}
                title={
                  curlanguage.changeLanguage.value == "en"
                    ? svc.titleEn
                    : svc.title
                }
                description={
                  curlanguage.changeLanguage.value == "en"
                    ? svc.descriptionEn1
                    : svc.description1
                }
                link={
                  svc.type == "Solution"
                    ? `/${svc.type}/${svc._id}`
                    : `/${svc.type}`
                }
                i={i}
              />
            </Grid.Col>
          );
        },
      )}
    </Grid>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
