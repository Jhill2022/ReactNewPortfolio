import styled from "styled-components"


export const ExperienceStyle = styled.section`
.experience__container{
     display: flex;
     flex-wrap: wrap;
     gap: 2rem
    }

    .experience__container > * {
  flex-basis: calc(50% - 2rem);
}

.experience__container > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
}

.experience__container > div:hover{
    background: transparent;
    border-color: var(--color-bg-variant);
    cursor: default;
}

.experience__container > div h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
}

.experience__content{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    
}
.experience__content > * {
  flex-basis: calc(50% - 2rem);
}

.experience__details{
    display: flex;
    gap: 1rem;
}

.experience__details-icon{
    margin-top: 6px;
    color: var(--color-primary);
}

@media screen and (max-width: 1024px) {
    .experience__container{
        grid-template-columns: 1fr;
    }

    .experience__container > div {
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }

    .experience__content{
        padding: 1rem;
    }
   
}
@media screen and (max-width: 600px) {
    .experience__container{
        gap: 1rem;
    }
    .experience__container > div {
        width: 100%;
        padding: 2rem 1rem;
    }
}
`