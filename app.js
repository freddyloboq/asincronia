const login = () => {
  setTimeout(()=>{
    console.log("se loguea la persona");
  },4000)
}
const logout = () => {
  setTimeout(() => {
    console.log("se desloguea la persona")
  }, 6000);
}
const createAcount = (login, logout) => {
  setTimeout(() => {
    console.log("se crea una cuenta")
  }, 2000);
  login()
  logout()
}

createAcount(login, logout);
