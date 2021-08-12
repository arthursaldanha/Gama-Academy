interface Usuario {
   nome: string;
   email: string;
   adresse?: string;
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