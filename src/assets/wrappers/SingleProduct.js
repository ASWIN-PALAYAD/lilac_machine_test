import styled from "styled-components";

const Wrapper = styled.section`


.Container{
    display: flex;

}
.Product{
    flex: 1;
    margin-left: 5px;
    width: 200px;
    box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    
}
.Product:hover{
    transform: scale(1.01);
    cursor: pointer;
}
.Pro_Details{
    padding: 10px;
}
.Pro_image{
    position: relative;
}
.Pro_image>img{
    height: 200px;
    width: 200px;
}
.Offer_card{
    height: 20px;
    width: 80px;
    background-color: rgba(49, 135, 237, 1);
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 50px;
    border-radius: 8px 0 0px 8px;
    text-align: center;
    color: white;
    font-size: 15px;
}

.Name{
}
.Name>p{
    padding: 0;
font-size: 12px;
}
.Price>h5{
    padding: 0;
    font-size: 17px;
    color : rgba(49, 135, 237, 1)
}
.Rating{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.Rating>span{
    font-size: 13px;
    text-decoration: line-through;
    color: rgba(141, 141, 141, 1);
}
.Rating>p{
    font-size: 12PX;
    color: rgba(141, 141, 141, 1);
}




`


export default Wrapper