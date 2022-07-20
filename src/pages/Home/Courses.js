import React from 'react';
import './Courses.css';
import { popularCourses } from '../../data';
import { ProductList } from '../../components/_dashboard/products';

export default function Courses() {
  return (
    <section className="Courses">
      <h1>Courses we offer at perfitcom</h1>
      <ProductList courses={popularCourses} />
    </section>
  );
}
