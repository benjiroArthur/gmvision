<template>
<div>
    <v-data-table
        :headers="headers"
        :items="filteredList"
        :search="search"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar
                flat
                class="mt-5 mb-3"
            >
                <v-toolbar-title>Nurse Registration List</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-text-field
                    label="Search"
                    v-model="search"
                    name="transcript"
                    class="fields pa-3"
                    filled rounded
                    dense flat
                ></v-text-field>
                <v-select
                    label="Status"
                    v-model="nurseFilter"
                    :items="statusList"
                    item-value="value"
                    item-text="text"
                    class="fields pa-3"
                    filled rounded
                    dense flat
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                >
                    Export  <v-icon>mdi-file-excel</v-icon>
                </v-btn>
                <v-dialog v-model="detailsDialog" max-width="1000px">
                    <v-card>
                        <v-form ref="nurseRegisterForm" v-model="registrationValid" :action="`${registrationRoute}/${selectedForm.id}`" method="POST">
                            <input type="hidden" name="_token" :value="csrfToken">
                            <input type="hidden" name="_method" value="PUT">
                            <v-card-title class="text-h5 d-flex justify-center">Details of {{selectedForm.name}}</v-card-title>
                            <v-card-text>
                                <v-row class="pa-0 m-0">
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Full Name"
                                            name="name"
                                            v-model="selectedForm.name"
                                            class="fields"
                                            filled rounded
                                            readonly
                                            dense flat
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Email"
                                            v-model="selectedForm.email"
                                            name="email"
                                            class="fields"
                                            filled rounded readonly
                                            dense flat
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Phone Number"
                                            v-model="selectedForm.phone_number"
                                            name="phone_number"
                                            class="fields"
                                            filled rounded readonly
                                            dense flat
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Date Of Birth"
                                            v-model="selectedForm.dob"
                                            name="dob"
                                            class="fields"
                                            filled rounded
                                            readonly
                                            dense flat
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Residential Address"
                                            v-model="selectedForm.residential_address"
                                            name="residential_address"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Nationality"
                                            name="nationality"
                                            v-model="selectedForm.nationality"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Profession"
                                            v-model="selectedForm.profession"
                                            name="profession"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Emergency Contact"
                                            v-model="selectedForm.emergency_contact"
                                            name="emergency_contact"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Name Of Relative"
                                            v-model="selectedForm.name_of_relative"
                                            name="name_of_relative"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Website (if any)"
                                            v-model="selectedForm.website"
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
                                            v-model="selectedForm.postal_address"
                                            name="postal_address"
                                            class="fields"
                                            filled rounded
                                            dense flat readonly
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                            rows="2"
                                            label="Experience"
                                            v-model="selectedForm.experience"
                                            name="experience"
                                            class="fields"
                                            filled rounded readonly
                                            dense flat
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                            rows="2"
                                            label="Organizations Worked With"
                                            v-model="selectedForm.organizations_worked_with"
                                            name="organizations_worked_with"
                                            class="fields"
                                            filled rounded readonly
                                            dense flat
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                            rows="3"
                                            label="Travel Experience"
                                            v-model="selectedForm.travel_experience"
                                            name="travel_experience"
                                            class="fields"
                                            filled rounded readonly
                                            dense flat
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-row class="pa-0 m-0">
                                    <v-col md="12" cols="12">
                                        <v-card-title class="text-h6 d-flex justify-center">Official Use</v-card-title>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Received By"
                                            name="received_by"
                                            v-model="selectedForm.received_by"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            label="Confirmed By"
                                            v-model="selectedForm.confirmed_by"
                                            name="confirmed_by"
                                            class="fields"
                                            filled rounded
                                            dense flat
                                        ></v-text-field>
                                    </v-col>
                                    <v-col md="12" cols="12" class="justify-center d-flex text-center">
                                        <v-btn
                                            class="createBtn"
                                            color="info"
                                            depressed
                                            type="button"
                                            @click="updateForm()"
                                        >
                                            Save
                                        </v-btn>

                                        <v-btn
                                            hidden
                                            type="submit"
                                            ref="updateNurseButton"
                                        >
                                        </v-btn>
                                    </v-col>

                                </v-row>
                                <v-divider></v-divider>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDetailsDialog">Close</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                color="primary"
                title="View Details"
                @click="viewDetails(item)"
            >
                mdi-eye
            </v-icon>
            <v-icon
                small
                color="success"
                title="Download CV"
                @click="downloadForm(item)"
            >
                mdi-cloud-download
            </v-icon>
            <v-icon
                small
                color="success"
                title="Download Transcript"
                @click="downloadForm(item)"
            >
                mdi-cloud-download
            </v-icon>
        </template>
        <template v-slot:item.id="{ item, index }">
            {{(++index)}}
        </template>
        <template v-slot:item.created_at="{ item }">
            {{item.created_at | longDate}}
        </template>
        <template v-slot:item.dob="{ item }">
            {{item.dob | longDate}}
        </template>
        <template v-slot:item.status="{ item }">
            <span class="text-capitalize">{{item.status}} <v-icon
                small
                class="mr-2"
                color="primary"
                title="Update Status"
                @click="updateStatus(item)"
            >
                mdi-pencil
            </v-icon></span>
        </template>
        <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="getNurses"
            >
                Reset
            </v-btn>
        </template>
    </v-data-table>

    <v-dialog
        v-model="statusDialog"
        width="400"
    >
        <v-card class="p-12">
            <div class="row p-0 m-0">
                <div class="col-md-12 col-sm-12">
                    <v-card-title class="d-flex justify-content-center text-center text-primary">
                        Update Status
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="nursePaymentForm" v-model="valid" :action="`${registrationRoute}/${statusForm.id}`" method="POST">

                        <v-card-text>
                            <v-row class="pa-0 m-0">
                                <v-select
                                    label="Status"
                                    v-model="statusForm.status"
                                    :items="filteredStatus"
                                    item-value="value"
                                    item-text="text"
                                    class="fields pa-3"
                                    filled rounded
                                    dense flat
                                ></v-select>
                                <select hidden name="status" id="status" v-model="statusForm.status">
                                    <option v-for="(status, i) in filteredStatus" :value="status.value" :key="i+'-status'">{{status.text}}</option>
                                </select>
                                <input type="hidden" name="_token" :value="csrfToken">
                                <input type="hidden" name="_method" value="PUT">
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-content-center text-center">

                            <v-btn
                                class="createBtn text-white"
                                color="grey"
                                depressed
                                type="button"
                                @click="cancelStatus"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                class="createBtn"
                                color="info"
                                depressed
                                type="submit"
                            >
                                Submit
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </div>
            </div>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    name: "NurseRegistrationComponent",
    props: ['registrationRoute', 'csrfToken'],
    data(){
        return{
            nurses: [],
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'Date Of Birth', value: 'dob' },
                { text: 'Phone Number', value: 'phone_number' },
                { text: 'Registration Date', value: 'created_at' },
                { text: 'Registration Status', value: 'registration_status' },
                { text: 'Processing Status', value: 'status' },
                { text: 'Actions', value: 'actions'},
            ],
            trials: 0,
            selectedForm: {},
            detailsDialog: false,
            valid: false,
            statusDialog: false,
            registrationValid: false,
            statusList: [
                {
                    text: 'All', value: ''
                },
                {
                    text: 'Processing', value: 'processing'
                },
                {
                    text: 'Processed', value: 'processed'
                },
                {
                    text: 'Canceled', value: 'canceled'
                },
            ],
            nurseFilter: '',
            search: '',
            statusForm: new Form({
                status: '',
                id: null
            })
        }
    },
    methods: {
        getNurses(){
            axios.get('/nurse-registration')
                .then((response) => {
                    this.nurses = response.data
                })
                .catch((error) => {
                    console.log(error.response.data)
                    this.trials++
                    if(this.trials < 5){
                        this.getNurses()
                    }
                })
        },
        viewDetails(form){
            this.selectedForm = form
            this.detailsDialog = true
        },
        closeDetailsDialog(){
            this.selectedForm = {}
            this.detailsDialog = false
        },
        downloadForm(form){},
        updateForm(){
            if(!this.$refs.nurseRegisterForm.validate())return
            this.$refs.updateNurseButton.$el.click()
        },
        updateStatus(item){
            this.statusForm.status = item.status
            this.statusForm.id = item.id
            this.statusDialog = true
        },
        cancelStatus(){
            this.statusDialog = false
            this.statusForm.reset()
        },
    },
    computed: {
        filteredList(){
            return this.nurses.filter((nurse) => {
                return nurse.status.match(this.nurseFilter)
            })
        },
        filteredStatus(){
            return this.statusList.filter((status) => {
                return status.value.length > 1
            })
        },
    },
    created() {
        this.getNurses()
    }
}
</script>

<style scoped>

</style>
