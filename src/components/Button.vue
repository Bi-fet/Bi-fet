<template>
    <div class="button-container">
        <button class="btn-primary" @click="handleClick">
            {{ text }}
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    targetId: {
        type: String,
        required: true
    },
});

const emit = defineEmits(['buttonClick']);

const handleClick = () => {
    emit('buttonClick', props.targetId);
}
</script>

<style>
.btn-primary {
    background-color: var(--btn-color);
    color: var(--btn-text);
    padding: 10px 20px;
    min-width: 220px;
    border: none;
    cursor: pointer;
    border-radius: var(--border-radius-small);
    font-family: var(--font-family-sans-serif);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    transition: background-color 1s ease;
    transition: transform 0.1s ease-out
}

.btn-primary:hover {
    background-color: var(--btn-hover);
    border: none;
}

.btn-primary:active {
    transform: scale(1.05);
}

@media (max-width: 480px) {
  .btn-primary {
    padding: 14px 28px;
    min-width: 260px;
    font-size: calc(var(--font-size-base) * 1.1);
  }
}
</style>