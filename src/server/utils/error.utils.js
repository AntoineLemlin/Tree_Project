module.exports.signUpErrors = (err)=>{
    let errors = { username : '',email: '', password : 'wrong password'}
    if (err.message.includes('username')){
        errors.username = "username incorrect ou déja pris"
    }
    if (err.message.includes('password')){
        errors.password = "password  doit faire + de 6 caractères"   
    }
    if (err.message.includes('email')){
        errors.email = "email incorrect"
    }

    if(err.code === 11000 && Object.keys(err.keyValue)[0].includes('username')){
        errors.username = "username deja enregistré"
    }
    if(err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')){
        errors.email = "mail deja enregistré"
    }
    return errors
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}
  
    if (err.message.includes("email")) 
      errors.email = "Email inconnu";
    
    if (err.message.includes('password'))
      errors.password = "Le mot de passe ne correspond pas"
  
    return errors;
  }