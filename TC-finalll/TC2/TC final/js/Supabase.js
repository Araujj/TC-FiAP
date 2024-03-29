// Importado modulo do create client no arquivo JS

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Configuração do Supabase
const supabaseUrl = 'https://oqlkznbuefxvmycigqql.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbGt6bmJ1ZWZ4dm15Y2lncXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTk5MzQsImV4cCI6MjAyMTQzNTkzNH0.JD8OroYxDYTDcRD-moNnWeV5gRemUzqjAP8k1bHTnx8';

const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const userEmail = emailInput.value;

        signInWithEmail(userEmail);
    });

    async function signInWithEmail(userEmail) {
        try {
            const { data, error } = await supabase.auth.signInWithOtp({
                email: userEmail,
            });

            if (error) {
                console.error(error.message);
                alert('Erro ao enviar o link de acesso. Por favor, tente novamente.');
            } else {
                alert('Link de acesso enviado com sucesso. Verifique seu e-mail.');
            }
        } catch (error) {
            console.error(error.message);
            alert('Ocorreu um erro. Por favor, tente novamente.');
        }
    }
});