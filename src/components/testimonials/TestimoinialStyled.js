import styled from "styled-components"



export const TestimonialStyle = styled.section`
.container.testimonial__container{
   padding-bottom:4rem;
   
    width: 40%;
}

.client__avatar{
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border: 0.4rem solid var(--color-primary-variant);
    border-radius: 50%;
    margin: 0 auto 1rem;
   
    
    
}

.testimonial__content{
    text-align: center;
    background: var(--color-bg-variant);
    border-radius: 2rem; 
    padding: 2rem;
    user-select: none;
}

.client__review{
   .container.testimonials__container{
    width: 60%;
   }
}

.swiper-pagination-clickable .swiper-pagination-bullet{
    background: var(--color-primary);
}
@media screen and (max-width: 600px) {
    .container.testimonials__container{
    width: var(--container-width-sm);
   }
   .client__review{
    width: var(--container-width-sm);
   }
}
`