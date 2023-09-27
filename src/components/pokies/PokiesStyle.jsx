import styled from "styled-components";

export const PokiesWrap = styled.div`
    margin: 4rem 6rem;

    .pokie-card{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 2.5%;
      margin-top: 5rem;
      margin-bottom: 5rem;
    }

    .pokie-card:hover{
      cursor: pointer;
    }

    .tan-card{
      text-align: center;
      border-radius: 0.5rem;
      border: 1px solid #a8a6a6;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        padding-bottom: 1.5rem;
      color: #10062c;
      font-size: 1rem;
      font-weight: 900;
      line-height: 1.4rem;
      margin-bottom: 5rem;
      animation: pokieAnimation 1s ease-in;
      animation-iteration-count: 1;
      background-position: right bottom;
      transition: all 0.3s ease-in-out;
    }

    @keyframes pokieAnimation {
      0%{transform: scale(0, 0.25);}
      50%{transform: scale(1, 0.25)}
    }

    .tan-card:hover{
        opacity: 0.8;
        transform: scale(1.05);
    }

    .tan-image{
        background-color: 	#e0ffff;
        border-radius: 0.5rem 0.5rem 0 0;  
        margin-bottom: 1rem;
    }

    .tan-image:hover{
      opacity: 0.9;
    }

    .tan-image img{
         height: auto;
         width: 100%;
         max-width: 215px;
    }

    .tan-name{
      text-transform: capitalize;
    }

    .pokie-details-link{
      text-decoration: none;
      color:	#4169e1;
    }

    .card-button{
      margin-top: 0.4rem;
    }

    .card-button button.button-1{
      background-color: #83d744;
      border: 1px solid #83d744;
      background-position: right bottom;
      transition: all 0.5s ease-in-out;
      color: #ffffff;
      font-weight: 700;
      font-size: 0.9rem;
      padding: 0.25rem 1rem;
      margin: 2.5%;
      border-radius: 0.3rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        
    }

    .card-button button.button-1:hover{
        background-color: #1e330e;
        border: 1px solid #1e330e;
        cursor: pointer;
        background-position: left bottom;
    }

    .card-button button.button-2{
        background-color: #c663cb;
        border: 1px solid #c663cb;
        background-position: right bottom;
        transition: all 0.5s ease-in-out;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.9rem;
        padding: 0.25rem 1rem;
        margin: 2.5%;
        border-radius: 0.3rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        
    }

    .card-button button.button-2:hover{
        background-color: #3c0d3f;
        border: 1px solid #3c0d3f;
        cursor: pointer;
        background-position: left bottom;
    }

    .paginate{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5%;
    }

    .page-btn-prev, .page-btn-next{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .page-btn-prev button, .page-btn-next button {
    padding: 1rem 2rem;
    border-radius: 6px;
    border: 1px solid #222222;
    border-right: none;
    background-color: #222222;
    color: #ffffff;
    font-weight: 900;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    font-size: 1.2rem;
  }

  
  .page-btn-prev button:hover, .page-btn-next button:hover {
    background-position: left bottom;
    cursor: pointer;
    opacity: 0.9;
    translate: 5s;
    color: #ffe5b4;
    background-color: #000000;
    border: 1px solid #000000;
  }

/* MEDIA RESPONSIVENESS */
@media (max-width: 1024px){
  margin: 4rem 1rem;
}

@media (max-width: 960px) {
  .pokie-card{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 5rem;
    }
}

@media (max-width: 768px) {
    margin: 3rem 2rem;

    .pokie-card{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 5rem;
    }

    .tan-image img{
     height: auto;
     width: 100%;
     max-width: 215px;
    }    
}

@media (max-width: 600px) {
    margin: 1rem 1rem 2.5rem 1rem;
  
    .pokie-card{
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 5rem;
    }

    .tan-image img{
     height: auto;
     width: 100%;
     max-width: 215px;
    }


}

@media (max-width: 425px) {
  .paginate{
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5%;
  }

  .page-btn-prev{
    margin-top: -6rem;
  }


}
`