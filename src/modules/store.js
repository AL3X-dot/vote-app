import {createStore} from 'vuex'
import io from 'socket.io-client'
const store = createStore({
    state:{
        compName:'Create',
        socket:{},
        roomId:'',
        votesRecieved:0
    },
    mutations:{
        setCompName(state,payload){
            state.compName = payload
        },
        establishConnection(state){
            state.socket = io.connect('localhost:3000',{transports:['websocket']})
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
            state.socket.disconnect()
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