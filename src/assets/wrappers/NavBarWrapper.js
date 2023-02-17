import styled from "styled-components";


const Wrapper = styled.section` 

    .Container{
        display: flex;
        justify-content: space-between; 
        
    }
    .Left{
        flex: 1;
        display: flex;
        align-items: center;
       

    }
    .Logo{
        width: 9rem;
    }
    
    .Classifieds{
        background-color: rgba(248, 248, 248, 1);
        border: none;
        height: 30px;
    }
    .Center{
        flex: 1;
        display: flex;
        align-items: center;
    }
    .SearchContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding : 5px;
        background-color : rgba(248, 248, 248, 1);
        border-radius: 5px;
        width: 80%;

    }
    input{
        border: none;
    }
    .Right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;

    }
    .MenuItem>button{
        border: none;
        background-color: rgba(0, 198, 215, 1);
        color: white;
        height: 30px;
        border-radius: 5px;
    }
    








`

export default Wrapper