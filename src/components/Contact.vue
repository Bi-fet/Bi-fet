<template>
    <section class="contact-container" id="contact">
        <h1 class="title contact">Contate-nos</h1>
        <form @submit.prevent="submitForms" class="contact-form">
            <div class="form-group">
                <input type="text" id="name" v-model="formData.name" required placeholder="Nome *">
            </div>
            <div class="form-group">
                <input type="email" id="email" v-model="formData.email" required placeholder="E-mail *">
            </div>
            <div class="form-group">
                <input type="text" id="subject" v-model="formData.subject" placeholder="Assunto">
            </div>
            <div class="form-group">
                <textarea id="message" v-model="formData.message" rows="6" placeholder="Mensagem"></textarea>
            </div>
            <Button text="Enviar mensagem" type="submit" class="submit" />
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const submitForms = () => {
    alert('Mensagem enviada com sucesso');
    formData.value = { name: '', email: '', subject: '', message: '' };
}

</script>

<style>
.contact-container {
    background-image: url(../assets/images/bg-contact.svg);
    background-size: 100%;
}

.contact {
    margin-bottom: -60px;
}

form {
    max-width: 700px;
    margin: 80px auto;
    padding: 40px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--text-color);
    border-radius: var(--border-radius-small);
    font-family: var(--font-family-sans-serif);
    font-size: var(--font-size-base);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--text-color);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.form-group textarea {
    resize: vertical;
}

.submit {
    margin-bottom: 20px;
}

@media (max-width: 480px) {
    form {
        padding: 20px;
        margin: 40px 20px;
    }

    .contact {
        margin-bottom: -40px;
    }

    .form-group input,
    .form-group textarea {
        font-size: 0.9rem;
        padding: 10px 12px;
    }

    .submit {
        margin-bottom: 15px;
    }
}
</style>