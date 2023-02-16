const { default: styled } = require("styled-components");

const Wrapper = styled.section`

p{
    font-size: 19px;
}
span{
    font-size: 12px;
}
input{
    border: none;
}
button{
    background-color: rgba(77, 77, 77, 1);
    width: 120px;
    height: 30px;
    margin-right: 20px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 11px;
}

.Container{
    margin-top: 15px;


}
.Navigation{
    text-align: center;
    color: rgba(141, 141, 141, 1);
}
.NewsLetter{
    background-color: rgba(49, 135, 237, 1);
    display: flex;
    height: 160px;
    color: white;
    position: relative;
}
.Newletter_Content{
    flex: 1;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.NewsLetter_heading{
    width: 75%;
    margin-left: 100px;
}
.Vector_image{
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 60px;
    margin-left: 30px;

}
.Newsletter_SearchBox{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.InputBox{
    border: none;
    border-radius: 5px;
    background-color: white;
    width: 80%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}





`

export default Wrapper;