import {createStore} from 'vuex'
import io from 'socket.io-client'
const store = createStore({
    state:{
        compName:'Create',
        socket:{},
        roomId:'',
        votesRecieved:0,
        usersInTheRoom:0,
        mode:''
    },
    mutations:{
        setCompName(state,payload){
            state.compName = payload
        },
        establishConnection(state){
            state.socket = io.connect('localhost:3000',{transports:['websocket']})
        },
        createRoom(state,payload){
            state.mode = 'creation'
            state.socket.emit('createRoom',payload)
        },
        setRoomId(state,payload){
            state.roomId = payload
        },
        joinRoom(state,payload){
            state.mode = 'joining'
            state.socket.emit('joinRoom',payload)
        },
        endConnection(state){
            state.socket.disconnect()
        },
        updateUsersInTheRoom(state){
            state.usersInTheRoom ++ 
        }
    },
    actions:{
        createRoom(context,data){
            context.commit('createRoom',data)
        }
    },
    getters:{
        getCompName(state){
            return state.compName
        }
    }
})

export default store