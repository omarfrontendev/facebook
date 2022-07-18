import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
  transition: color, background-color .3s;
}
:root {
  --main-color: ${({ theme }) => theme.mainColor};
}
.commets_container,
body {
  background-color: ${({ theme }) => theme.bodyBGK};
  color: ${({ theme }) => theme.bodycolor};
}
header {
  box-shadow: ${({ theme }) => theme.headerShadow};
}
.list,
.commets_container .comment,
.card {
  background-color: ${({ theme }) => theme.cardBGKColor};
}
.list,
.card {
  box-shadow: ${({ theme }) => theme.cardShadow};
}
.left_bar .card {
  background-color: ${({ theme }) => theme.cardLeftBGK};
}
.list .message,
.chat_header h4,
.user_rightbar p,
.user_rightbar div,
.comment > p,
.event_details p,
.top_share input[placeHolder],
.top_share input,
.list span,
.links a {
  color: ${({ theme }) => theme.textcolor};
}
.links a:hover {
  color: ${({ theme }) => theme.linksHoverColor};
}
nav .right_nav .user_name,
nav .left_nav .logo {
  color: ${({ theme }) => theme.logoColor};
}
.dicrecttions_btn, 
.center_nav button.toggle_btn {
  color: var(--main-color);
  width: 30px
}
.btns .closeBtn,
.sure_btn, .friends_list li .btns .btn {
  color: ${({ theme }) => theme.textcolor}
}
.friends_list li .btns .btn.delete_btn {
  color: ${({ theme }) => theme.trashcolor}
}
.links + .showMore_btn, .main_btn {
  color: ${({ theme }) => theme.logoColor};
  background-color: ${({ theme }) => theme.btnBGK};
}
.modal {
  background-color: ${({ theme }) => theme.chatBoxBGK};
}
.chat_box .chat_footer form input,
.chat_messages {
  background-color: ${({ theme }) => theme.messagesBOXBGK};
}
.chat_box .chat_footer form input:focus {
  background-color: ;
}
.chat_messages p {
  background-color: ${({ theme }) => theme.messagesColor}
}
.chat_messages div.your_message p {
  background-color: ${({ theme }) => theme.mymessagesBGK};
  color: ${({ theme }) => theme.mymessagesColor};
}
@media(max-width: 750px) {
  .center_nav .input_control,
  nav .center_nav {
    background-color: ${({ theme }) => theme.centerNavBGK};
  }
}
nav .right_nav .notidications .list .message .icons {
  color: ${({ theme }) => theme.eyeColor}
}
`

export const lightTheme = {
  mainColor: '#3b5998',
  bodyBGK: '#dadde1',
  bodycolor: '#000',
  cardShadow: '0px 0px 14px 4px #dddddd33',
  cardBGKColor: '#fff',
  headerShadow: 'none',
  cardLeftBGK: '#FFF',
  linksColor: '#000',
  linksHoverColor: 'var(--main-color)',
  mainBtnBGK: 'var(--main-color)',
  logoColor: '#FFFF',
  textcolor: '#333',
  trashcolor: '#e24242',
  btnBGK: 'var(--main-color)',
  centerNavBGK: '#fff',
  chatBoxBGK: '#FFF',
  messagesBOXBGK: '#E2E2E3',
  messagesColor: '',
  mymessagesBGK: '',
  eyeColor: ''
}

export const darkTheme = {
  mainColor: '#082032',
  bodyBGK: '#030e16',
  bodycolor: '#D6D5A8',
  cardShadow: '0px 0px 10px 0px #1413138f',
  cardBGKColor: '#082032',
  headerShadow: '0px 2px 17px 0px #02020261',
  cardLeftBGK: 'var(--main-color)',
  linksColor: '#FFF',
  linksHoverColor: '#ddd',
  mainBtnBGK: '#454545',
  logoColor: '#D6D5A8',
  textcolor: '#D6D5A8',
  trashcolor: '#ff9d9ds',
  btnBGK: '#030e16',
  centerNavBGK: '#D6D5A8',
  chatBoxBGK: '#050a27',
  messagesBOXBGK: '#585d7f',
  messagesColor: 'var(--main-color)',
  mymessagesBGK: '#FFF',
  mymessagesColor: 'var(--main-color)',
  eyeColor: '#D6D5A8'
}