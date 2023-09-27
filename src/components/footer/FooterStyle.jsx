import styled from "styled-components";

export const FooterWrap = styled.div`
  .foot {
  text-align: left;
  background-color: #F69311; 
  color: #ffffff;
  padding: 25px 10px 10px 10px;
  font-size: 12px;
  margin-top: 5rem;
}
.foot_flex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.foot_item-logo{
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
}

.app-logo{
  width: 20px;
  height: auto;
  max-width: 100%;
  margin-left: 12px;
}

.app-name{
    width: 5rem;
    height: 1.5rem;
    margin-left: 12px;
}

.foot_flex img:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}

.foot_item {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.foot_item:hover{
  cursor: pointer;
}

.foot_item p {
  padding: 0 7px 0 7px;
  margin-bottom: 15px;
  padding-top: 1px;
  font-size: 1.5rem;
}

p.last_p {
  border-right: none;
}

.location-icon, .portfolio{
  margin-top: 1.5rem;
}

.social_icons, .contact-us, .our-portfolio{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  font-size: 1rem;
}

.portfolio-link{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a{
  text-decoration: none;
  color: #ffffff;
  margin-left: 0.8rem;
}

.whatsapp, .twitter, .github, .email, .linkedin{
  margin-top: 1rem;
}
.whatsapp:hover {
  color: #00ff00;
}

.twitter:hover {
  color: #229df0;
}

.github:hover{
    color: #18345C;
}

.email:hover {
  color: #ff0000;
}

.linkedin:hover {
  color: #0865c2;
}

.copy {
  padding-top: 10px;
  text-align: center;
  font-weight: 800;
  font-size: 1.5rem;
  color: #ffffff;
  border-top: #bdc2ca;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
}

@media (max-width: 768px) {
  .foot_flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .foot_item-logo{
  margin-bottom: 1rem;
}

.our-portfolio{
  margin-bottom: -1rem;
}

}

@media (max-width: 425px) {
  .foot_item p {
  padding: 0 1vw 0 1vw;
}
}

@media (max-width: 320px) {
  .foot{
    padding-left: 5px;
    padding-right: 5px;
  }

  .foot_item p {
  padding: 0 1vw 0 1vw;
}
}
`
