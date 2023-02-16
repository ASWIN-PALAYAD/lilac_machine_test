import styled from "styled-components";

const Wrapper = styled.section`

img{
    width: 150px;
}

.Container{
    display: flex;
}
.Left{
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

}
.icons:hover{
    cursor: pointer;
    transform: scale(1.1);
}
.Discription{
    font-size: 12px;
}
.SocialMediaIcons{
    display: flex;
    justify-content: space-around;
    
}


.Center{
flex: 1;
padding: 20px;
display: flex;


}
.Usefull_links{
    margin-left: 15px;
}

.Title{
    margin-bottom: 15px;
    font-size: 12px;
    

}
.List{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
}
.ListItem{
    color: rgba(141, 141, 141, 1);

}
.ListItem:hover{
    cursor: pointer;
}

.Right{
    flex: 1;
    padding: 20px;

}
.contact_details>p{
    color: rgba(141, 141, 141, 1);
}
.enquiry{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.enquiry_number>h6{
    font-size: 14px;
}
.enquiry_number>span{
    font-size: 18px;
    color : rgba(49, 135, 237, 1)
}
.enquiry_button>button{
    background: none;
    border-radius: 5px;
    border: 1px solid rgba(49, 135, 237, 1);
    color: rgba(49, 135, 237, 1);
}
.PlayStore{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
.AppStore{
    display: flex;
    justify-content:space-around;
    align-items: center;
    background-color: rgba(35, 35, 35, 1);
    color: white;
    padding: 5px;
    border-radius: 5px;
    width: 150px;
    
}
.AppDetails{
    padding: 0px;
}
.AppDetails>p{
    font-size: 10px;
    margin: 0;
    padding: 0;
}
.AppDetails>h5{
    font-size: 15px;
    margin: 0;
    padding: 0;
}




`


export default Wrapper