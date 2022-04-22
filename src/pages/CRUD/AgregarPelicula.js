import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';

import BasicText from '../../components/formularios/peliculas/BasicText';
import MultilineText from '../../components/formularios/peliculas/MultilineText';
import UploadButton from '../../components/formularios/peliculas/UploadButton';
import Button from '../../components/formularios/peliculas/Button';

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
    <Page title="Crud Django Rest">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <h2>Agregar pelicula</h2>
          <BasicText />
          <MultilineText />
          <UploadButton />
          <Button />
        </ContentStyle>
      </Container>
    </Page>
  );
}