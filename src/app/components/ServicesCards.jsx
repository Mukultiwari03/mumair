import React from 'react'
import one from '../../../public/assets/ServicesSectionIcons/1.png'
import two from '../../../public/assets/ServicesSectionIcons/2.png'
import three from '../../../public/assets/ServicesSectionIcons/3.png'
import four from '../../../public/assets/ServicesSectionIcons/4.png'
const ServicesCards = () => {
    const data = [
        {
            img:one,
            heading:"UI/UX",
            content:"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        },
        {
            img:two,
            heading:"Web Design",
            content:"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        },
        {
            img:three,
            heading:"App Design",
            content:"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        },
        {
            img:four,
            heading:"Graphic Design",
            content:"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        },
    ]


  return (
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto w-[90%] mt-10 py-5'>
      


        {data.map((item)=>(
            <div className='bg-[#F8F8F8] rounded-lg py-16 px-4 hover:bg-[#ededed]'data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            data-aos-easing="ease-in-out">
             <img src={item.img.src} alt={item.heading} className='h-12 '/>
             <h4 className="text-2xl font-semibold my-4">{item.heading}</h4>
             <p>{item.content}</p>
         </div>
        ))
        
        
    }
 
    </div>
  )
}

export default ServicesCards