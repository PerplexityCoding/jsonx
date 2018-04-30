<template>
    <p>
        <textarea v-model="text" />
    </p>
</template>

<script>
    export default {
        name: 'JsonDocRenderer',
        props: ['file'],
        methods: {
        },
        created: function() {
            this.text = this.$props.file.data.text;
        },
        methods: {
            json() {
                this.$props.file.data.text = this.text;
                return this.$props.file;
            }
        },
        data: {
            text: ''
        }
    }
</script>
