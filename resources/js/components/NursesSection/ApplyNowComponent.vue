<template>
    <div class="text-center">
        <v-btn
            color="primary"
            dark
            @click="openDialog"
        >
            Apply Now
        </v-btn>
        <v-dialog
            v-model="dialog"
            width="700"
        >
            <v-card class="p-12">
                <div class="row p-0 m-0">
                    <div class="col-md-12 col-sm-12">
                        <v-card-title class="d-flex justify-content-center text-center text-primary">
                            Make Payment
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-form ref="nursePaymentForm" v-model="valid" :action="paymentRoute" method="POST">

                            <v-card-text>
                                <v-row class="pa-0 m-0">
                                    <v-col cols="12" md="12">
                                        <v-text-field
                                            label="Full Name"
                                            name="name"
                                            v-model="paymentForm.name"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Full Name')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Email"
                                            v-model="paymentForm.email"
                                            name="email"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Email'), validEmail()]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Phone Number"
                                            v-model="paymentForm.phone_number"
                                            name="phone_number"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Phone Number')]"
                                        ></v-text-field>
                                    </v-col>
                                    <input type="hidden" name="amount" :value="500">
                                    <input type="hidden" name="pay_type" value="nurse_registration">
                                    <input type="hidden" name="_token" :value="csrfToken">
                                </v-row>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-content-center text-center">

                                <v-btn
                                    class="createBtn"
                                    color="info"
                                    depressed
                                    type="button"
                                    @click="submitPayment()"
                                >
                                    Pay GH¢ 500.00
                                </v-btn>

                                <v-btn
                                    hidden
                                    type="submit"
                                    ref="PaymentButton"
                                >
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <v-divider></v-divider>
                        <v-card-title class="mb-2 d-flex justify-content-center text-center text-primary">
                            Already Paid? Enter Registration Code
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-form ref="registrationForm" v-model="validRegistration">
                            <v-card-text>
                                <v-row class="pa-0 m-0">
                                    <v-col cols="12" md="12">
                                        <v-text-field
                                            label="Email"
                                            v-model="registration.email"
                                            name="email"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Email'), validEmail()]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-text-field
                                            label="Registration Code"
                                            name="registration_code"
                                            v-model="registration.registration_code"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Registration Code')]"
                                        ></v-text-field>
                                        <span class="mx-5 text-center justify-content-center text-black w-100 text-danger" v-show="showMessage">{{responseMessage}}</span>
                                    </v-col>
                                    <input type="hidden" name="_token" :value="csrfToken">
                                </v-row>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-content-center text-center">
                                <v-btn
                                    class="createBtn"
                                    color="info"
                                    depressed
                                    @click="verifyRegistrationCode"
                                    type="button"
                                    :loading="loadingRegister"
                                    :disabled="loadingRegister"
                                >
                                    Verify
                                </v-btn>
                                <v-btn
                                    hidden
                                    class="createBtn"
                                    color="info"
                                    depressed
                                    aria-label="Submit"
                                    type="submit"
                                    ref="RegisterButton"
                                >
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </div>
                </div>
                <v-divider></v-divider>
                <div class="row p-0 m-0 d-flex justify-content-end text-right">
                    <div class="col-md-12 text-right">
                        <v-btn
                            depressed
                            color="error"
                            class="mr-2"
                            @click="closeDialog"
                            aria-label="Cancel"
                            text
                        >
                            Cancel
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="registrationDialog"
            width="700"
        >
            <v-card class="p-12">
                <div class="row p-0 m-0">
                    <div class="col-md-12 col-sm-12">
                        <v-card-title class="d-flex justify-content-center text-center text-primary">
                            Registration Forms
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-form ref="nurseRegisterForm" v-model="registrationValid" :action="`${registerRoute}/${registrationForm.id}`" method="POST">

                            <v-card-text>
                                <v-row class="pa-0 m-0">
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Full Name"
                                            name="name"
                                            v-model="registrationForm.name"
                                            class="fields"
                                            filled rounded
                                            readonly
                                            dense flat
                                            :rules="[required('Full Name')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Email"
                                            v-model="registrationForm.email"
                                            name="email"
                                            class="fields"
                                            filled rounded readonly
                                            dense flat
                                            :rules="[required('Email'), validEmail()]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Phone Number"
                                            v-model="registrationForm.phone_number"
                                            name="phone_number"
                                            class="fields"
                                            filled rounded readonly
                                            dense flat
                                            :rules="[required('Phone Number')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-menu
                                            ref="dob_menu"
                                            v-model="dob_menu"
                                            :close-on-content-click="false"
                                            :return-value.sync="registrationForm.dob"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    label="Date Of Birth"
                                                    v-model="registrationForm.dob"
                                                    name="dob"
                                                    class="fields"
                                                    filled rounded
                                                    prepend-inner-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    dense flat
                                                    :rules="[required('Date Of Birth')]"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="registrationForm.dob"
                                                no-title
                                                scrollable
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="error"
                                                    @click="dob_menu = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.dob_menu.save(registrationForm.dob)"
                                                >
                                                    OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Residential Address"
                                            v-model="registrationForm.residential_address"
                                            name="residential_address"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Residential Address')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Nationality"
                                            name="nationality"
                                            v-model="registrationForm.nationality"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Nationality')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Profession"
                                            v-model="registrationForm.profession"
                                            name="profession"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Profession')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Emergency Contact"
                                            v-model="registrationForm.emergency_contact"
                                            name="emergency_contact"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Emergency Contact')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Name Of Relative"
                                            v-model="registrationForm.name_of_relative"
                                            name="name_of_relative"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            :rules="[required('Name Of Relative')]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Website (if any)"
                                            v-model="registrationForm.website"
                                            name="website"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                            :rows="2"
                                            label="Postal Address"
                                            v-model="registrationForm.postal_address"
                                            name="postal_address"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                            rows="2"
                                            label="Experience"
                                            v-model="registrationForm.experience"
                                            name="experience"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                            rows="2"
                                            label="Organizations Worked With"
                                            v-model="registrationForm.organizations_worked_with"
                                            name="organizations_worked_with"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                            rows="3"
                                            label="Travel Experience"
                                            v-model="registrationForm.travel_experience"
                                            name="travel_experience"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                        ></v-textarea>
                                    </v-col>
                                    <input type="hidden" name="_token" :value="csrfToken">
                                    <input type="hidden" name="_method" value="PUT">
                                </v-row>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-content-center text-center">

                                <v-btn
                                    class="createBtn"
                                    color="info"
                                    depressed
                                    type="button"
                                    @click="submitNurseRegister()"
                                >
                                    {{ isRegistered ? 'Update' :'Register' }}
                                </v-btn>

                                <v-btn
                                    hidden
                                    type="submit"
                                    ref="RegisterNurseButton"
                                >
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </div>
                </div>
                <v-divider></v-divider>
                <div class="row p-0 m-0 d-flex justify-content-end text-right">
                    <div class="col-md-12 text-right">
                        <v-btn
                            depressed
                            color="error"
                            class="mr-2"
                            @click="closeDialog"
                            aria-label="Cancel"
                            text
                        >
                            Cancel
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import validation from "../../Services/validation";
import RegionalCoordinator from "./RegionalCoordinator";
export default {
    name: "ApplyNowComponent",
    props: ['paymentRoute', 'csrfToken', 'registerRoute'],
    components: {RegionalCoordinator},
    data(){
        return{
            ...validation,
            trials: 0,
            dialog: false,
            registrationDialog: false,
            registrationValid: false,
            valid: false,
            loadingRegister: false,
            validRegistration: false,
            paymentForm: new Form({
                name: '',
                email: '',
                phone_number: '',
            }),
            registration: new Form({
                email: '',
                registration_code: '',
            }),
            registrationForm: new Form({
                id: null,
                email: '',
                dob: '',
                emergency_contact: '',
                experience: '',
                name: '',
                nationality: '',
                name_of_relative: '',
                organizations_worked_with: '',
                phone_number: '',
                postal_address: '',
                profession: '',
                residential_address: '',
                travel_experience: '',
                website: '',
            }),
            isRegistered: false,
            dob_menu: false,
            showMessage: false,
            responseMessage: ''
        }
    },
    methods: {
        openDialog(){
            this.dialog = true
        },
        closeDialog(){
            this.dialog = false
            this.registrationDialog = false
        },
        verifyRegistrationCode(){
            if(!this.$refs.registrationForm.validate()) return
            this.loadingRegister = true
            axios.post('nurse/verify-registration', this.registration)
                .then((response) => {
                    this.loadingRegister = false
                    this.isRegistered = (response.data.dob !== null)
                    this.registrationForm.fill(response.data)
                    this.dialog = false
                    this.registrationDialog = true
                })
                .catch((error) => {
                    this.loadingRegister = false
                    this.responseMessage = error.response.data
                    this.showMessage = true
                    this.clearErrorMessage(6000)
                })
        },
        clearErrorMessage(time){
            setTimeout(() => {
                this.showMessage = false
            }, time)
        },
        submitPayment(){
            if(!this.$refs.nursePaymentForm.validate()) return
            this.$refs.PaymentButton.$el.click()
        },
        submitNurseRegister(){
            if(!this.$refs.nurseRegisterForm.validate()) return
            this.$refs.RegisterNurseButton.$el.click()
        }
    },
    created() {
        //this.getImageList()
    }
}
</script>

<style scoped>

</style>
