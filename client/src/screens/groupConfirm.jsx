import { Box, useTheme, Typography, Button } from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import CheckIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

function GroupConfirm() {
  dayjs.extend(utc);
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <ProgressHeader title="Group Health Check" progress={100} />
      <Box px="20px">
        <Box align="center">
          <Box mt="30px">
            <CheckIcon color="success" fontSize="large" />
          </Box>
          <Typography variant="h3">We have received your request</Typography>
          <Typography variant="h5" my="30px">
            A Hope Health Van team member will contact you in 3-5 days to
            discuss logistics.
          </Typography>
          <Button
            onClick={() => navigate("/")}
            sx={{
              ...theme.purpleButton,
              px: "30px",
            }}
          >
            Exit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default GroupConfirm;
