<template>
  <div class="container">
    <div class="tab" v-if="windowWith > 768" >
        <h2>Tab</h2>
        <div class="tab--header">
            <ItemTitle 
                v-for="item in data" 
                :key="item.id"
                :itemProps="item"
                @item-id="activeItem"
            />
        </div>
        <div class="tab--content">
            <ItemContent 
                v-for="item in data" 
                :key="item.id"
                :itemProps="item"
            />
        </div>
    </div>

    <div class="according" v-if="windowWith <= 768" >
        <h2>According</h2>
        <ul class="according--ul">
            <ItemData 
                v-for="item in data"
                :key="item.id"
                :itemProps="item"
                @item-id="activeItem"
            />
        </ul>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue'
import axios from 'axios'
import ItemTitle from './ItemTitle'
import ItemContent from './ItemContent'
import ItemData from './ItemData'

export default {
    name: 'IndexData',
    components: {
        ItemTitle, 
        ItemContent, 
        ItemData
    },
    setup(){
        const data = ref()
        
        const getData = async() => {
            try{
                const res = await axios.get('https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json')
                
                res.data.map((item, index) => {
                    if(index == 0) item['status'] = true
                    else item['status'] = false

                    item['id'] = index
                })
                
                data.value = res.data;
            }catch(error){
                console.log(error)
            }
        }

        getData()

        const windowWith = ref(window.innerWidth)

        const updateWindowSize = () => {
            windowWith.value = window.innerWidth;

            // elementStatus === false -> all elements is hidden
            let elementStatus = data.value.some(item => item['status'] == true)

            if (windowWith.value > 768 && elementStatus === false){
                data.value.map((item, index) => {
                    if(index == 0) item['status'] = true
                        else item['status'] = false
                })
            }
        }

        onMounted(() => {
            window.addEventListener('resize', updateWindowSize);
        })

        onUnmounted(() => {
            window.removeEventListener('resize', updateWindowSize);
        });

        const activeItem = id => {
            data.value.map(item => {
                if(window.innerWidth <= 768){
                    if(item.id == id) item.status = !item.status
                    else item.status = false
                }else{
                    if(item.id == id) item.status = true
                    else item.status = false
                }
            })
        }

        return {
            data,
            activeItem,
            windowWith
        }
    }
}
</script>

<style scoped>
    .tab{
        padding: 50px;
    }
    .according{
        padding: 50px;
    }
    .according--ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>