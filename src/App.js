import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { PageBody, ResponsiveAppBar } from './ui';

export default function DisplayApp() {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <PageBody />
    </>
  );
}
