import EventBox from './EventBox';

const getEvents = async () => {
   const res = await fetch('http://localhost:8000/events');
   return res.json();
};

const Events = async () => {
   const events = await getEvents();
   return (
      <section className='section' id='tours'>
         <div className='container mx-auto'>
            {/* Event Box */}
            <EventBox events={events} />
         </div>
      </section>
   );
};

export default Events;
