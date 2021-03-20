import {createStore} from 'vuex'
import io from 'socket.io-client'
const store = createStore({
    state:{
        socket:{},
        roomId:'',
        votesRecieved:0,
        usersInTheRoom:0,
        mode:''
    },
    mutations:{
        connectToServer(state){
            state.socket = io("http://localhost:3000",{transports:['websocket']})
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
        }
    },
    actions:{
    },
    getters:{
        getSocket(state){
            return state.socket
        }
    }
})

export default store