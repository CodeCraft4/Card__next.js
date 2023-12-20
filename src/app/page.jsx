import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { DATA } from "./constant/page";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Container maxWidth={"md"}>
        <Grid container gap={5} mt={7}>
          {DATA.map((item) => (
            <Grid
              item
              md={5}
              key={item}
              sx={{
                boxShadow: "2px 4px 19px gray",
                borderRadius: 9,
                textAlign: "center",
                bgcolor:'orange',
                p: 3,
              }}
            >
              <Image
                src={item.img}
                alt="img"
                width={150}
                height={150}
                style={{borderRadius:'50%'}}
              />
              <Typography>{item.title}</Typography>
              <Typography>{item.description}</Typography>
              <Typography>${item.price}</Typography>
              <Button variant="contained" color="secondary">
                More
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default page;
