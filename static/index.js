import imageFrame from '../static/components/imageFrame.js'
import gifApiKey from '../static/services/gifApi.js'
import getImage from '../static/getImage.js'

Vue.component('image-frame', imageFrame)

const app = new Vue({
    el: '#root',
    data: {
        gifCount: 3,
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
    methods: {
        updateGif(index){
            const gif = this.gifData[index]
            gif.loading = true
            getImage(gifApiKey).then(url => {
                gif.loading = false
                gif.url = url
            })
        }
    },
    template: `<div class="wrapper has-background-light">
        <div class="hero">
            <div class="hero-body">
                <div class="columns is-centered is-flex-wrap-wrap">
                    <div v-for="(gif, i) in gifData" class="column is-4">
                        <image-frame
                        :loading=gif.loading
                        :url=gif.url 
                        :index=i
                        @getGif=updateGif
                        />
                    </div>
                </div>
            </div> <!-- end hero body -->
        </div> <!-- end hero -->
    </div>`
})