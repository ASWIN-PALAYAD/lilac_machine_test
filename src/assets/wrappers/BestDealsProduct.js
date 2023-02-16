import styled from "styled-components";

const Wrapper = styled.section`
.Container{
}
.product_card{
    display: flex;
    width: 200px;
    margin-left: 5px;
    height: 120px;
    margin-bottom: 10px;
    padding: 4px;
    border-radius: 8px;
    cursor: pointer;
}
.product_card:hover{
    border: 1px solid rgb(180, 180, 180);
    transition: all 0.5s ease-in;
}

img{
    width: full;
    height: 100px;

}
.pro_image{
    display: flex;
    align-items: center;
    padding: 5px;
}
.pro_details{
    text-align: center;
}
p{
    font-size: 13px;
}
h5{
    font-size: 14px;
    color:rgba(49, 135, 237, 1);
;
}
span{
    font-size: 13px;
}





`
export default Wrapper