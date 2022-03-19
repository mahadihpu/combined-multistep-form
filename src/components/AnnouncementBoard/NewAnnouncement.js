import { Box, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'

export default function NewAnnouncement({ open, handleClose }) {
  return (
    <Box>
      <Dialog
        sx={{ width: '90%' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Add New Announcement'}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              fullWidth
              helperText="Please enter your name"
              id="demo-helper-text-misaligned"
              label="Name"
            />
            <TextField
              fullWidth
              helperText="Please enter Your Position"
              id="demo-helper-text-misaligned"
              label="Position"
            />
            <TextField
              placeholder="Write Your Announcement Here"
              multilinelabel="Multiline"
              multiline
              rows={10}
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button color="success" variant="contained" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
