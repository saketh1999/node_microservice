import userService from './services/user.service.js'
import EmailService from './services/email.service.js'
import AuthService from './services/auth.service.js'

async function startApp(){
    await userService.start();
    await EmailService.start();
    await AuthService.start();

    try{
        const newUser = await userService.call('user.createUsers',{
            username: 'john',
            email : ' john@gmail.com'
        });
        console.log("New User Created: ", newUser);
        const users = await userService.call('user.getUsers')
        console.log('All Users:',users)

        //Simulating Sending Email
        const emailResult = await EmailService.call('email.sendEmail',{
            recipient: newUser.email,
            subject: 'Welcome to our platform',
            content: 'Thank you for signing up'
        });
        console.log(emailResult)


        //Simulate Auth
        const authResult = await AuthService.call('auth.authUser',{
            username: "admin",
            password: 'password',
        });
        console.log('Error:',authResult);
    } catch(error)

    {
        console.log('Error',error);
    }
    finally{
        await userService.stop();
        await EmailService.stop();
        await AuthService.stop();
    }
}

startApp();