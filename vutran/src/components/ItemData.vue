<template>
  <li class="according--li">
    <button class="item--button btn"
        :class="{'btn-primary' : itemProps.status, 'btn-secondary': !itemProps.status}"
        @click = "activeItem"
    >{{itemProps.title}}</button>

    <div class="tab--description" 
        v-html="itemProps.content" 
        v-show="itemProps.status"
    ></div>
  </li>
</template>

<script>
export default {
    name: 'ItemData',
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

<style>

</style>