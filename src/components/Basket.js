import React from "react";
import {Menu} from "./Main";
import Box from "@mui/material/Box";
import {basketProd, products} from "../data/products";
import {Products} from "./Main";
import Card from "@mui/material/Card";
import styles from "./Main.module.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';





export function Basket(props) {
  const [open, setOpen] = React.useState(false);;
  console.log(props.basketState)


  return(
    <Box style={{display: 'flex'}}>
      <Box style={{width: '250px'}}>
        <Menu/>
        <Sale delBasket={props.delBasket}
              basketState={props.basketState}
              setBasketState = {props.setBasketState}
              setOpen={setOpen}
        />
      </Box>
      <Box>
        <BasketProd
          basketState={props.basketState}
          setBasketState = {props.setBasketState}
          setOpen={setOpen}
        />
      </Box>
      {props.basketState.map(el => (
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Удалить товар из корзины?"}
        </DialogTitle>
        <DialogActions>
          <Button
           onClick={()=>{ setOpen(false);
            props.setBasketState(props.basketState.filter(item=> el.id !== item.id))
          }}>Да</Button>
          <Button onClick={()=>{ setOpen(false)}} autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
        ))}
    </Box>

  )
}

export function BasketProd(props) {

  return(
    <Box style={{display:'inline-flex', flexWrap:'wrap'}}>
      {props.basketState.map(el => (
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
            <Button size="small" onClick={()=>{
              props.setOpen(true)
            }}>Удалить из корзины</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export function Sale (props) {

  const [open, setOpen] = React.useState(false);
  const [choice1, setChoice1] = React.useState('Card');
  const [choice2, setChoice2] = React.useState('Не выбрано');

  const handleChange1 = (e) => {
    setChoice1(e.target.value)
    }
  const handleChange2 = (e) => {
    setChoice2(e.target.value)
  }
  return(
    <Paper
      className={styles.Menu}
      sx={{ width: 250, height: 360,}}>
      <MenuList dense >
          <MenuItem >
            <Button variant="outlined" onClick={()=>{props.delBasket()}}>Очистить корзину</Button>
          </MenuItem>
      </MenuList>
      <FormControl>
        <FormLabel
          style={{textAlign: "center", marginTop: 20}}
          id="demo-row-radio-buttons-group-label"
        >
          Способ оплаты
        </FormLabel>
        <RadioGroup
          onChange={handleChange1}
          value={choice1}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Card" control={<Radio />} label="Карта" />
          <FormControlLabel value="Cash" control={<Radio />} label="Наличные" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Доставка</InputLabel>
          <Select
            onChange={handleChange2}
            value={choice2}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={'Доставка'}>Доставка</MenuItem>
            <MenuItem value={'Самовывоз'}>Заберу сам</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box style={{marginTop: 90, marginLeft:50, alignItems: "center"}}>
        <Button variant="outlined" onClick={()=>{setOpen(true)}}>
          Сохранить
        </Button>
        <Dialog
          open={open}
          onClose={() => {setOpen(false)}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Заказ успешно создан"}
          </DialogTitle>
          <DialogContent>
              Способ оплаты: {choice1}
              Способ доставки: {choice2}
          </DialogContent>
        </Dialog>
      </Box>
    </Paper>
  )
}



