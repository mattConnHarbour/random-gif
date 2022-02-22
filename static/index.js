import imageFrame from '../static/components/imageFrame.js'
import gifApiKey from '../static/services/gifApi.js'
import getImage from '../static/getImage.js'

Vue.component('image-frame', imageFrame)

const app = new Vue({
    el: '#root',
    data: {
        gifCount: 1,
        gifData: [],
    },
    mounted(){
        // initial population of data array
        for(let i=0; i < this.gifCount; i++){
            this.gifData.push({
                loading: true,
                url: null
            })
        }

        // initial fetch of gif urls
        this.gifData.forEach(gif => {
            getImage(gifApiKey).then(url => {
                gif.url = url
                gif.loading = false
            })
        })
    },
    template: `<div class="wrapper has-background-light">
        <div class="hero">
            <div class="hero-body">
                <div class="columns is-centered is-flex-wrap-wrap">
                    <div v-for="gif in gifData" class="column is-4">
                        <image-frame :loading=gif.loading :url=gif.url></image-frame>
                    </div>
                </div>
            </div> <!-- end hero body -->
        </div> <!-- end hero -->
    </div>`
})