<template>
    <div class="container">
        <span><h5>New Poll</h5></span>
        <div class="col l12 m12">
            <div class="row">
                <label for="">Enter room name</label>
                <input type="text" v-model="roomName">
            </div>
            <div class="row valign-wrapper">
                <div class="col s11 l11 m11 input-field">
                    <label for="">Enter options</label>
                    <input type="text" v-model="option">
                </div>
                <div class="col s1 m1 l1">
                    <i class="material-icons" @click="addOption">add</i>
                </div>
            </div>
            <div class="row valign-wrapper" v-for="option in options" :key='option.id'>
                <div class="col l10 m10 s10">
                    <blockquote class="flow-text">
                        {{option.content}}
                    </blockquote>
                </div>
                <div class="col l1 m1 s2">
                    <i class="material-icons right" @click="removeOption(option.id)">delete</i>
                </div>
            </div>
            <div class="row center">
                <div v-if="checkOptions()" class="btn btn-flat blue darken-1 white-text" @click="createRoom()">Submit</div>
            </div>
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