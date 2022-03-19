import AddBoxIcon from '@mui/icons-material/AddBox'
import SendIcon from '@mui/icons-material/Send'
import {
  Avatar,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { styled } from '@mui/styles'
import * as React from 'react'
import './AnnoucementBoard.css'
import dummyData from './dummyData'
import bookmark from './icon_bookmark.png'
import NewAnnouncement from './NewAnnouncement'

const CustomDiv = styled('div')(({ theme, index }) => {
  console.log(dummyData)
  return {
    padding: '20px',
    borderBottom: `${
      index < dummyData.length - 1 ? '1px solid lightgrey' : ''
    }`,
  }
})
const TextDiv = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

const AnnouncementBoard = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Card variant="outlined" sx={{ padding: '0 10px' }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Announcement icon"
            src={bookmark}
            sx={{ width: 56, height: 56 }}
          />
        }
        sx={{
          '& .MuiCardHeader-title': {
            fontSize: '30px',
          },
        }}
        action={
          <IconButton aria-label="settings">
            <Button
              variant="contained"
              endIcon={<AddBoxIcon />}
              onClick={handleClickOpen}
            >
              Add New
            </Button>
          </IconButton>
        }
        title="Announcement"
      />
      <br />
      <Divider variant="middle" />
      <CardContent>
        {dummyData.map((data, index) => (
          <CustomDiv className="announcement-div" key={index} index={index}>
            <TextDiv>
              <Typography variant="h4">{data.name}</Typography>
              <Typography>{data.date}</Typography>
            </TextDiv>
            <Typography color="primary">{data.position}</Typography>
            <TextDiv>
              <Typography sx={{ marginTop: '10px' }}>
                {data.description}
              </Typography>
              <Button
                variant="outlined"
                className="view-more-btn"
                endIcon={<SendIcon />}
                onClick={handleClickOpen}
              >
                View More
              </Button>
            </TextDiv>
          </CustomDiv>
        ))}
      </CardContent>
      <NewAnnouncement open={open} handleClose={handleClose} />
    </Card>
  )
}

export default AnnouncementBoard
