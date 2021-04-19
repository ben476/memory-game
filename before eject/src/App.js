import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

var emojis = [
  '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❕', '❔', '🔃', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Card(props) {
  const { shownGrid, setShownGrid, grid, i, firstSelectedCard, secondSelectedCard, setFirstSelectedCard, setSecondSelectedCard, clickAllowed, setClickAllowed } = props;
  const [showing, setShowing] = React.useState(true)
  const [correct, setCorrect] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setShowing(false), 2000)
  }, [])

  React.useEffect(() => {
    if (i === firstSelectedCard || i === secondSelectedCard) {
      if (firstSelectedCard !== undefined && secondSelectedCard !== undefined) {
        console.log('both cards found')
        if (grid[firstSelectedCard] !== grid[secondSelectedCard]) {
          console.log('not a match, hiding')
          setClickAllowed(false)
          setTimeout(() => {
            setShowing(false)
            setClickAllowed(true)
          }, 500)
        } else {
          setShownGrid((prev) => {
            prev[i] = true
            return prev
          })
          setCorrect(true)
        }
        setFirstSelectedCard(undefined)
        setSecondSelectedCard(undefined)
      }
    }
  }, [secondSelectedCard])

  return (
    <ReactCardFlip isFlipped={showing} flipDirection="vertical" containerStyle={{ height: '100%' }}>
      <Paper
        elevation={10}
        style={{ height: '100%', fontSize: 'calc(0.5 * 25vh)', textAlign: 'center' }}
        onClick={() => {
          if (clickAllowed && !showing) {
            console.log('not showing rn')
            if (i !== firstSelectedCard && i !== secondSelectedCard) {
              console.log(firstSelectedCard, secondSelectedCard)
              console.log('not currently selected')
              if (firstSelectedCard !== undefined) {
                console.log('setting as second card')
                setSecondSelectedCard(i)
              } else {
                console.log('setting as first card')
                setFirstSelectedCard(i)
              }
              setShowing(true)
            }
          }
        }}>
        ❓
      </Paper>

      <Paper
        elevation={correct ? 0 : 10}
        style={{ height: '100%', fontSize: 'calc(0.5 * 25vh)', textAlign: 'center' }}
      >
        {grid[i]}
      </Paper>
    </ReactCardFlip>
  )
}

function Game(props) {
  const gridSize = Math.floor(props.boardSize / 2)
  var newGrid = []
  var emptyGrid = []
  var i;
  for (i of [...Array(gridSize).keys()]) {
    var emojiToAdd = emojis[Math.floor(Math.random() * emojis.length)];
    newGrid.push(emojiToAdd)
    newGrid.push(emojiToAdd)
    emptyGrid.push(false)
    emptyGrid.push(false)
  }

  shuffleArray(newGrid)

  const [grid, setGrid] = React.useState(newGrid)
  const [shownGrid, setShownGrid] = React.useState(emptyGrid)
  const [firstSelectedCard, setFirstSelectedCard] = React.useState(undefined)
  const [secondSelectedCard, setSecondSelectedCard] = React.useState(undefined)
  const [clickAllowed, setClickAllowed] = React.useState(true)

  console.log('first card', firstSelectedCard)
  console.log('second card', secondSelectedCard)

  console.log('grid', grid)

  return (
    <div className="App">
      <Grid container spacing={3} style={{ margin: '2%', width: '95vw' }}>
        {grid.map((item, i) => (
          <Grid item xs={6} sm={3} md={2} style={{ height: '22.5vh' }}>
            <Card grid={grid} shownGrid={shownGrid} setShownGrid={setShownGrid} i={i} setFirstSelectedCard={setFirstSelectedCard} setSecondSelectedCard={setSecondSelectedCard} firstSelectedCard={firstSelectedCard} secondSelectedCard={secondSelectedCard} clickAllowed={clickAllowed} setClickAllowed={setClickAllowed} />
          </Grid>
        ))}
      </Grid>
      <Backdrop open={!shownGrid.includes(false)} onClick={() => { window.location.reload() }} style={{ zIndex: '10000' }}>
        <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }}>
          🎉 You&nbsp;Win 🎉
        </Typography>
      </Backdrop>
    </div>
  );
}

function App() {
  // This determines how mnay cards can fit in one page without needing scrolling
  var defaultSize = 8;
  const mediumScreenWidth = 600
  const bigScreenWidth = 960

  if (window.innerWidth > mediumScreenWidth) {
    defaultSize = 16
  }
  if (window.innerWidth > bigScreenWidth) {
    defaultSize = 24
  }

  // Set default states
  const [playing, setPlaying] = React.useState(false)
  const [boardSize, setBoardSize] = React.useState(defaultSize)

  // true is input is valid
  const inputValid = (boardSize % 2 == 0 && boardSize > 1) || boardSize <= 100;
  const boardTooBig = boardSize > 100;

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
              <FormHelperText id="my-helper-text">{(!inputValid) && (boardTooBig ? "The maximum is 100." : "Please provide a positive even integer.")}</FormHelperText>
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
