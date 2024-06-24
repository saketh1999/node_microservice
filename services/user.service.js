import {ServiceBroker} from 'moleculer'

const broker = new ServiceBroker()


const users=[]

function generateId(){
    return Math.floor(Math.random() * 1000) +1;
}

broker.createService({
    name:'user',
    actions:{
        async createUsers(ctx){
            const{username,email} = ctx.params;
            const newUser = {id: generateId(), username, email};
            users.push(newUser);
            return newUser;
        },
        getUsers(ctx){
            return users;
        },
    },
})

export default broker