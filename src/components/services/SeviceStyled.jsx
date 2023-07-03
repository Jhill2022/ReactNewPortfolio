import styled from "styled-components"


export const ServiceStyle = styled.section`
    .services__container{
        display: flex;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
    }

    .service{
        flex: 1;
        background: var(--color-bg-variant);
        border-radius: 0 0  2rem 2rem;
        border: 1px solid var(--color-primary);
        height: fit-content;
        transition: var(--transition);
    }

    .service:hover{
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }

    .service__head{
        background: var(--color-primary);
        padding: 2rem;
        border-radius: 0 0 2rem 2rem;
        box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);
    }

    .service__head h3 {
       text-align: center;
       color: var(--color-bg);
       font-size: 1rem;
    }

    .service__list{
        padding: 2rem;
    }

    .service__list li {
        display: flex;
        gap: 1rem;
        margin-bottom: 0.8rem;
    }
    .service__list-icon{
        color: var(--color-primary);
        margin-top: 2px;
    }

    .service__list p {
        font-size: 0.9rem;
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