import React, { useState } from 'react';
import DetailsButton from '../components/DetailsButton'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Activities = () => {
  const [filter, setFilter] = useState('All');

  const activities = [
    { id: 1, description: 'Desc Activity 1', host: 'By xxx', type: 'Activity' },
    { id: 2, description: 'Desc Donation 1', host: 'By xxx', type: 'Donation' },
    { id: 3, description: 'Desc Campaign 1', host: 'By xxx', type: 'Campaign' },
    { id: 4, description: 'Desc Activity 2', host: 'By xxx', type: 'Activity' },
  ];

  const filteredActivities = activities.filter((activity) =>
    filter === 'All' ? true : activity.type === filter
  );

  
  return (
    <div>
        <NavBar/>
    <div className='pb-10'>
      <section className="bg-blue-100 py-10 m-0 p-0 overflow-x-hidden" style={{ backgroundColor: '#EEF7FF' }}>
        <h2 className="text-3xl font-bold mb-5 text-left px-[10%]">
            Featured <span>✨</span>
        </h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-[10%]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <div className="p-4 min-w-[500px] h-[250px] rounded-lg relative" style={{ backgroundColor: '#9ED2FF', borderRadius: '15px' }}>
            <img src="" />
            <div className="text-gray-800 font-bold mb-2">Short Description</div>
            <div className="text-gray-600 mb-4">By xxx</div>
            <DetailsButton/>
            </div>
            <div className="p-4 min-w-[500px] h-[250px] rounded-lg relative" style={{ backgroundColor: '#9ED2FF', borderRadius: '15px'  }}>
            <div className="text-gray-800 font-bold mb-2">Short Description</div>
            <div className="text-gray-600 mb-4">By xxx</div>
            <DetailsButton/>
            </div>
            <div className="p-4 min-w-[500px] h-[250px] rounded-lg relative" style={{ backgroundColor: '#9ED2FF', borderRadius: '15px'  }}>
            <div className="text-gray-800 font-bold mb-2">Short Description</div>
            <div className="text-gray-600 mb-4">By xxx</div>
            <DetailsButton/>
            </div>
        </div>
      </section>
      
      <section className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 w-full px-[20%] py-10">
        <div className="flex space-x-4 py-2 px-6" style={{ backgroundColor: '#D9D9D9', borderRadius: '35px'}}>
          <button onClick={() => setFilter('All')} className={`font-bold py-2 px-4 rounded-full w-[100px] ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-none'}`}>All</button>
          <button onClick={() => setFilter('Activity')} className={`font-bold py-2 px-4 rounded-full w-[100px] ${filter === 'Activity' ? 'bg-blue-500 text-white' : 'bg-none'}`}>Activity</button>
          <button onClick={() => setFilter('Donation')} className={`font-bold py-2 px-4 rounded-full w-[100px] ${filter === 'Donation' ? 'bg-blue-500 text-white' : 'bg-none'}`}>Donation</button>
          <button onClick={() => setFilter('Campaign')} className={`font-bold flex items-center justify-center py-2 px-4 rounded-full w-[100px] ${filter === 'Campaign' ? 'bg-blue-500 text-white' : 'bg-none'}`}>Campaign</button>
        </div>
        <div className="flex items-center space-x-2 border-[3px] rounded-full" style={{borderColor: '#999995', backgroundColor: '#F9F9F9'}}>
          <input type="text" placeholder="Search..." className="py-2 px-3 rounded-full bg-transparent"/>
          <button className="py-2 px-4 rounded">🔍</button>
        </div>
        <button className="bg-gray-200 py-2 px-4 rounded">Filter ⏷</button> {/*Ini belum dropdown*/}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-[10%]">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="p-4 min-w-[500px] h-[250px] rounded-lg relative" style={{ backgroundColor: '#9ED2FF', borderRadius: '15px'  }}>
            <div className="mb-2 font-bold">{activity.description}</div>
            <div className="text-gray-700 mb-4">{activity.host}</div>
            <DetailsButton/>
          </div>
        ))}
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;