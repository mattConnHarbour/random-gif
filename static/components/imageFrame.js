const imageFrame = {
    props: ['url', 'loading', 'index'],
    methods: {
        getGif(){
            this.$emit('getGif', this.index)
        }
    },
    template: `<div class="image-frame">
        <!-- image container -->
        <div class="columns is-centered">
            <div class="column">
                <b-image :src="url" ratio="6by4"></b-image>
            </div>
        </div>

        <!-- button container -->
        <div class="columns is-centered">
            <div class="column is-narrow">
                <b-button :loading=loading type="is-success" expanded @click="getGif">Random GIF</b-button>
            </div>
        </div>

    </div>`
}

export default imageFrame 