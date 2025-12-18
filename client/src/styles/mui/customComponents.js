import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyCard = styled(Card)(({ theme }) => ({
  borderRadius: "25px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 0 8px 4px #00000010",
}));

export const MyButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  textTransform: "none",
  padding: "6px 16px",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const CustomCard = (props) => (
  <MyCard>
    <CardMedia sx={{ height: 300 }} image={props.image} title={props.name} />
    <CardContent>
      <Typography gutterBottom variant="h5">
        {props.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
    <CardActions>
      <MyButton size="small">Share</MyButton>
      <MyButton size="small">Learn More</MyButton>
    </CardActions>
  </MyCard>
);
