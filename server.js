const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const RESTAURANT = require('./data/restaurant');
const app = express();

// console.log(RESTAURANT)


//**********************************
//             middleware
//***********************************
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', './views')

//**********************************
//              ROUTES {L.A.B.S}
//***********************************

// Index
app.get('/', (req, res) => {
  res.render('home.ejs', {
      restaurant: RESTAURANT,
      title: RESTAURANT.name,
    

  });
});

app.get('/', (req, res) => {
  res.render('nav.ejs')
})

app.get('/menu', (req, res) => {
  res.render('menu.ejs', {
    restaurant : RESTAURANT,
    fullMenu: RESTAURANT.menu,
    title: RESTAURANT.name,
  
  })
})
app.get('/menu/:category', (req, res) => {
  const menuCategory = res.params.menuCategory
})


/******************************************************** 
 *  LISTENING* 
**********************************************************/
const PORT = 3005
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
