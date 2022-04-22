import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';
import LightDark from '../components/LightDark';
import BasicText from '../components/formularios/Peliculas/BasicText';
import MultilineText from '../components/formularios/Peliculas/MultilineText';
import UploadButton from '../components/formularios/Peliculas/UploadButton';

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

export default function Crud() {
  return (
    <Page title="Crud Django Rest">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <h2>Formulario Peliculas</h2>
          <BasicText />
          <MultilineText />
          <UploadButton />
        </ContentStyle>
      </Container>
    </Page>
  );
}