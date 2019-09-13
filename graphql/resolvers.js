import {people, getById} from "./db";



const resolvers  = {
    Query : {
        people : () => people,
        // person : (_,{id}) => getById(id)
        person : (_,args) => console.log(args)
    }
}

export default resolvers;