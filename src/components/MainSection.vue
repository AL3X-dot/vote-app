<template>
    <div class="col blue-text flow-text text-darken-1">
        <div class="row valign-wrapper">
            <i class="material-icons ">add</i>
            <router-link to="/create">Create a Poll</router-link>
        </div>
        <div class="row valign-wrapper">
            <i class="material-icons ">add_task</i>
            <router-link to="/join">Join a Poll</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'Main',

}
</script>
<style scoped>
    .material-icons{
        margin:0 20px;
    }
    .row{
        cursor: pointer;
    }
</style>