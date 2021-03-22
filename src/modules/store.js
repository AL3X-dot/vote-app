import {createStore} from 'vuex'
import io from 'socket.io-client'
const store = createStore({
    state:{
        socket:{},
        roomId:'',
        votesRecieved:0,
        usersInTheRoom:0,
        options:[],
        count:[],
        result:[],
    },
    mutations:{
        connectToServer(state){
            state.socket = io("https://vue-express-server.herokuapp.com/",{transports:['websocket']})
        },
        createRoom(state,payload){
            state.socket.emit('createRoom',payload)
        },
        setRoomId(state,payload){
            state.roomId = payload
        },
        joinRoom(state,payload){
            state.socket.emit('joinRoom',payload)
        },
        endConnection(state){
            state.socket.emit("endRoom")
        },
        updateUsersInTheRoom(state){
            state.usersInTheRoom ++ 
        },
        updateVotesRecieved(state){
            state.votesRecieved ++
            console.log('New Vote Recieved');
        },
        updateOptions(state,payload){
            state.options = payload
        },
        updateCount(state,payload){
            state.count = payload
        },
        updateResult(state,payload){
            state.result = payload
        }
    },
    actions:{
    },
    getters:{
        getSocket(state){
            return state.socket
        },
        getRoomId(state){
            return state.roomId
        },
        getOptions(state){
            return state.options
        },
        getCount(state){
            return state.count
        },
        getResult(state){
            return state.result
        }
    }
})

export default store