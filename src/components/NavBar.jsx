import React from 'react'
import Wrapper from '../assets/wrappers/NavBarWrapper'
import logo from '../assets/images/logo.png';
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const NabBar = () => {
  return (
    <Wrapper>
      <div className="Container">
        <div className="Left">
          <img className='Logo' src={logo} alt="" />
          <select className='Classifieds' name="" id="">
            <option value="">Classifieds</option>
          </select>
        </div>

        <div className="Center">
          <div className="SearchContainer">
            <input type="text" placeholder='search here...' />
            <SearchOutlinedIcon style={{color:' rgba(49, 135, 237, 1)'}} />
          </div>
        </div>

        <div className="Right">
          <div className="MenuItem">
          <FavoriteBorderOutlinedIcon />
          </div>
          <div className="MenuItem">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingBasketIcon />
            </StyledBadge>
          </IconButton>
          </div>
          <div className="MenuItem">
            <Person2Icon/>
          </div>
          <div className="MenuItem">
            <button>Classifieds</button>
          </div>
          

        </div>

      </div>
    </Wrapper>
  )
}

export default NabBar