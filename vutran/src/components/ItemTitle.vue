<template>
    <button class="item--button btn" 
    :class="{'btn-primary' : itemProps.status, 'btn-secondary': !itemProps.status}" 
    @click="activeItem"
    >{{itemProps.title}}</button>
</template>

<script>
export default {
    name: 'DataItem',
    props: ['itemProps'],
    setup(props, context){
        const activeItem = () => {
            context.emit('item-id', props.itemProps.id)
        }
        return {
            activeItem
        }
    }
}
</script>

<style scoped>
    .item--button{
        margin-right: 10px;
    }
</style>