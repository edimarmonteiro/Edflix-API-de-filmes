import styled from 'styled-components'

export const  Container = styled.div`
    h1{
        text-align: center;
        margin: 4rem 0;
    }
    
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
    }
  
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img{
        width:180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    
    a{
        transition: all 0.3s;
    }
    a:hover{
        transform: scale(1.1);
    }
    strong{
        font-size: 4rem;
        color:#3C6255 ;
    }


    @media screen and (max-width: 576px){
        ul{
         grid-template-columns: repeat(auto-fit,minmax(100px, 1fr));
        } 
        img{
         width:100px;
        }
    }
`