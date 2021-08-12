interface Usuario {
   nome: string;
   email: string;
   endereco?: string;
}

function getUser(): Usuario {
   return {
      nome: "Arthur Saldanha",
      email: "saldanhadev@gmail.com"
   }
}

function setUser(usuarios: Usuario) {
   return "..."
}