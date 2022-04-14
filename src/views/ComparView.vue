<template>
    <div>
        <div class="container mx-auto">
            <div class="flex items-center justify-between bg-orangee p-3 rounded-lg my-3">
                <p class="font-semibold pr-12">Сравниваемые товары</p>
                <div v-for="item of allTovary" :key="item" class="bg-white rounded-lg p-4 w-full mr-3">
                    <div class="flex items-start justufy-between w-full">
                        <img class="w-1/4" :src="item.images[0].first" alt="">
                        <p class="pr-2 text-base font-semibold">{{item.title}}</p>
                        <i class="text-left border-2 text-gray-500 border-gray-200 rounded-lg border-rounded bg-gray-200 p-1 far fa-heart"></i>
                    </div>
                    <p class="text-right font-semibold" >{{item.price}} тг.</p>
                    <div class="flex items-center justufy-between w-full">
                        <p class="w-1/3 pl-4 text-sm font-semibold uppercase">Убрать</p>
                        <p class="w-2/3 bg-bluee text-center text-white px-2 py-2 my-2 rounded-lg uppercase text-sm font-semibold hover:cursor-pointer">В корзину</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ComparView",
    computed: mapGetters(['allTovary'])
}
</script>