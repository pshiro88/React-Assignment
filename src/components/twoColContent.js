import React from 'react'
import doctor1 from '../assets/images/doctor1.jpg';
export default function TwoColContent() {
  return (
    <div className="flex flex-col pt-10 px-2 border-b-2 border-dashed border-[#3DB6FB] lg:flex-row">
      <div className="lg:w-1/2 w-full">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Treatment overview</h2>
          <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p className="text-sm py-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
          <p className="text-sm py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <img src={doctor1} className="w-full h-auto p-20" />
      </div>
      
    </div>

  )
}
