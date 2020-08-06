import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'

import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'

import SearchIcon from '@material-ui/icons/Search'
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 550,
    maxWidth: '100%',
    margin: 'auto',
    marginTop: theme.spacing(8),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

export interface SearchFormProps {
  onSearch: (search: string) => void
}

interface FormData {
  search: string
}

function SearchForm({ onSearch }: SearchFormProps) {
  const classes = useStyles()
  const { register, handleSubmit, setValue } = useForm<FormData>()

  const onSubmit = handleSubmit(({ search }) => {
    if (search !== '') {
      onSearch(search)
    }
  })

  const onClear = () => {
    setValue('search', '')
  }

  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={onSubmit}
      data-testid="search-form"
    >
      <InputBase
        className={classes.input}
        name="search"
        placeholder="Search Photos"
        inputProps={{
          'aria-label': 'search photos',
          'data-testid': 'search-input',
        }}
        inputRef={register}
      />
      <IconButton
        type="button"
        className={classes.iconButton}
        aria-label="clear"
        onClick={onClear}
      >
        <ClearIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchForm
