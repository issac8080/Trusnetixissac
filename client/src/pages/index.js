import Head from "next/head";
import { useEffect, useState } from "react"; //React Hook for State

// Material
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@mui/material";

import MyAppBar from "@/components/common/MyAppBar";

import { lightTheme, darkTheme } from "@/styles/mui/theme";
import { CustomCard, MyCard } from "@/styles/mui/customComponents";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, getActiveTheme } from "@/redux/reducers/themeReducer";

export default function Home() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;

  useEffect(() => {
    dispatch(getActiveTheme()); // To get theme from Cookie
  }, []);

  // const [visible, setVisible] = useState(false); // Always call hooks at the top of the function.
  // const [currentTheme, setCurrentTheme] = useState("light");

  const theme = useTheme();

  const movies = [
    {
      name: "Avengers",
      img: "https://tse3.mm.bing.net/th/id/OIP.0sL7kz85Olcrwk_GIrClYAHaF7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Directed By Joss Whedon",
    },
    {
      name: "Terminator",
      img: "https://townsquare.media/site/295/files/2019/10/Terminator-Orion.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
      desc: "Directed By James Cameron",
    },
    {
      name: "Inception",
      img: "https://images5.alphacoders.com/112/1122037.jpg",
      desc: "Directed By Chris Nolan",
    },
    {
      name: "Jurassic Park",
      img: "https://i.ytimg.com/vi/Rc_i5TKdmhs/maxresdefault.jpg",
      desc: "Directed By Steven Spielberg",
    },
    {
      name: "Superman",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b23ca798-6ef7-4aa1-9d22-aeb7dd27d065/demni6y-25f779a9-6b77-4d04-95be-7696f40e03ec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyM2NhNzk4LTZlZjctNGFhMS05ZDIyLWFlYjdkZDI3ZDA2NVwvZGVtbmk2eS0yNWY3NzlhOS02Yjc3LTRkMDQtOTViZS03Njk2ZjQwZTAzZWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1oiAL5TnS-Je3MravqcbFJ98ev2y0ublYfO9YwklchA",
      desc: "Directed by James Gunn",
    },
  ];

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <Head>
          <title>The Movie Lovers Club | Your Favourite Movie Articles!</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar />
        <Box height="25px" />
        <Box>
          <Container>
            <Grid container spacing={2} direction="row" justifyContent="center">
              {movies ? (
                movies.map((movie) => (
                  <Grid size={{ xl: 4, md: 4, xs: 12 }}>
                    <CustomCard
                      name={movie.name}
                      image={movie.img}
                      description={movie.desc}
                    />
                  </Grid>
                ))
              ) : (
                <></>
              )}
            </Grid>
          </Container>
          {/* <Button onClick={() => setVisible(!visible)}>Toggle</Button>

            <Box height="20px" />

            {visible ? (
              <Box height="200px" sx={{ background: "pink", width: "500px" }} />
            ) : (
              <></>
            )} */}
        </Box>
      </ThemeProvider>
    </>
  );
}
