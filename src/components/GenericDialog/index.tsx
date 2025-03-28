import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { ReactNode } from "react";

interface GenericDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
}

export const GenericDialog = ({
  open,
  onClose,
  title,
  actions,
  children,
}: GenericDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box pt={1}>{children}</Box>
      </DialogContent>
      <DialogActions>
        {actions || <span onClick={onClose}>取消</span>}
      </DialogActions>
    </Dialog>
  );
};
