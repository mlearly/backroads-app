import Title from './Title';
import { featuredTours } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <Title title='featured' subtitle='tours' />
      </div>

      <div className='section-center featured-center'>
        {featuredTours.map((tour) => {
          return (
            <article className='tour-card' key={tour.id}>
              <div className='tour-img-container'>
                <img src={tour.img} className='tour-img' alt={tour.title} />
                <p className='tour-date'>{tour.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.desc}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                    {tour.country}
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
