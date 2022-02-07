<template lang="html" dir="ltr">

    <div ref="parentSidebar" id="parentx" dir="rtl">

        <vs-button @click="active=!active" color="blue" type="filled" icon="menu"
                   dir="ltr" id="button" class="app-component"></vs-button>


        <vs-sidebar parent="body" default-index="1" position-right color="pink" class="sidebarx" spacer @click="active"
                    v-model="active" dir="ltr">

            <div class="header-sidebar" slot="header">

<!--                <vs-avatar :src="localSrc">-->

<!--                </vs-avatar>-->

                <h6>
                    Manager Panel
<!--                    <vs-button color="pink" icon="more_horiz" type="flat"></vs-button>-->
                </h6>

            </div>

            <vs-sidebar-item index="1"  dir="rtl">
                <vs-navbar-item index="1">
                    <a href="/list">خانه</a>
                </vs-navbar-item>
            </vs-sidebar-item>
            <!-- @close:clickme="onclickfalse" -->
            <vs-sidebar-item index="3" @click="callfalse" color="purple" type="filled" icon="add" dir="rtl">
                <vs-popup fullscreen button-close-hidden title=" افزودن کاربر" :active.sync="popupActive3"
                          @close:clickme="onclickfalse">
<!--                    <loginpopup @close:clickme="onclickfalse"></loginpopup>-->
                </vs-popup>
            </vs-sidebar-item>

            <vs-sidebar-item index="4"  dir="rtl">
                <vs-navbar-item index="4">
                    <a href="#">D</a>
                </vs-navbar-item>
            </vs-sidebar-item>

            <vs-sidebar-item index="5">
                <vs-navbar-item index="5">
                    <a href="#">B</a>
                </vs-navbar-item>
            </vs-sidebar-item>

            <div class="footer-sidebar" slot="footer">
                <vs-button  color="danger" type="flat" @click="goOut()">log out</vs-button>
                <vs-button icon="settings" color="purple" type="border"></vs-button>


            </div>

        </vs-sidebar>
    </div>

</template>

<script>
    // import loginpopup from '../userlogin/loginpopup'

    export default {
        // components: {loginpopup},
        data: () => ({
            popupActive3: false,
            activePrompt2: false,
            active: false,
            // localSrc: require('pp9.png')
        }), methods: {
            close() {
                console.log("pop3 false");
                this.popupActive3 = true;
            },
            goOut() {
                this.$router.push('/')
            }, callfalse() {
                this.active = false;
                this.popupActive3 = true;
            }, onclickfalse(value) {
                this.popupActive3 = value;
            }
        }
        ,
    }
</script>

<style lang="css">
    .parentx {
        overflow: hidden;
        height: 36%;
        width: 36%;
        position: relative;
    }

    .header-sidebar {
        /*background-image: url("Tulips.jpg");*/
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 36%;
    }

    .footer-sidebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 36%;

    }


    h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
    }

    .app-component {
        position: fixed;
        right: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
    }

    .poptest {
        position: relative;
        top: 10%;
        height: 100%;
        margin: 0;


    }

    .popup_example {
        float: left;
        width: 50%;
        margin: 10px;
        margin-top: 5px;
        /*margin-left: 10px;*/

    }

    #con-vs-popup {
        z-index: 530;

    }

    #vs-popup {
        z-index: 530;
        /*width: 20px !important;*/
        /*height: auto;*/
        /*width: auto !important;*/
        /*padding: 1px;*/
    }

    #vs-popup--content {
        width: auto !important;
        padding: 1px;
        /*font-size: 1rem;*/
    }

</style>
