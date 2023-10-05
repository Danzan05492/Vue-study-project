<template>
    <select :value="modelValue" @change="changeOption"> 
        /** Не понял в туторе v-model а не :value...
        потому что v-model это "обёртка" над :value и @change(В данном случае, для простых полей ввода - input).
        Таким образом, пропихнув значение через v-model сначала сам vue под капотом менял значение, а потом и Вы сверху через обработчик change.
        Таким образом, vue мутировал проп. 
        */
        <option disabled value="">Выберите из списка</option>
        <option
         v-for="option in options" 
         :key="option.value" 
         :value="option.value"
         >
         {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props:{
            modelValue:{
                type: String
            },
            options:{
                type: Array,
                default: () =>[]
            }
        },
        methods:{
            changeOption(event){
                this.$emit('update:modelValue',event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>