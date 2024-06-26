import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { Form } from "@components/Form";
import AxiosInstance from "@/services/axiosInstancia";
import { Brand } from "@/types";
import { useEffect } from "react";
import { TypographyCustomized } from "@/components/TypographyCustomized";
import { getBrandsCars } from "@/services/endpoints";
import { useDispatch } from "react-redux";
import { setupBrands } from "@/store/reducers/brands";

export default function Home({
  brands,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setupBrands(brands));
  }, []);

  return (
    <>
      <TypographyCustomized variant="h4">Tabela Fipe</TypographyCustomized>
      <TypographyCustomized variant="h5">
        Consulte o valor de um veículo de forma gratuita
      </TypographyCustomized>
      <Form />
    </>
  );
}

export const getStaticProps = (async (context) => {
  const res = await AxiosInstance.get(getBrandsCars);
  const brands = Object.values(res.data).map((item: any) => ({
    label: item.nome,
    id: item.codigo,
  })) as unknown as Brand[];

  return { props: { brands } };
}) satisfies GetStaticProps<{
  brands: Brand[];
}>;
