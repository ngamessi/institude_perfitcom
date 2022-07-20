import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList } from '../components/_dashboard/products';
//
import { courses } from '../data';
// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  return (
    <Page title="Dashboard: Courses | Perfitcom">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Courses
        </Typography>
        <ProductList courses={courses} />
      </Container>
    </Page>
  );
}
