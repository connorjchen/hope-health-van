import React, { useState } from "react";
import { Box, Button, Typography, useTheme, Modal } from "@mui/material";
import { HelpOutline as HelpOutlineIcon } from "@mui/icons-material";

function NeedHelpButton() {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "300px",
            bgcolor: theme.palette.purple.light,
            outline: "none",
            borderRadius: "16px",
            boxShadow:
              "0px 2px 16px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            p: 4,
          }}
        >
          <Typography variant="h1" mb="16px">
            Need Help?
          </Typography>
          <Typography variant="subtitle1" mb="16px">
            If you are confused about booking the service you need, please call
            us at:
          </Typography>
          <Typography variant="subtitle1">
            <a href="tel:+233 540 458 530">+233 540 458 530</a> // EDIT
          </Typography>
          <Typography
            variant="subtitle1"
            onClick={() => setModalOpen(false)}
            sx={{
              mt: "20px",
              color: theme.palette.purple.dark,
              cursor: "pointer",
              textAlign: "right",
            }}
          >
            Dismiss help
          </Typography>
        </Box>
      </Modal>
      <Button
        onClick={() => setModalOpen(true)}
        sx={{
          background: theme.palette.purple.medium,
          color: theme.palette.purple.dark,
          borderRadius: "16px 16px 0 0",
          padding: "8px 16px",
          position: "fixed",
          bottom: 0,
          right: 0,
          boxShadow:
            "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        }}
        startIcon={<HelpOutlineIcon />}
      >
        Need Help?
      </Button>
    </Box>
  );
}

export default NeedHelpButton;
