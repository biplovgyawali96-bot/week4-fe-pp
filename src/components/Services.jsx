
import { useState } from 'react'
import { services } from '../data'

import Title from './Title'
import Service from './Service'

const Services = () => {
  const [servicesData, setServicesData] = useState(services)

  const removeService = (id) => {
    setServicesData(
      servicesData.filter((service) => service.id !== id)
    )
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return (
            <div key={service.id}>
              <Service {...service} />

              <button
                className='remove-btn'
                onClick={() => removeService(service.id)}
              >
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
