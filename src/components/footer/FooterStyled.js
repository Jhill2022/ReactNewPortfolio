import styled from "styled-components"


export const FooterStyle = styled.footer`
background: var(--color-primary);
padding: 3rem 0;
text-align: center;
font-size: 0.9rem;
margin-top: 7rem;

a{
    color: var(--color-bg) ;
}

.footer__logo{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
}

.permalinks{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;
}

.footer__socials{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
}

.footer__socials a{
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
}

.footer__socials a:hover{
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
}

.footer__copyright{
    margin-bottom: 4rem;
    color: var(--color-bg);
}

@media screen and (max-width:600px){
    .permalinks{
        flex-direction: column;
        gap: 1.5rem;
    }

    .footer__socials{
        margin-bottom: 2.6rem;
    }
    
}
`