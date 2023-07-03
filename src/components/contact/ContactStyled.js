import styled from "styled-components"


export const ContactStyle = styled.section`

.container.contact__container{
    width: 58%;
    display: flex;
    gap: 12%;
}

.contact__options{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}
.contact__option{
    background: var(--color-bg-variant);
    margin-top: 5px;
    /* width: 15rem; */
    border-radius: 1.2rem;
    text-align: center;
    padding: 1.2rem;
    border: 1px solid transparent;
    transition: var(--transition);
}
.contact__option:hover{
    background: transparent;
    border-color: var(--color-primary-variant);
}

.contact__option-icon{
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}
.contact__option h5{
    color: var(--color-light);
}
.contact__option a{
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
}

form{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

input, textarea{
    width: 100%;
    padding: 1.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    border-radius: 15px;
    resize: none;
    color: var(--color-white);
}

@media screen and (max-width: 1024px) {
    .container.contact__container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
  }
  @media screen and (max-width: 600px) {
   width: var(--container-width-sm);
  }

`