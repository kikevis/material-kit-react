import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';
import BasicText from '../components/BasicText';

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
          {/* <Typography variant="h3" paragraph>
            CRUD
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            CRUD
          </Typography>

          <Box
            component="img"
            src="/static/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          /> */}
          <BasicText />
          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Ir al inicio
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}