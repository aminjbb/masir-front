<template>
    <header class="d-none d-md-flex">


        <div class="main-container pt-5">
           <v-row>
            <v-col cols="5">
                <v-btn-toggle class="mb-1" group>
                    <v-btn  active-class="headr-active" to="/" text class="d-flex align-center pb-0 mb-0" large exact>
                        <span class="t14400 Black--text"> خانه</span>
                    </v-btn>

                    <v-btn to="/lavean-mag" active-class="headr-active" text class="d-flex align-centerpb-0 mb-0" exact
                        large>
                        <span class="t14400 Black--text"> سرویس‌ها</span>
                    </v-btn>
                    <v-btn to="/lavean-mag" active-class="headr-active" text class="d-flex align-centerpb-0 mb-0" exact
                        large>
                        <span class="t14400 Black--text"> فروشگاه</span>
                    </v-btn>

                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/about-us" large>
                        <span class="t14400 Black--text"> درباره ما </span>
                    </v-btn>
                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/contact-us" large>
                        <span class="t14400 Black--text"> تماس با ما </span>
                    </v-btn>
                    <v-btn active-class="headr-active" text class="d-flex align-center pb-0 mb-0" to="/contact-us" large>
                        <span class="t14400 Black--text"> مقالات</span>
                    </v-btn>

                </v-btn-toggle>
            </v-col>
            <v-col cols="3">

            </v-col>
            <v-col cols="4" class="headerPage">
                <v-row class="pt-3">
                <v-col cols="8">
                    <v-text-field
                    outlined
                    color="black"
                    label="جست‌و‌جو کنید"
                    append-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
                 <v-col cols="2">
                    <img src="~/assets/img/ShoppingCart.svg" alt="">
                 </v-col>
                 <v-col cols="2">
                    <img src="~/assets/img/UserCircle.svg" alt="">
                 </v-col>
                </v-row>
            </v-col>
           </v-row>
            
        </div>

    </header>
</template>
<script>
export default {

}
</script>