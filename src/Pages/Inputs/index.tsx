import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <Grid container spacing={3}>

        <Grid container item xs={4} spacing={1}>
          <TextField
            id="outlined"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>

        <Grid container item xs={4} spacing={1}>
          <TextField
            error
            id="outlined-error"
            label="Label"
            placeholder="Placeholder"
            variant="outlined"
          />
        </Grid>

        <Grid container item xs={4} spacing={1}>
          <TextField
            disabled
            id="filled-disabled"
            label="Label"
            placeholder="Placeholder"
            variant="filled"
          />
        </Grid>

      </Grid>

      <Grid container spacing={3}>

        <Grid container item xs={4} spacing={1}>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Label"
            placeholder="Placeholder"
            helperText="Some interesting text"
            variant="outlined"
          />
        </Grid>

        <Grid container item xs={4} spacing={1}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Placeholder"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid container item xs={4} spacing={1}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Placeholder"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

      </Grid>

      <Grid container spacing={3}>
        <Grid container item xs={4} spacing={1}>

          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            variant="outlined"
            size="small"
          />
        </ Grid>

        <Grid container item xs={4} spacing={1}>
          <TextField
            label="Size"
            id="outlined-size-normal"
            defaultValue="Normal"
            variant="outlined"
          />
        </Grid>

        <Grid container item xs={4} spacing={1}>
          <TextField
            required id="standard-required" label="Label" placeholder="Placeholder" />
        </ Grid>
      </ Grid>

      <Grid container item xs={4} spacing={1}>
        <TextField
          id="outlined-multiline-static"
          label="Label"
          multiline
          rows={4}
          defaultValue="Digite aqui"
          variant="outlined"
        />
      </Grid>

    </ form>


  )
}