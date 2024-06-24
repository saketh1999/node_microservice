import {ServiceBroker} from 'moleculer'

const broker = new ServiceBroker()


const users=[]


broker.createService({
    name:'email',
    actions:{
        async sendEmail(ctx){
            const {recipient, subject, content} = ctx.params;

            //simulate email logic
            console.log(`sending email to ${recipient} with subject ${subject}`);
            console.log (`Content: ${content}`);
            return `Email sent to ${recipient}`;

        }
    }
    
})

export default broker