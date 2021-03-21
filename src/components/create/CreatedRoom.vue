<template>
    <div class="container">
        <div class="row">
            <h4>Room Details</h4>
        </div>
        <div class="row rId flow-text">
            <div class="col">
                Room ID :
            </div>
            <div class="col blue-text">
                {{roomId}}
            </div>
            <div class="col right">
                <i class="material-icons" @click="copyText">content_copy</i>
            </div>
        </div>
        <div class="row myRow">
            <div class="col">
                <h5>Users Joined</h5>
            </div>
            <div class="col right">
                <h5>{{$store.state.usersInTheRoom}}</h5>
            </div>
        </div>
        <div class="row myRow">
            <div class="col">
                <h5>Votes Recieved</h5>
            </div>
            <div class="col right">
                <h5>{{$store.state.votesRecieved}}</h5>
            </div>
        </div>
        <div class="row center">
            <div class="btn btn-flat blue darken-1 white-text" @click="endRoom()">End Room</div>
        </div>
    </div>
</template>
<script>
import store from '../../modules/store'
import { copyText } from 'vue3-clipboard'
export default {
    name:'CreatedRoom',
    store:store,
    data(){
        return {
            options:[],
            count:[],
            result:[],
        }
    },
    created(){
        this.roomId = this.$store.state.roomId
        this.socket = this.$store.getters.getSocket
        this.options = this.$store.getters.getOptions
        this.count = this.$store.getters.getCount
    },
    methods:{
        endRoom(){
            console.log('Ending the room');
            this.generateResults()
            this.$store.commit('updateResult',this.result)
            this.$store.commit('updateCount',this.count)
            this.$store.commit('endConnection')
            this.$router.push('/results')
        },
        updateCount(id){
            this.count = this.count.filter(x=>{
                if(x.id == id){
                    x.value ++
                }
                return x
            })
        },
        generateResults(){
            for(let i=0;i<this.options.length;i++){
                let content = this.options.find(x=>x.id == i+1).content
                let value = this.count.find(x=>x.id == i+1).value
                this.result.push({
                    content:content,
                    value:value,
                })
            }
        },
        copyText(){
            copyText(this.roomId,undefined,()=>{
                alert('Copied to clipboard')
            })
        }
    },
    mounted(){
        this.socket.on('newVoter',data=>{
            console.log(`New User joined ${data}`);
            this.$store.commit('updateUsersInTheRoom')
            this.socket.emit('sendData',data)
        })

        this.socket.on('voteResult',data=>{
            this.$store.commit('updateVotesRecieved')
            this.updateCount(data)
        })
    }
}
</script>
<style scoped>
    blockquote{
        border-left: 5px solid rgb(81, 183, 241);
    }
    .rId{
        border:2px solid grey
    }
    .myRow{
        border-bottom: 3px solid lightblue;
    }
    .material-icons{
        cursor: pointer;
    }
</style>