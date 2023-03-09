import { Meta } from "./.nuxt/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nuxt-Mazz',
            meta: [
                {name: 'description', content: 'Demo merch app with Nuxt3 and tailwind CSS' }
            ],
            link:[
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
})
