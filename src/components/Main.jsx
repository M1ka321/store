import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styles from './Main.module.css'
import Check from '@mui/icons-material/Check';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {products,basketProd} from "../data/products";
import Snackbar from "@mui/material/Snackbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";



export function FullWidthTextField() {
  return (
    <Box
      sx={{minWidth: 400, maxWidth: 600}}
      className={styles.Search}
    >
      <TextField fullWidth label="Поиск" id="search" />
    </Box>
  );
}

export function Hide() {
  return (
    <Box
      sx={{minWidth: 50, maxWidth: 100}}
    >
      <TextField fullWidth label="Число" id="Hide" />
    </Box>
  );
}

export function Menu() {

  return (
    <Paper
      className={styles.Menu}
      sx={{ width: 250 }}>
      <MenuList dense >
        <MenuItem>
          <ListItemText inset>Menu Item 1</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Menu Item 2</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <Check />
        </ListItemIcon>
          <ListItemText inset>Menu Item 3</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Menu Item 4</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Menu Item 5</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}


export function Main() {
  const [open, setOpen] = React.useState(false);
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          setOpen(false)
        }}
      >
        <CloseIcon fontSize="small"/>
      </IconButton>
    </React.Fragment>
  );
  return (
    <Box>
      <Box style={{display: 'flex'}}>
        <Box>
          <FullWidthTextField/>
        </Box>
        <Box className={styles.Hide}>
          <Hide/>
        </Box>
      </Box>
      <Box style={{display: 'flex'}}>
        <Box style={{width: '250px'}}>
          <Menu/>
        </Box>
        <Box>
          <Products products={products} setOpen={setOpen} />
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          setOpen(false)
        }}
        message="Товар добавлен в корзину"
        action={action}
      />
    </Box>
  );
}

export function Products(props) {
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
            <Button size="small" onClick={()=>{props.setOpen(true)}}>Добавить в корзину</Button>
            <Button size="small">Редактировать</Button>
            <Button size="tiny">Скрыть</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

