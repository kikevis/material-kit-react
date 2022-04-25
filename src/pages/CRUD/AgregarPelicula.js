import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';

import BasicText from '../../components/formularios/peliculas/Text/BasicText';
import MultilineText from '../../components/formularios/peliculas/Text/MultilineText';
import UploadButton from '../../components/formularios/peliculas/Button/UploadButton';
import AddButton from '../../components/formularios/peliculas/Button/AddButton';

import AddForm from '../../components/formularios/peliculas/AddForm';

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
      <Container sx={{ alignItems: 'center' }}>
          <h2>Agregar pelicula</h2>
          <BasicText />
          <MultilineText />
          <UploadButton />
          <AddButton />
      </Container>
      {/* <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <AddForm />
        </ContentStyle>
      </Container> */}
    </Page>
  );
}