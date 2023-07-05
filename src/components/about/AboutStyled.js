import styled from 'styled-components';

export const AboutStyle = styled.section`





 .about__container {
  display: flex;
  justify-content: space-between;
  gap: 15%;
}

.about__me {
  flex-basis: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

.about__me img {
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);
}

.about__me:hover img {
  transform: rotate(0);
}

.about__cards {
  display: flex;
  gap: 1.5rem;
}

.about__card {
  flex: 1;
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
}

.about__card:hover{
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
}

.about__icon{
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

.about__card h5{
    font-size: 0.95rem;
}
.about__card small{
    font-size: 0.7rem;
    color: var(--color-light);
}
.about__content p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
}

@media screen and (max-width: 1024px) {
    .about__container {
    flex-direction: column;
    gap: 0;
  }

  .about__me {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  .about__cards {
    flex-wrap: nowrap;
  }
  .about__content p {
    margin: 1rem 0 1.5rem;
  }
}
@media screen and (max-width: 600px) {
  .about__me {
    width: 65%;
    margin: 0 auto 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .about__card {
    flex-basis: calc(50% - 0.5rem);
  }

  .about__content {
    text-align: center;
  }

  .about__content p {
    margin: 1.5rem 0;
  }
}
`;
