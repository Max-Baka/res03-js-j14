class User{
    #id;
    #username;
    #email;
    #password;
    #firstName;
    #lastName;
    #profileImage;
    
    constructor(id, username, email, password, firstName, lastName, profilImage){
        this.#id = id;
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#profilImage = profilImage;
    } 

    get id (){
        return this.#id;
    }

    set id (id){
        this.#id = id;
    }
}
    get username (){
        return this.#username;
    }

    set username (username){
        this.#username = username;
    }
}
    get email (){
        return this.#email;
    }

    set email (email){
        this.#email = email;
    }
}
    get password (){
        return this.#password;
    }

    set password (password){
        this.#password = password;
    }
}
    get firstName (){
        return this.#firstName;
    }

    set firstName (firstName){
        this.#firstName = firstName;
    }
}
    get lastName (){
        return this.#lastName;
    }

    set lastName (lastName){
        this.#lastName = lastName;
    }
}
    get profileImage (){
        return this.#profilImage;
    }

    set profileImage (profileImage){
        this.#profileImage = profileImage;
    }
}

export { User };