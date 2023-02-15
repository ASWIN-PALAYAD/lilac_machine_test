import styled from "styled-components";

const Wrapper = styled.section`

    //common
    p,i{
        font-size: 13px;
        margin-right: 5px;
    }


    .container{
        height: 53px;
        background-color: rgba(49, 135, 237, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
    .container-left{
        flex: 2;
        justify-content: center;
        display: flex;
        font-size: 16px;

    }
    .items{
        display: flex;
        align-items: center;
        margin-left: 30px;

    }
    

    .container-right{
        flex: 2;
      display: flex ;
      justify-content: center;
    }




`




export default Wrapper