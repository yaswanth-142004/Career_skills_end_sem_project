import React from 'react'

const Company = () => {
  const services = [
    {
      title: 'Automated Investment Strategies',
      description: 'Leverage AI algorithms to optimize your investments, ensuring maximum returns with minimal risk.',
      icon: '📈',
    },
    {
      title: 'Predictive Financial Analytics',
      description: 'Use machine learning to forecast market trends and make data-driven decisions.',
      icon: '🔮',
    },
    {
      title: 'AI-Powered Risk Management',
      description: 'Identify and mitigate financial risks in real-time with advanced AI analysis.',
      icon: '⚠️',
    },
    {
      title: 'Personalized Financial Planning',
      description: 'Receive customized financial advice tailored to your goals and financial profile.',
      icon: '🧾',
    },
    {
      title: 'Fraud Detection and Prevention',
      description: 'Protect your assets with cutting-edge AI that detects and prevents fraudulent activities.',
      icon: '🛡️',
    },
    {
      title: 'Real-Time Portfolio Optimization',
      description: 'Monitor and adjust your portfolio dynamically for the best possible outcomes.',
      icon: '⏱️',
    },
    {
      title: 'Robo-Advisory Services',
      description: 'Automate your financial management with smart, AI-driven robo-advisors.',
      icon: '🤖',
    },
    {
      title: 'AI-Driven Credit Scoring',
      description: 'Get fair and accurate credit evaluations with AI-based scoring models.',
      icon: '💳',
    },
  ];

  return (
    <div className='bg-gray-50 min-h-screen p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Page Header */}
        <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-10'>
          Welcome to Our AI Financial Company
        </h1>
        <p className='text-lg text-gray-600 text-center mb-8'>
          We are redefining the financial landscape with innovative, AI-driven services that empower individuals and businesses to make smarter financial decisions.
        </p>

        {/* Services Section */}
        <h2 className='text-3xl font-semibold text-lime-700 mb-6 border-b-4 border-lime-600 inline-block'>
          Our Services
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex items-center mb-4'>
                <span className='text-3xl mr-4'>{service.icon}</span>
                <h3 className='text-2xl font-bold text-gray-800'>
                  {service.title}
                </h3>
              </div>
              <p className='text-gray-700'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
