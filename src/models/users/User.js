const e = require("express");

class User {
    constructor( nome, email, password) {
        this.id = this.id;
        this.nome;
        this.email;
        this.password;
    }

    generaId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default User;