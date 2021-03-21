<template>
    <div class="container">
        <div class="row">
            <span><h4>Room is created</h4></span>
        </div>
        <div class="row">
            <span>
                <h6>RoomId is : {{roomId}}</h6>
            </span>
        </div>
        <div class="row">
            <blockquote id='bq'>
                Users Joined : {{$store.state.usersInTheRoom}}
            </blockquote>
        </div>
        <div class="row">
            <blockquote>
                Votes Recieved : {{$store.state.votesRecieved}}
            </blockquote>
        </div>
        <div class="row">
            <div class="btn btn-flat blue darken-1 white-text" @click="endRoom()">End Room</div>
        </div>
    </div>
</template>
<script>
import store from '../../modules/store'
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
    
</style>