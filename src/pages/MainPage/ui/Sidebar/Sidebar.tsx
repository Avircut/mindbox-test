import { Drawer, IconButton } from '@mui/material';
import { useClosestMedia } from 'shared/lib/hooks/useMediaQuery/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';

interface SidebarProps {
  width?: number;
  open?: boolean;
  onSidebarClose?: () => void;
}

export const Sidebar = ({ width = 234, open, onSidebarClose } :SidebarProps) => {
  const media = useClosestMedia();
  const isMobile = media === '0px';
  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      sx={{

        '& .MuiDrawer-paper': { boxSizing: 'border-box', width, paddingTop: 12 },
      }}
      open={open}
    >
      {isMobile && <IconButton onClick={onSidebarClose}><CloseIcon /></IconButton>}
      Sidebar
    </Drawer>
  );
};
