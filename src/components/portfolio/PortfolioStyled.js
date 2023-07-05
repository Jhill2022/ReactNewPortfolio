import styled from "styled-components"

export const PortfolioStyled = styled.section`

.portfolio__items{
  display: flex;
  gap: 2rem; 
  flex-wrap: wrap;
  position: relative;
  left: 25px;
  
}

.portfolio__item{
    flex: 1;
    max-width: 300px;
    background-color: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 2rem;
    padding: 1.2rem;
    transition: var(--transition);
   
}
 
.portfolio__item:hover{
background: transparent;
border-color: var(--color-primary-variant);
}

.portfolio__item-image img{
border-radius: 1.5rem;
overflow: hidden;

}

.portfolio__item h3{
    margin: 1.2rem 0 2rem;
}

.portfolio__item-cta {
   display: flex;
   gap: 1rem;
   margin-bottom: 1rem;
}

@media screen and (max-width: 1024px) {
    .services__container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap:1.5rem;
        
    }
    .service{
        height: auto;
    }
}
 @media screen and (max-width: 600px) {
   .services__container{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
   }
}
`