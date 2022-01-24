<template>
    <div>
        <div class="row">
            <div class="col-8">
                <label class="btn btn-default p-0">
                    <input
                            type="file"
                            accept="image/*"
                            ref="file"
                            @change="selectImage"
                    />
                </label>
            </div>
        </div>
    </div>

</template>

<script>



    export default {
        name: "ImgSave3",
        components: {
        },
        data() {
            return {
                value: 54,
                currentStep: null,

                message: '',
                currentImage: undefined,
                previewImage: undefined,
                prototype: 0,
                imageInfoes: [],
            }
        }, methods: {



            selectImage() {
                this.currentImage = this.$refs.file.files.item(0);
                this.previewImage = URL.createObjectURL(this.currentImage);
                this.progress = 0;
                this.message = "";
                let formData = new FormData();
                formData.append("file", this.currentImage);
                console.log("formData")
                console.log(formData)
                var reader = new FileReader();
                var filebyteArray = [];
                reader.readAsArrayBuffer(this.currentImage)
                reader.onloadend = function (evt) {
                    if (evt.target.readyState == FileReader.DONE) {
                        var arrayBufer = evt.target.result;
                        let array = new Uint8Array(arrayBufer)
                        for (var i = 0; i < array.length; i++) {
                            filebyteArray.push(array[i])
                        }
                        console.log(filebyteArray)
                    }
                }

                this.$emit('changeImage', filebyteArray)

            },



        },



    }

</script>

<style>


</style>