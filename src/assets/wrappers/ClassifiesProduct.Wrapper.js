import styled from "styled-components";

const Wrapper = styled.section`

.Container{
padding: 10px;
background-color: #E5E5E5;
height: 300px;
}

.ProductCard{
    height: 250px;
    width: 200px;
    background-color: white;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    cursor: pointer;
    
}


.Pro_Image{
    position: relative;
}
.urgent_sale{
    height: 20px;
    width: 80px;
    background-color: rgba(0, 198, 215, 1);
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 30px;
    border-radius: 8px 0px 0 8px;
    display: flex;
    justify-content: center;
    
    
}
.urgent_sale>p{
    font-size: 10px;
    color: white;
}

.Pro_Image>img{
    width: 200px;
    height: 180px;
}
.Pro_price{
    display: flex;
    justify-content: space-between;
}
.Pro_price>p{
    color: rgba(0, 198, 215, 1);
}

.Pro_price>span{
    font-size: 10px;
    color:  rgba(141, 141, 141, 1)
}


.Pro_Details{
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.Pro_name>.left>h6{
    font-size: 12px;
}



`

export default Wrapper