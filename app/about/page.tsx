'use client';

import { Chip } from "@nextui-org/react";
import Navigation from "../_components/Navigation/Navigation";
import Title from "../_components/Typography/Title";
import useApiQuery from "../_hooks/useApiQuery";
import { Container } from "@mui/material";


export default function About() {
  const { data, isLoading, isError } = useApiQuery(
    "/people",
  );
  const people = data?.data;
  console.log(people);
  return (
    <>
      <Navigation activeLink="About" />
      <Title>About</Title>
      <Container>
        <h1 className="mb-5">People from API:</h1>
        {isError && <h1>There was something wrong with getting people from the API</h1>}
        {!isLoading ? people?.map((person: string) => {
          return (
            <>
              <Chip color="primary" className="ml-5">
                {person}
              </Chip>
            </>
          )
        }) : "...loading"}
      </Container>
    </>
  );
}
