<template>
    <div class="row center">
        <router-link to="/join"><h4 class="blue-text text-lighten-1">Join a poll</h4></router-link>
    </div>

    <div class="col">
        <div class="row flow-text center">
            <h5>Create a room.</h5>
        </div>
        <div class="row valign-wrapper">
            <div class="col s7 offset-s2 input-field">
                <label for="options">Enter options</label>
                <input type="text" name="options" id="options" v-model="option">
            </div>
            <div class="col">
                <i class="material-icons"  @click="addOption" @keypress.enter="addOption">add</i>
            </div>
        </div>
        <div class="row" v-for="option in options" :key="option.id">
            <div class="col s9 offset-s1">
                <blockquote>{{option.content}}</blockquote>
            </div>
            <div class="col">
                <i class="material-icons" @click="removeOption(option.id)">delete</i>
            </div>
        </div>
        <div class="row center">
                <div v-if="checkOptions()" class="btn btn-flat blue darken-1 white-text" @click="createRoom()">Submit</div>
        </div>
    </div>
</template>
<script>
import store from '../../modules/store'
export default {
    name:'Create',
    store,
    socket:{},
    data(){
        return {
            option:{
                id:Number,
                content:String,
            },
            options:[],
            roomName:String,
            count:[],
        }
    },
    methods:{
        addOption(){
            if(this.option !=  ''){
                this.options.push({
                    id:this.options.length+1,
                    content:this.option
                })
                this.option = ''
            }
        },
        removeOption(id){
            this.options = this.options.filter(x=>x.id != id)
        },
        checkOptions(){
            if(this.options.length > 0){
                return true
            }
            return false
        },
        createRoom(){
            console.log('Creating room');
            this.options.filter(x=>{
                this.count.push({
                    id:x.id,
                    value:0,
                })
            })
            this.$store.commit('updateOptions',this.options)
            this.$store.commit('updateCount',this.count)
            this.$store.commit('createRoom',this.options)
        }
    },
    created(){
        this.roomName=''
        this.option = ''
    },
    mounted(){
        this.$store.commit('connectToServer')
        this.$store.state.socket.on('createdRoom',data=>{
            this.$store.commit('setRoomId',data.roomId)
            this.$router.push('/createdRoom')
        })
    }
}
</script>
<style scoped>
    .material-icons{
        cursor: pointer;
    }
    blockquote{
        margin:0;
        border-left:5px solid rgb(83, 163, 253);
    }
</style>