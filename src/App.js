import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import emojis from './emojis';

function Card(props) {
  const {
    setShownGrid,
    grid,
    i, firstSelectedCard,
    secondSelectedCard,
    setFirstSelectedCard,
    setSecondSelectedCard
  } = props;

  const [showing, setShowing] = React.useState(true)
  const [correct, setCorrect] = React.useState(false)

  // Show the card for 2 seconds at the start
  React.useEffect(() => {
    setTimeout(() => setShowing(false), 2000)
  }, [])

  // When the second selected card changes
  React.useEffect(() => {
    if (i === firstSelectedCard || i === secondSelectedCard) {
      // Check if the 2 cards are matching, otherwise...
      if (grid[firstSelectedCard] === grid[secondSelectedCard]) {
        setShownGrid((prev) => {
          prev[i] = true
          return prev
        })
        setCorrect(true)
      } else {
        // Give time for the card to fully show before flipping it back
        setTimeout(() => {
          setShowing(false)
        }, 500)
      }
      // Reset selected cards
      setFirstSelectedCard(undefined)
      setSecondSelectedCard(undefined)
    }
  }, [secondSelectedCard])

  return (
    <ReactCardFlip isFlipped={showing} flipDirection="vertical" containerStyle={{ height: '100%' }}>
      <Paper
        elevation={10}
        style={{ height: '100%', fontSize: '14vh', textAlign: 'center' }}
        onClick={() => {
          if (!showing) { // Needed so that players can't click while the card is still being flipped
            if (firstSelectedCard !== undefined) { // Have to include !== undefined becuase if card index is 0 will not return true
              setSecondSelectedCard(i)
            } else {
              setFirstSelectedCard(i)
            }
            setShowing(true)
          }
        }}>
        ❓
      </Paper>

      <Paper
        elevation={correct ? 0 : 10}
        style={{ height: '100%', fontSize: '14vh', textAlign: 'center' }}
      >
        {grid[i]}
      </Paper>
    </ReactCardFlip>
  )
}

function Game(props) {
  // Generate the board, which has all the cards, and an empty board, which is is changed over time to check if the game has been won
  var numPairs = Math.floor(props.boardSize / 2)
  var newGrid = []
  var emptyGrid = []
  var i;
  for (i of [...Array(numPairs).keys()]) {
    var emojiToAdd = emojis[Math.floor(Math.random() * emojis.length)];
    newGrid.push(emojiToAdd)
    newGrid.push(emojiToAdd)
    emptyGrid.push(false)
    emptyGrid.push(false)
  }

  // Shuffle the board by swapping each value with another random value
  for (let i = newGrid.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newGrid[i], newGrid[j]] = [newGrid[j], newGrid[i]];
  }


  const [grid, setGrid] = React.useState(newGrid)
  const [shownGrid, setShownGrid] = React.useState(emptyGrid)
  const [firstSelectedCard, setFirstSelectedCard] = React.useState(undefined)
  const [secondSelectedCard, setSecondSelectedCard] = React.useState(undefined)

  return (
    <div className="App" style={{ margin: '2%', width: 'calc(98vw - 4%)' }}>
      <Grid container spacing={3}>
        {grid.map((item, i) => (
          <Grid item xs={6} sm={3} md={2} style={{ height: '24vh' }}>
            <Card
              grid={grid}
              setShownGrid={setShownGrid}
              i={i}
              setFirstSelectedCard={setFirstSelectedCard}
              setSecondSelectedCard={setSecondSelectedCard}
              firstSelectedCard={firstSelectedCard}
              secondSelectedCard={secondSelectedCard}
            />
          </Grid>
        ))}
      </Grid>
      <Backdrop open={!shownGrid.includes(false)} onClick={() => { window.location.reload() }} style={{ zIndex: '100' }}>
        <div>
          <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }}>
            🎉 You&nbsp;Win 🎉
        </Typography>
          <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }}>
            Tap to play again
        </Typography>
        </div>
      </Backdrop>
    </div>
  );
}

function App() {
  // This determines how many cards can fit in one page without needing scrolling which will be the default
  var defaultSize = 8;
  const mediumWidth = 600
  const bigWidth = 960
  if (window.innerWidth > mediumWidth) {
    defaultSize = 16
  }
  if (window.innerWidth > bigWidth) {
    defaultSize = 24
  }

  const [playing, setPlaying] = React.useState(false)
  const [boardSize, setBoardSize] = React.useState(defaultSize)

  // true if input is valid
  const inputValid = !isNaN(boardSize) && boardSize % 2 == 0 && boardSize > 1 && boardSize <= 500;
  const boardTooBig = boardSize > 500;

  console.log()

  // Begin game when enter is pressed
  React.useEffect(() => {
    function onEnterKey(event) {
      if (event.keyCode === 13 && inputValid) {
        setPlaying(true)
      }
    };

    document.addEventListener("keyup", onEnterKey);
    return () => document.removeEventListener("keyup", onEnterKey);
  })

  return (
    <div>
      <Slide direction="down" in={!playing} mountOnEnter unmountOnExit timeout={500} style={{ position: 'absolute' }}>
        <div style={{ padding: '30px' }}>
          <Typography variant="h3">Epic memory game</Typography>
          <Typography variant="h6" style={{ marginLeft: '2px', marginBottom: '20px' }}>
            By Ben Hong
          </Typography>
          <div style={{ marginBottom: '30px' }}>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>How to play:</Typography>
            <Typography variant="body1">
              You are shown the cards for 2 seconds at the start.
              Try to remember as many as you can in this time.
              When time is up, the cards will flip and hide the emojis.
              To play, click on cards which are pairs.
              If you match pairs correctly, the cards will be shown permanently.
              To win, make all the cards show.
          </Typography>
          </div>
          <div>
            <FormControl>
              <TextField
                id="my-input"
                label="Number of cards:"
                value={boardSize}
                onChange={(event) => {
                  setBoardSize(event.target.value);
                }}
                variant="outlined"
                error={!inputValid}
              />
              <FormHelperText id="my-helper-text">{(!inputValid) && (boardTooBig ? "The maximum is 500." : "Please provide a positive even integer.")}</FormHelperText>
              <Button variant="contained" disabled={!inputValid} onClick={() => setPlaying(true)}>
                Play
              </Button>
            </FormControl>
          </div>
        </div>
      </Slide>
      <Slide direction="up" in={playing} mountOnEnter unmountOnExit timeout={1000}>
        <div>
          <Game boardSize={parseInt(boardSize)} setPlaying={setPlaying} />
        </div>
      </Slide>
    </div>
  )
}

export default App;