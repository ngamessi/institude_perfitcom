import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';
import ColorPreview from '../../ColorPreview';

// ----------------------------------------------------------------------

const Wrapper = styled('div')({
  background: 'grey',
  padding: '60px 10px',
  borderRadius: '5px'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ course }) {
  const { id, name, type, description, code, domain, requirements, files } = course;

  return (
    <Wrapper>
      <aside>
        <div>name : {name}</div>
        <div>type : {type}</div>
        <div>description : {description}</div>
        <div>
          <a href={files}>click here</a>
        </div>
      </aside>
    </Wrapper>
  );
}
