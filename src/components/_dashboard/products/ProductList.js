import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ courses, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {courses.map((course) => (
        <Grid key={course.id} item xs={12} sm={6} md={4}>
          <ShopProductCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
}
