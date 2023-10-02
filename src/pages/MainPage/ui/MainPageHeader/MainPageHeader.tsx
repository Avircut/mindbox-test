// import { Stack, Typography, Divider } from '@mui/material';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useClosestMedia } from 'shared/lib/hooks/useMediaQuery/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

interface MainPageHeaderProps {
  title: string;
  onSidebarOpen: () => void;
}

export const MainPageHeader: FC<MainPageHeaderProps> = ({ title, onSidebarOpen }) => {
  const media = useClosestMedia();
  return (
    <Stack direction="row">
      {media === '0px' && <IconButton onClick={onSidebarOpen}><MenuIcon /></IconButton>}
      <Typography variant="h3" padding={3}>{title}</Typography>
      <Divider orientation="vertical" flexItem />
    </Stack>
  );
};
