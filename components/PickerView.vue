<template>
    <body class="flex flex-row h-full w-full bg-auto bg-no-repeat bg-fixed" style="background-image: url(/images/theCookingBuddy.png);">
        <section class="basis-3/5 mt-3 ml-10">
            <div>
                <h2 class="font-sans font-bold text-3xl mb-2 h-1/5">Let's Get Cooking Your Way</h2>
                <h3 class="text-gray-500 font-sans font-bold text-2xl h-1/5 mb-3">Choose the way you would like to prepare your food!</h3>
                <section class="h-3/5">
                    <button @click="popClick" class="w-2/5 mt-2 p-8 font-sans font-bold text-gray-500 border-2 border-gray-500 rounded hover:text-primary hover:border-primary active:text-black active:border-black focus:text-primary focus:border-primary">{{ popDish }}</button>
                    <button @click="quickClick" class="w-2/5 mt-2 ml-1 p-8 font-sans font-bold text-gray-500 border-2 border-gray-500 rounded hover:text-primary hover:border-primary active:text-black active:border-black focus:text-primary focus:border-primary">{{ quickC }}</button>
                    <button @click="vegClick" class="w-2/5 mt-1 p-8 font-sans font-bold text-gray-500 border-2 border-gray-500 rounded hover:text-primary hover:border-primary active:text-black active:border-black focus:text-primary focus:border-primary">{{ vegan }}</button>
                    <button @click="protClick" class="w-2/5 mt-1 ml-1 p-8 font-sans font-bold text-gray-500 border-2 border-gray-500 rounded hover:text-primary hover:border-primary active:text-black active:border-black focus:text-primary focus:border-primary">{{ protein }}</button>
                    <button @click="confirm" class="font-sans font-bold bg-primary text-white px-2 py-2 w-2/5 rounded mt-1 hover:border-2 hover:border-primary hover:bg-white hover:text-primary">Lets Cook!</button>
                    <br>
                    <button @click="reset" class="font-sans font-bold bg-primary text-white px-2 py-2 w-2/5 rounded mt-1 hover:border-2 hover:border-primary hover:bg-white hover:text-primary">Reset Choice</button>
                    <p v-if="popButn">You have selected {{ popDish }}</p>
                    <p v-if="quickButn"> You have selected {{ quickC }}</p>
                    <p v-if="proteinButn"> You have selected {{ protein }}</p>
                    <p v-if="veganButn"> You have selected {{ vegan }}</p>
                    <p v-if="popButn && confirmed">{{ popDish }} has been confirmed for selection</p>
                    <p v-if="quickButn && confirmed">{{ quickC }} has been confirmed for selection</p>
                    <p v-if="veganButn && confirmed">{{ vegan }} has been confirmed for selection</p>
                    <p v-if="proteinButn && confirmed">{{ protein }} has been confirmed for selection</p>
                </section>
            </div>
        </section>
    </body>
</template>

<script>
export default {
    data() {
        return {
            popDish: "Popular Dishes",
            quickC: "Quick Eats",
            vegan: "Vegan Dishes",
            protein: "High Protein",
            popButn: false,
            quickButn: false,
            veganButn: false,
            proteinButn: false,
            confirmed: false
        }
    },
    methods: {
        popClick() {
            this.popButn = true;
            this.quickButn = false;
            this.veganButn = false;
            this.proteinButn = false;
            this.confirmed = false;
        },
        quickClick() {
            this.popButn = false;
            this.quickButn = true;
            this.veganButn = false;
            this.proteinButn = false;
            this.confirmed = false;

        },
        vegClick() {
            this.popButn = false;
            this.quickButn = false;
            this.veganButn = true;
            this.proteinButn = false;
            this.confirmed = false;

        },
        protClick() {
            this.popButn = false;
            this.quickButn = false;
            this.veganButn = false;
            this.proteinButn = true;
            this.confirmed = false;

        },
        confirm() {
            this.confirmed = true;
        },
        reset() {
            this.popButn = false;
            this.quickButn = false;
            this.veganButn = false;
            this.proteinButn = false;
            this.confirmed = false;
        }
    }

}
</script>
