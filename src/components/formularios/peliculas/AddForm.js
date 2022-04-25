import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components

import BasicText from './Text/BasicText';
import MultilineText from './Text/MultilineText';
import UploadButton from './Button/UploadButton';
import AddButton from './Button/AddButton';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function AgregarPelicula() {
  return (
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <h2>Agregar pelicula</h2>
          <BasicText />
          <MultilineText />
          <UploadButton />
          <AddButton />
        </ContentStyle>
      </Container>
  );
}