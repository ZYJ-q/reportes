import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'umi';
import { InputAdornment } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Reset = () => {
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    history.push('/login');
  };

  const [timeLeft, setTimeLeft] = React.useState(0);

  const timerIdRef = React.useRef(-1);

  React.useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerIdRef.current);
    }
  }, [timeLeft]);

  React.useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, []);

  const startInterval = () => {
    setTimeLeft(60);
    timerIdRef.current = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  };

  const onSendCode = () => {
    console.log('发送验证码');
    startInterval();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            重置密码
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="请输入邮箱"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="code"
              label="请输入验证码"
              type="code"
              id="code"
              autoComplete="current-code"
              className="text"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <a onClick={timeLeft === 0 ? onSendCode : undefined}>
                      {timeLeft === 0 ? '发送验证码' : `${timeLeft}s后重新获取`}
                    </a>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="请输入新密码"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="请重新输入新密码"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              确认重置
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Reset;
