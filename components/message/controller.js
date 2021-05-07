function addMessage(user, message){



    return new Promise((resolve, reject) => {

        if(!user || !message){
            console.error('[message controller] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
    
        resolve(fullMessage);
        console.log(fullMessage);
    });

    
}

module.exports = {
    addMessage,
};