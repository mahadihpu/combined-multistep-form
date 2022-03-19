import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CommentIcon from "@mui/icons-material/Comment";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React from "react";

const options = ["Action", "Another Action", "Something else here"];

const BaseFeed = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 4,
        width: "100%",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            mb: 3,
          }}
        >
          <Avatar
            src={props.img}
            sx={{
              borderRadius: "10px",
              width: "50px",
              height: "50px",
            }}
          />
          <Box
            sx={{
              ml: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              {props.username}
            </Typography>
            <Typography color="textSecondary" variant="h6" fontWeight="400">
              {props.time}
            </Typography>
          </Box>
          <Box
            sx={{
              ml: "auto",
            }}
          >
            <IconButton
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <FeatherIcon icon="more-horizontal" width="18"></FeatherIcon>
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        {props.children}
        <Box
          display="flex"
          alignItems="center"
          sx={{
            mt: 3,
          }}
        >
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="likes"
            color="error"
            size="small"
            sx={{
              mr: 1,
            }}
          />
          <Checkbox
            icon={<CommentIcon />}
            checkedIcon={<CommentIcon />}
            name="share"
            color="secondary"
            size="small"
            sx={{
              mr: 1,
            }}
          />
          <Checkbox
            icon={<ShareIcon />}
            checkedIcon={<ShareIcon />}
            name="send"
            color="secondary"
            size="small"
            sx={{
              mr: 1,
            }}
          />

          <Box
            sx={{
              ml: "auto",
            }}
          >
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              name="save"
              color="default"
              size="small"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BaseFeed;
