import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';
import { Stack } from '@mui/material';

const App = () => {
  return (
    <Suspense fallback="">
      <Stack>
        <Navbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Stack>

    </Suspense>

  );
};
export default App;
