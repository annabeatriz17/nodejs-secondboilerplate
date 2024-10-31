class User {
    constructor( nome, email, password) {
        this.id = this.generaId();
        this.nome = nome;
        this.email = email;
        this.password = password;
    }

    generaId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default User;