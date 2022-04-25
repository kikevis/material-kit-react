import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

const Input = styled('input')({
  display: 'none',
});

// ----------------------------------------------------------------------

export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center">
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" type="file" />
        <Button variant="contained" component="span">
          Adjuntar Imagen
        </Button>
      </label>
    </Stack>
  );
}

// ----------------------------------------------------------------------
