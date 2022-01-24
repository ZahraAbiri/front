<template>
    <div>
        <div class="ui items">
            <div class="item">
                <div class="ui small image">

                    <img alt=" " :src="getimg()" style="width: 20px;height: 20px">

                </div>
            </div>

        </div>
        </div>


</template>

<script>
    import ImageDataService from '../services/ImageDataService'
    import image from '../assets/C.jpg'


    export default {
        name: "imageLoadBase64",

        data() {
            return {
                logoMe:"",
                logo1: '',
                image: image,
                info: {
                    id: null,
                    name: "",
                    image: null,
                },
                infos: [],
                // path: 'http://localhost:8080/image/getImage',
            }
        }, created() {
            // this.dataUrl();
            // this.gettestimg();
            // this.convetB64T0Blob();
            // this.loadImage();
            // this.getInfo();
            // this.testImage();
            // this.getimg();
        }, methods: {
            getTests() {
                // axios.get('http://localhost:8080/image/getImage',{
                //     params:{
                //         id:1,
                //         // token:this.token
                //     }
                // }).then(res=>{
                // this.base64data=res.data.TestImage;
                // for(var i=0;i<res.data;i++){
                //     this.dataList.push({
                //         subjectId:res.data[i].SubjectId,
                //         question:res.data[i].Question,
                //         answer:res.data[i].Answer,
                //         timer:res.data[i].Timer/60
                //     });
                // }
                // });
            },
            getInfo: function () {

                {
                    // ImageDataService.getImage().then((response) => {return response});

                    // this.info.name = response.data.results[0].name;
                    // this.info.image = 'data:image/jpeg;base64,' + btoa(response.data().results[0].image.data);
                }
            }, gettestimg() {
                console.log("gettestimg");
                ImageDataService.getOneImage().then((response) => {
                    const Object = JSON.parse(response)
                    console.log(Object + "object")
                    console.log("JSON.parse(data) : " + JSON.parse(response));
                    // console.log("respose" + respons);
                    // this.info.name = response;
                    // this.info.image =btoa(response);
                });

            },
            getimg() {
                console.log("getimg");
                ImageDataService.getImage().then((response) => {


                    this.infos=response.data;
                    console.log(this.infos);
                    console.log(this.infos[0].valueOf());
                    // for(let o=0;o<3;o++){
                    //     this.logoMe=JSON.stringify(response.data);
                    //     console.log(this.logoMe+"this.infos")
                    // }

                    const resultStr = JSON.stringify(response.data);
                    console.log(resultStr+" :       resultStr.name");
                    const B64B = (b64Data, contentType = '', slicesize = 512) => {
                        const byteCharacters = atob(b64Data);
                        const byteArrays = [];
                        for (let offset = 0; offset < byteCharacters.length; offset += slicesize) {
                            const slice = byteCharacters.slice(offset, offset + slicesize);
                            const byteNumber = new Array(slice.length);
                            for (let i = 0; i < slice.length; i++) {
                                byteNumber[i] = slice.charCodeAt(i);
                            }
                            const byteArray = new Uint8Array(byteNumber);
                            byteArrays.push(byteArray);
                        }

                        const blob = new Blob(byteArrays, {type: contentType});

                        return blob;
                    };
                    let mineStr=resultStr.substring(35,(resultStr.length-3));
                    console.log(mineStr+ "mineStr");
                    const contentType = 'image.jpg';
                    this.logoMe=mineStr;
                    const b64Data = this.logoMe.valueOf()
                    const blob = B64B(b64Data, contentType);
                    const blobUrl = URL.createObjectURL(blob);
                    const img = document.createElement('img');
                    img.src = blobUrl;
                    document.body.appendChild(img);
                }).catch(err => {
                    console.log(err);
                })

            },
            testImage() {
                ImageDataService.getImage().then(function (response) {
                    this.infos = response.data;
                    // console.log(response+ " : test response");
                    console.log(this.infos[1].value + "test image");
                    // console.log(response.data.infos+ "test infos");
                    // console.log(response.data.report.image + "test response");
                    const b64toBlob = (b64Data, contentType = '', slicesize = 512) => {
                        const byteCharacters = atob(b64Data);
                        console.log(byteCharacters + "byteCharacters");
                        const byteArrays = [];
                        for (let offset = 0; offset < byteCharacters.length; offset += slicesize) {
                            const slice = byteCharacters.slice(offset, offset + slicesize);
                            const byteNumber = new Array(slice.length);
                            for (let i = 0; i < slice.length; i++) {
                                byteNumber[i] = slice.charCodeAt(i);
                            }
                            const byteArray = new Uint8Array(byteNumber);
                            console.log(byteArray + "byteArray");

                            byteArrays.push(byteArray);
                        }

                        const blob = new Blob(byteArrays, {type: contentType});
                        console.log(blob + "blob");

                        return blob;
                    };
                    const contentType = 'image.jpg';
                    const b64Data = "W29iamVjdCBPYmplY3RdLFtvYmplY3QgT2JqZWN0XSxbb2JqZWN0IE9iamVjdF0sW29iamVjdCBPYmplY3Rd";
                    // const b64Data=this.info.image;
                    const blob = b64toBlob(b64Data, contentType);
                    const blobUrl = URL.createObjectURL(blob);
                    console.log(blobUrl + " : blobUrl");

                    const img = document.createElement('img');
                    img.src = blobUrl;
                    document.body.appendChild(img);
                }).catch(function (error) {
                    console.log(error + "test response");
                });
            },
            loadImage() {
                // then(res => res.json()).then((out) => {
                //     console.log('check this json', out);
                // }).catch(err => {
                //     throw err
                // });
                // let url = 'http://localhost:8080/image/getImage';
                // fetch(url).then(res => res.json()).then((out) => {
                //     console.log('check this json', out);
                //     console.log('json', out.json().parse());
                //     return out;
                // this.info.image=res.json();
                // console.log(this.info.image=res.json()+" : res");
                // }).catch(err => {
                //     throw err;
                // });
                // ImageDataService.getImage().then((response) => {
                //     // console.log(response.json() + "response json1");
                //     // response.json();
                //     console.log(response.data.json() + "response json1");
                //     console.log(response.json().parse(response) + "response json1 .parse");
                //
                //     console.log(response.data + "response1");
                //     // responseType: 'blob';
                //     this.logo1 = 'data:image/jpg;base64,' + btoa(response.data);
                //     console.log(this.logo1 + "   : logo1");
                //     this.info.image = 'data:image/jpg;base64,' + btoa(response.data);
                //     console.log(this.info.image + "image show")
                //
                // }).catch((error) => {
                //     console.log(error)
                // });
                // console.log("imageLoad method");
                // axios.get(`http://localhost:8080/image/getImage`, {
                //     headers: {
                //         // 'Authorization': `{http://localhost:8080/image/getImage}`,
                //         // 'content-type': 'image/jpg',
                //         // 'accept': 'image/jpg'
                //     }, responseType: 'blob'
                // }).then((res) => {
                //     console.log(res + "res");
                //     this.logo1 = 'data:image/jpg;base64,' + btoa(res.data);
                //     console.log(this.logo1 + "   : logo1");
                //     const urlCreator = window.Url || window.webkitURL;
                //     this.logo1 = urlCreator.createObjectURL(res.data)
                // }).catch((error) => {
                //     console.log(error)
                // });
            },

            // convertBlobToBase64(blob){
            //
            // }

                //
                // ImageDataService.getImage().then(function (response) {
                //     this.infos = response.data;
                //     console.log("resposeaaaa");
                //     return 'data:image/jpg;base64,' + btoa(new Uint8Array(this.info.image).reduce((response, byte) => response + String.fromCharCode(byte, '')))
                // });


        }
        ,
        // computed: {

        // }
    }
</script>

<style scoped>

</style>