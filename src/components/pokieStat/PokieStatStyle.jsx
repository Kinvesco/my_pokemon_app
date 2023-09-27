import styled from "styled-components";

export const PokieStatStyle = styled.div`
   /* margin: 3rem 5rem; */
   padding-bottom: 3rem;
   
   .section-title{
      text-transform: capitalize;
      font-weight:  800;
      color: #ddebff;
      font-size: 2rem;
   }

   ul li{
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
   }

   progress{
    width: 70%;
   }

/* MEDIA RESPONSIVENESS */
@media (max-width: 768px) {
   .section-title{
      font-size: 1.7rem;
   }

   ul li{
    font-size: 1.1rem;
    line-height: 2rem;
   }

   progress{
    width: 80%;
   }
}

@media (max-width: 600px) {
   .section-title{
      font-size: 1.5rem;
   }

   ul li{
    font-size: 1rem;
    line-height: 2rem;
   }

}

  
`