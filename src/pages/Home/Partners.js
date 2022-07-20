import React from 'react';
import { partner } from '../../data';
import './Partners.css';

export default function Partners() {
  return (
    <section className="Partners">
      <div className="left">
        <h3>Our partners</h3>
        <div className="con">
          {partner.map((item) => (
            <article key={item.id}>
              <img src={item.icon} alt="this is an icon please update your browser" />
              <p>{item.name}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="right">
        <h3>Why choose us </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ad necessitatibus harum
          praesentium veritatis voluptatum quos magni quidem inventore quibusdam! Saepe tempore nam
          dolore voluptates officiis amet quasi aspernatur minus sunt ad, mollitia ratione officia
          blanditiis accusantium. Dicta nobis aspernatur dolore numquam, voluptate, nesciunt ullam
          quasi ducimus nemo laudantium cum placeat
        </p>
      </div>
    </section>
  );
}
