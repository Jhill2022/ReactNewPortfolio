import styled from 'styled-components';

export const HeaderStyle = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  .header__container {
    text-align: center;
    height: 90%;
    position: relative;
    top: -85px;
    
  }

  .cta {
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
  }

  .header__socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;
  }

  .header__socials::after {
    content: '';
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }

  .me {
    /* background: linear-gradient(var(--color-primary), transparent); */
    z-index: -1;
    width: 25rem;
    height: 25rem;
    position: absolute;
    left: calc(50% - 11rem);
    margin-top: 4rem;
    background: var(--color-primary);
    overflow: hidden;
    border-radius: 50%;
  }

  .me img{
   width: 80%;
   height: auto;
  }

  .scroll__down {
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
    
    
  }

  .buttonflex {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 8rem;
  }
  .toggle-button {
    position: relative;
    display: inline-block;
    width: 64px;
    height: 34px;
    margin: 0 2rem 12rem 0;
  }

  .toggle-input {
    display: none;
  }

  .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-label:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  .toggle-input:checked + .toggle-label {
    background-color: #4db5ff;
  }

  .toggle-input:checked + .toggle-label:before {
    transform: translateX(26px);
  }

  @media screen and (max-width: 1024px) {
    height: 68vh;
  }
  @media screen and (max-width: 600px) {
    height: 100vh;

    .header__socials,
    .scroll__down {
      display: none;
    }
  }
`;
