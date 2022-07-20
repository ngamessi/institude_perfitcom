import React from 'react';
import './UpToDate.css';
import { upToDateList } from '../../data';

export default function UpToDate() {
  return (
    <section className="Courses">
      <h1>Stay up to date - Upcoming live</h1>
      <div className="events">
        {upToDateList.map((item) => (
          <article key={item.id}>
            <p>{item.date}</p>
            <p>{item.title}</p>
            <p>{item.time}</p>
            <p>{item.type}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
