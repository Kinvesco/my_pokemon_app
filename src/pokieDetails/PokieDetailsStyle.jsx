import styled from "styled-components";

export const PokieDetailsStyle = styled.div`
   margin: 9rem 5rem 3rem 5rem;

   hr{
      width: 3.5rem;
      border: 1px solid #8da4c4;
      margin-top: -1rem;
   }
   
   .pokie-description{
      padding: 2rem;
      border-radius: 0.5rem;
      border: 1px solid	#a47204;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);        padding-bottom: 1.5rem;
      font-size: 1rem;
      font-weight: 900;
      line-height: 1.4rem;
      margin-bottom: 5rem;
      background-position: left bottom;
      transition: all 0.5s ease-in-out;
      background-color: #a47204;
      color: #ddebff;
   }

   .pokie-name{
      text-transform: capitalize;
      font-weight: 900;
      color: #8da4c4;
      font-size: 2.5rem;
      text-align: center;
   }

   .detailsCard{
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5%;
   }


   .pokie-details-image{
      max-width: 550px;
      width: 100%;
      height: auto;
      /* animation */
      --g:#0000 ,#000 .5deg 90deg,#0000 91deg;
      --m:
      conic-gradient(from 45deg ,var(--g)) 20px 0  no-repeat,
      conic-gradient(from 135deg,var(--g)) 0 20px  no-repeat,
      conic-gradient(from 225deg,var(--g)) -20px 0 no-repeat,
      conic-gradient(from 315deg,var(--g)) 0 -20px no-repeat;
      -webkit-mask: var(--m);
      mask: var(--m);
      transition: .3s linear;
      filter: grayscale(.5);
      cursor: pointer;
   }

   .pokie-details-image:hover{
      opacity: 0.8;
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
      filter: grayscale(0);
   }


   /* MEDIA RESPONSIVENESS */
@media (max-width: 960px) {
   margin: 9rem 2rem 3rem 2rem;
}

@media (max-width: 768px) {
   .pokie-details-image-holder{
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .detailsCard{
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5%;
   }

   .pokie-details-image{
      --m:
      conic-gradient(none),
      transition: .3s linear;
      filter: grayscale(.1);
   }

   .pokie-details-image:hover{
      opacity: 0.8;
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
      filter: grayscale(0);
   }
}

@media (max-width: 600px) {
   margin: 9rem 0rem;

   .pokie-description{
      padding: 3rem 1rem;
      border-radius: 0rem;
   }

   .pokie-name{
      font-size: 1.7rem;
   }

}
  
`