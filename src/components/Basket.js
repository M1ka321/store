import React from "react";
import {Menu} from "./Main";
import Box from "@mui/material/Box";
import {basketProd} from "../data/products";
import {Products} from "./Main";
import Card from "@mui/material/Card";
import styles from "./Main.module.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";





export function Basket() {
  const [open, setOpen] = React.useState(false);
  return(
    <Box style={{display: 'flex'}}>
      <Box style={{width: '250px'}}>
        <Menu/>
      </Box>
      <Box>
        <BasketProd products={basketProd} setOpen={setOpen}/>
      </Box>
    </Box>

  )
}

export function BasketProd(props) {
  return(
    <Box style={{display:'inline-flex', flexWrap:'wrap'}}>
      {props.products.map(el => (
        <Card className={styles.Card}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {el.title}
            </Typography>
            <Typography variant="h5" component="div">
              Цена: {el.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>{props.setOpen(true)}}>Удалить из корзины</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}



