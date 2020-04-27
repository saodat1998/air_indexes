<template>
    <v-container>
        <v-row class="my-10">
            <div class="login-box">
                <div class="text-center mb-10">
                    <h1 class="mt-10 mb-3 display-1 font-weight-bold">Welcome</h1>
                    <p>To get started, please log-in below</p>
                </div>
                <v-form @submit.prevent="handleSubmit" method="post" ref="form">
                    <v-text-field v-model="email" label="Email" placeholder="example@email.com" type="email" :rules="emailRules"></v-text-field>
                    <v-text-field v-model="password" label="Password" placeholder="*******" type="password"></v-text-field>
                    <v-checkbox v-model="checkbox" :label="`Remember me`"></v-checkbox>
                    <v-btn type="submit" block color="#4cbbe4" dark elevation="5" @click="submit()">Submit</v-btn>
                    <div class="text-center question">
                        <p class="caption"><a href="#">Forgot password?</a></p>
                    </div>
                </v-form>
            </div>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'LoginInput',
    data() {
        return {
            password: '',
            email: '',
            checkbox: false,
            emailRules: [
                v =>
                /.+@.+\..+/.test(v ? v : "name@mail.uz") ||
                this.$t("email_must_be_valid")
            ],
            passwordRules: [
                v => (v || "").length < 19 || this.$t("password_in_8_19"),
                v => (v || "").length > 7 || this.$t("password_in_8_19"),
                v =>
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(v) ||
                this.$t(
                    "password_must_contain_minimum_8_characters_except_symbols_like"
                )
            ],
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                console.log(this.email, this.password);
            }
            // } else if (this.email == null || this.email == '') {
            //     this.errorEmail = "Please Enter Email";
            // } else if (!this.reg.test(this.email)) {
            //     this.errorEmail = "Please Enter Correct Email";
            // }
        },
        handleSubmit() {
            let formData = new FormData();
            // console.log(this.name)
            formData.append("username", this.email);
            formData.append("password", this.password);
            console.log(this.email);
            console.log(this.password);

            this.$http
                .post('auth/login', formData)
                .then(response => {
                    console.log(response);
                })
                .catch(response => {
                    console.log(response);
                });

        }

    }
}
</script>
<style scoped>
.login-box {
    min-width: 300px;
    max-width: 480px;
    margin: 30px auto;
}

.question {
    margin: 10px;
}

.question a {
    color: #999;
}

.sign-up a {
    text-decoration: none;
}
</style>