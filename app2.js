const usuarios = ["Pepe","michael"," Jordan" , "23"]

const login = new Promise((resolve, reject)=>{
  setTimeout(() => {
    if(usuarios.some((usuario)=> usuario == "Pepe")){
      resolve("Usuario logueado")
    }else{
      reject("Error: usuario no encontrado")
    }
  },4000)
})

login.then(
  (response) => console.log("response :>> ", response),
  (error) => console.log("error :>> ", error)
);