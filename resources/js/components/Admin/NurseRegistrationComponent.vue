<template>
<div>
    <v-data-table
        :headers="headers"
        :items="nurses"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-toolbar-title>Nurse Registration List</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
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
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                color="primary"
                @click="viewDetails(item)"
            >
                mdi-eye
            </v-icon>
            <v-icon
                small
                color="success"
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
            {{item.dob !== null ? "Completed" : "Pending"}}
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
</div>
</template>

<script>
export default {
    name: "NurseRegistrationComponent",
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
                { text: 'Registration Status', value: 'status' },
                { text: 'Actions', value: 'actions'},
            ],
            trials: 0,
            selectedForm: {},
            detailsDialog: false
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
        updateForm(){},
    },
    created() {
        this.getNurses()
    }
}
</script>

<style scoped>

</style>
