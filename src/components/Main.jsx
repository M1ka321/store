import { Link } from 'react-router-dom';
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
import {basketProd, products} from "../data/products";
import Snackbar from "@mui/material/Snackbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import {useState} from "react";




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

export function Hide(props) {
  const [open, setOpen] = React.useState(false);
  const handleChange = (e) => {
    props.setCount(e.target.value)
  }
  return (
    <Box >
      <TextField sx={{minWidth: 50, maxWidth: 100}} fullWidth label="Число" value={props.count} onChange={handleChange} />
      <Button sx={{marginLeft: '15 px'}}>
        <ListItemText onClick={()=>{setOpen(true)}}>Добавить товар</ListItemText>
        <Dialog
          style={{textAlign: "center"}}
          open={open}
          onClose={() => {setOpen(false)}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Добавление товара"}
          </DialogTitle>
          <DialogContent style={{display:'flex', flexDirection: 'column', minWidth: '500px'}}>
            <TextField
              value={props.product.title}
              onChange={e => props.setProduct({...props.product, title: e.target.value})}
              style={{margin:'15px'}}
              id="outlined-basic"
              label="Описание"
              variant="outlined"
            />
            <TextField
              value={props.product.price}
              onChange={e => props.setProduct({...props.product, price: e.target.value})}
              style={{margin:'15px'}}
              id="outlined-basic"
              label="Цена"
              variant="outlined"
            />
            <Button onClick={props.addProduct }>Сохранить </Button>
            <Button onClick={()=>{setOpen(false)}}> Отминет </Button>
          </DialogContent>
        </Dialog>
      </Button>
    </Box>
  );
}

export function Menu(props) {


  return (
    <Paper
      className={styles.Menu}
      sx={{ width: 250 }}>
      <MenuList dense >
        <Link to={'/'}>
          <MenuItem>
            <ListItemText inset>Menu Item 1</ListItemText>
          </MenuItem>
        </Link>
        <Link to={'/basket'}>
          <MenuItem>
            <ListItemText inset>Menu Item 2</ListItemText>
          </MenuItem>
        </Link>

      </MenuList>
    </Paper>
  );
}



export function Main(props) {

  const [open, setOpen] = React.useState(false);
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {setOpen(false)}}>
        <CloseIcon fontSize="small"/>
      </IconButton>
    </React.Fragment>
  );
  return (
    <Box>
      <Box style={{display: 'flex'}}>
        <Box>
          <FullWidthTextField />
        </Box>
        <Box className={styles.Hide}>
          <Hide count={props.count}
            setCount={props.setCount}
            addProduct={props.addProduct}
            product={props.product}
            setProduct={props.setProduct}
          />
        </Box>
      </Box>
      <Box style={{display: 'flex'}}>
        <Box style={{width: '250px'}}>
          <Menu

          />
          <getAllProducts/>
        </Box>
        <Box>
          <Products
            products={props.products}
            addToBasket={props.addToBasket}
            setOpen={setOpen}
            setProducts={props.setProducts}
            delCard={props.delCard}
          />
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
        <Card className={styles.Card}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {el.title}
            </Typography>
            <Typography variant="h5" component="div">
              Цена: {el.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>{
              props.setOpen(true);
              props.addToBasket(el)
            }}>Добавить в корзину</Button>
            <Button size="small">Редактировать</Button>
            <Button size="tiny" onClick={()=>{
              props.setProducts(props.products.filter(item=> el.id !== item.id))
            }}>Скрыть</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}


