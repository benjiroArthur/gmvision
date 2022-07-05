<template>
    <div style="height: 300px; overflow-y: auto">
       <div>
           <p>
               Abundant Hayford Aggrey is a Ghanaian Administrator, gender activist,
               and the Executive Director of Golden Mothers Vision International and the National President of The Coalition of NGOs for Women and Children.
               Golden Mothers International is an NGO that seeks to address women’s and children four sectorial  (Health, Food, Clothing and Governance) in Ghana.
           </p>
           <p>
               Abundant Aggrey established the first Coalition of NGOs for Women and Children in Ghana and also set up a Donation Center, with a legal Center and a
               Counselling Center to render sexual and gender based violence and child abuse services in different locations in Ghana, she is also a counsellor,
               and a motivational public speaker. She  was the first woman to represent women and children on CCM GHANA for Global Fund.
           </p>
           <p>
               Administrative Consultant, Expert  in gender issues  and also a consultant and trainer on gender and women’s human rights. She also worked with the FIDA GHANA.
           </p>
           <!--<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#aboutCeoModal">
               Read More
           </button>-->
       </div>
        <div class="modal fade" id="aboutCeoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Mrs Aggrey Abundant <span>CEO & Founder of GMVINT.</span></h5>
                    </div>
                    <div class="modal-body">
                        <p>
                            Abundant Hayford Aggrey (born 1981) is a Ghanaian Administrator, gender activist,
                            and the Executive Director of Golden Mothers Vision International and the National President of The Coalition of NGOs for Women and Children.
                            Golden Mothers International is an NGO that seeks to address women’s and children four sectorial  (Health, Food, Clothing and Governance) in Ghana.
                        </p>
                        <p>
                            Abundant Aggrey established the first Coalition of NGOs for Women and Children in Ghana and also set up a Donation Center, with a legal Center and a
                            Counselling Center to render sexual and gender based violence and child abuse services in different locations in Ghana, she is also a counsellor,
                            and a motivational public speaker. She  was the first woman to represent women and children on CCM GHANA for Global Fund.
                        </p>
                        <p>
                            Administrative Consultant, Expert  in gender issues  and also a consultant and trainer on gender and women’s human rights. She also worked with the FIDA GHANA.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary meet" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AboutCeo",
        data () {
            return {
                dialog: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .meet{
        background: gray;
    }
</style>
