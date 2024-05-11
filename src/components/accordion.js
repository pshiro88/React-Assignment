import React, { useState } from 'react';
import {PlusIcon} from '@heroicons/react/outline';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex items-center w-full py-4 focus:outline-none"
        onClick={toggleAccordion}
      >
        <PlusIcon  className="w-6 h-6 text-[#3DB6FB] me-5" />
        <span className="font-semibold">{question}</span>
      </button>
      {isOpen && <div className="mt-4 text-gray-600 border-l-2 border-[#3DB6FB] p-4">{answer}</div>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="container mx-auto py-8 border-b-2 border-dashed border-[#3DB6FB]">
      <h1 className="text-2xl font-bold mb-8 text-left" id="FAQs">Treatment FAQs</h1>

      <div className="faq-list">
        <FAQItem
          question="How do I know the clinic I'am seaching is verified?"
          answer="Mollit sit culpa nulla commodo esse ex duis aute. Commodo aliqua irure dolore laborum in exercitation nulla. Consectetur deserunt pariatur magna consequat dolor nulla irure nostrud commodo." 
        />
        <FAQItem
          question="Veniam adipisicing do esse officia ut ut amet "
          answer="Mollit sit culpa nulla commodo esse ex duis aute. Commodo aliqua irure dolore laborum in exercitation nulla. Consectetur deserunt pariatur magna consequat dolor nulla irure nostrud commodo." 
        />
        <FAQItem
          question="How do I know the clinic I'am seaching is verified?"
          answer="Mollit sit culpa nulla commodo esse ex duis aute. Commodo aliqua irure dolore laborum in exercitation nulla. Consectetur deserunt pariatur magna consequat dolor nulla irure nostrud commodo." 
        />
        <FAQItem
          question="Veniam adipisicing do esse officia ut ut amet "
          answer="Mollit sit culpa nulla commodo esse ex duis aute. Commodo aliqua irure dolore laborum in exercitation nulla. Consectetur deserunt pariatur magna consequat dolor nulla irure nostrud commodo." 
        />
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
}
