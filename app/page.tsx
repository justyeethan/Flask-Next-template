"use client";

import Navigation from "./_components/Navigation/Navigation";
import { Button } from "@nextui-org/react";
import useApiQuery from "./_hooks/useApiQuery";
import Title from './_components/Typography/Title';
import { Container } from "@mui/material";

export default function Home() {
  // Example for getting data conditionally
  const { data, refetch, isLoading, isRefetching, isError } = useApiQuery(
    "/version",
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  // Fetch data from useApiQuery
  const handleClick = () => {
    refetch();
  };

  return (
    <>
      <Navigation activeLink='Home' />
      <Title>Next/Flask Template</Title>
      <Container>
        <Button onClick={handleClick} color="primary">
          Get API
        </Button>
        {isError && <p>There was an error with getting the data. </p>}
        <p>Data: {!isLoading && !isRefetching ? data?.data : "...loading"}</p>
      </Container>
    </>
  );
}
